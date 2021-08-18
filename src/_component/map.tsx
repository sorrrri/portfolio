/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable camelcase */
import React, { useEffect, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import gisServer from '../_api/gis-backend';
import { ReducerType } from '../_store';
import { setCenterCoordinates } from '../_store/slice/map-layer';
import { CluasterDistanceOfIconSize, LayerNames, IconSize } from '../_constant/map';

type Props = {
  showLayer?: boolean;
  showZoom?: boolean;
  selectType?: 'point' | 'circle' | 'square' | 'polygon';
  onSelect?: (features: any[]) => void;
  useStateStoring?: boolean;
  centerXY?: number[];
  onLoad?: () => void;
};

var filters: any[] = [];

const Map = React.forwardRef((props: Props, ref) => {
  const mapLayer = useSelector<ReducerType, any>((state) => state.mapLayer);
  const dispatch = useDispatch();
  const { showLayer, showZoom, selectType, onSelect, useStateStoring, centerXY, onLoad } = props;
  const { dmsGis } = window as any;
  const [zoomLevel, setZoomLevel] = useState<number>(Number(process.env.REACT_APP_MAP_INIT_ZOOM));
  const [loadedMap, setLoadedMap] = useState<boolean>(false);
  // const [mapObj, setMapObj] = useState<any>({});

  const loadFilters = () => {
    // console.log('styles:');
    // console.log(mapLayer.styles);
    filters =
      mapLayer.styles.length > 0
        ? [
            ...mapLayer.styles
              .filter((style: any) => style.checked)
              .map((style: any) => `'${style.sublayer_id}'`),
          ]
        : filters;
  };

  // 지도 초기화
  const initMap = () => {
    // console.log('init map');
    const [lon, lat] = useStateStoring
      ? mapLayer.centerCoordinates
      : centerXY ?? [
          Number(process.env.REACT_APP_MAP_INIT_LON),
          Number(process.env.REACT_APP_MAP_INIT_LAT),
        ];

    const mapOptions = {
      type: 'kakao_bg', // Map Type (kakao_bg, google_bg, vwolrd_bg, baroemaphd_bg, baroemap_bg)
      target: 'maps', // 타겟 Element ID
      lon, // 경도
      lat, // 위도
      zoom: zoomLevel, // 초기 설정 Zoom Level
      minZoom: 10, // 최소 Zoom Level
      maxZoom: 20, // 최대 Zoom Level
      mousePosition: false, // 지도 위경도 표시 여부 (마우스이동)
      overViewMap: false, // 미니 맵 표시 여부
    };

    // 맵 생성 모듈 API 호출
    dmsGis.createMap(mapOptions, (map: any) => {
      if (onLoad) {
        onLoad();
      }

      map.addEventListener('moveend', (e: any) => {
        if (loadedMap && useStateStoring) {
          console.log('moveend');
          dispatch(setCenterCoordinates(dmsGis.getMapCenter()));
        } else {
          initLayer();
        }
        setLoadedMap(true);
      });
    });
  };

  // 자산 생성
  const initLayer = async () => {
    // console.log('init layer');
    // dmsGis.clearWfsLayer();
    // dmsGis.clearSelectInteraction();
    // dmsGis.clearDrawingInteraction();
    loadFilters();
    if (showLayer) {
      // console.log('filters:');
      // console.log(filters);
      const features = await gisServer.getClusterFeatures({
        // 자산 요청 대상 레이어명 (다중 레이어 처리를 위한 배열)
        typenames: LayerNames,
        // (현재 지도 스케일 / 클러스터 설정 값(아이콘사이즈)) x 2
        cluster_distance: (dmsGis.getCurrentScale() / CluasterDistanceOfIconSize[IconSize]) * 2,
        // cluster 를 적용할 대상 레이어명 (다중 레이어 처리를 위한 배열)
        cluster_layers: LayerNames,
        // 현재 보여지는 화면 영역 범위 값 (extent)
        bbox: `${dmsGis.getMapExtent().join(',')}`,
        // 요청할 레이어 하위의 서브레이어, optional ex) {"layer_cctv": ["'방범'"], "layer_fclts4":["'비상벨'"]}
        sublayer_filter: filters && filters.length > 0 ? { layer_cctv: filters } : undefined,
        // 지도 위 표출될 아이콘의 사이즈
        icon_size: IconSize,
      });
      // const features = await gisServer.getClusterFeatures(
      //   LayerNames[0],
      //   `${dmsGis.getMapExtent().join(',')}`,
      //   IconSize,
      //   (dmsGis.getCurrentScale() / CluasterDistanceOfIconSize[IconSize]) * 2,
      //   LayerNames[0]
      // );

      // 자산 레이서 생성
      // const { styles } = mapLayer;
      // dmsGis.createWfsLayer(features, styles);
      dmsGis.createWfsLayer(features, {});

      // 자산 Hover 기능 on (마우스 커서 pointer 적용)
      dmsGis.onHoverFeature();

      initSelectInteraction();
    }
  };

  // 지도위 자산 아이콘 선택 이벤트 핸들러 정의
  function initSelectInteraction() {
    if (selectType === 'point') {
      dmsGis.onSelectInteractionPoint(CluasterDistanceOfIconSize[IconSize], onSelectInteraction);
    } else {
      dmsGis.onSelectInteraction(selectType, onSelectInteraction);
    }
  }

  // 지도위 마커 클릭 이벤트 리스너
  async function onSelectInteraction(event: {
    wkt?: string;
    center?: number[];
    convert_center: number[];
    radius: number;
  }) {
    loadFilters();
    const { wkt, center, convert_center, radius } = event;
    let requestPayload: any = {
      // 자산 요청 대상 레이어명 (다중 레이어 처리를 위한 배열)
      typenames: LayerNames,
      // (현재 지도 스케일 / 클러스터 설정 값(아이콘사이즈)) x 2
      cluster_distance: (dmsGis.getCurrentScale() / CluasterDistanceOfIconSize[IconSize]) * 2,
      // 요청할 레이어 하위의 서브레이어, optional ex) {"layer_cctv": ["'방범'"], "layer_fclts4":["'비상벨'"]}
      sublayer_filter: filters && filters.length > 0 ? { layer_cctv: filters } : undefined,
    };

    if (selectType === 'point') {
      // 단일선택
      requestPayload = {
        ...requestPayload,
        center_point: center,
        radius,
        convert_center,
      };
    } else if (wkt) {
      // 다중선택 - polygon, square
      requestPayload = {
        ...requestPayload,
        wkt,
      };
    } else {
      // 다중선택 - circle
      requestPayload = {
        ...requestPayload,
        center_point: center,
        radius,
      };
    }

    const clusterFeatureDetail = await gisServer.getClusterFeatureDetail(requestPayload);
    const { features } = clusterFeatureDetail;
    if (features && onSelect) {
      onSelect(features);
    }
  }

  function moveCenter(coordinates: number[], zoom?: number) {
    const options = {
      coordinates,
      animate: undefined,
      marker: undefined,
      markerSize: undefined,
      zoom: undefined,
    };

    dmsGis.moveCurrentLocation(options);

    if (zoom) {
      dmsGis.setMapZoom(zoom);
    }
  }

  function addMarker(options: { coordinates: number[]; image?: string; moveMapCenter?: boolean }) {
    const items = [
      {
        uid: Math.random(),
        coordinates: options.coordinates,
      },
    ];
    const imgage =
      options.image ??
      'data:image/png;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTIgNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUyIDUyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojMTA4MUUwOyIgZD0iTTM4Ljg1Myw1LjMyNEwzOC44NTMsNS4zMjRjLTcuMDk4LTcuMDk4LTE4LjYwNy03LjA5OC0yNS43MDYsMGgwDQoJQzYuNzUxLDExLjcyLDYuMDMxLDIzLjc2MywxMS40NTksMzFMMjYsNTJsMTQuNTQxLTIxQzQ1Ljk2OSwyMy43NjMsNDUuMjQ5LDExLjcyLDM4Ljg1Myw1LjMyNHogTTI2LjE3NywyNGMtMy4zMTQsMC02LTIuNjg2LTYtNg0KCXMyLjY4Ni02LDYtNnM2LDIuNjg2LDYsNlMyOS40OTEsMjQsMjYuMTc3LDI0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

    dmsGis.addMarker(items, imgage);

    if (options.moveMapCenter) {
      moveCenter(options.coordinates);
    }
  }

  useImperativeHandle(ref, () => ({
    initMap,
    initLayer,
    moveCenter,
    addMarker,
  }));

  useEffect(() => {
    initMap();

    return () => {
      // dmsGis.clearWfsLayer();
      // dmsGis.clearSelectInteraction();
      // dmsGis.clearDrawingInteraction();
      dmsGis.removeMap();
    };
  }, []);

  useEffect(() => {
    // console.log('effect center', mapLayer.centerCoordinates);
    initLayer();
  }, [mapLayer.centerCoordinates]);

  useEffect(() => {
    // console.log('effect default', mapLayer.centerCoordinates);
    moveCenter(mapLayer.defaultCoordinates);
  }, [mapLayer.defaultCoordinates]);

  useEffect(() => {
    dmsGis.setMapZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <>
      <div id="maps" />
      {/* 지도 확대/축소 */}
      {showZoom && (
        <div className="zoom-in-out">
          <button
            className="zoom-out"
            type="button"
            onClick={() => {
              const nextZoomLevel = zoomLevel - 1;
              setZoomLevel(nextZoomLevel < 10 ? 10 : nextZoomLevel);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 12h14v2h-14z" />
            </svg>
          </button>
          <div className="range-slider">
            <input
              type="range"
              min="10"
              max="20"
              step="1"
              value={zoomLevel}
              onChange={(event) => {
                setZoomLevel(Number(event.target.value));
              }}
            />
          </div>
          <button
            className="zoom-in"
            type="button"
            onClick={() => {
              const nextZoomLevel = zoomLevel + 1;
              setZoomLevel(nextZoomLevel > 20 ? 20 : nextZoomLevel);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
});

Map.propTypes = {
  showLayer: PropTypes.bool,
  showZoom: PropTypes.bool,
  selectType: PropTypes.oneOf(['point', 'circle', 'square', 'polygon']),
  onSelect: PropTypes.func,
  useStateStoring: PropTypes.bool,
  centerXY: PropTypes.arrayOf<number>(() => null),
  onLoad: PropTypes.func,
};

Map.defaultProps = {
  showLayer: false,
  showZoom: false,
  selectType: 'point',
  onSelect: undefined,
  useStateStoring: false,
  centerXY: undefined,
  onLoad: undefined,
};

export default Map;
