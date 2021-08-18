/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { HeaderOption, hideHeader, showMenu } from '../../_store/slice/header-option';
import { fetchLayerStyles, fetchGlobalProps } from '../../_store/slice/map-layer';
import Map from '../../_component/map';
import { LayerOption } from './layer-option';
import { ReducerType } from '../../_store';
import gisServer from '../../_api/gis-backend';
import { LayerNames } from '../../_constant/map';

export function CCTV({ history }: RouteComponentProps) {
  const headerOption = useSelector<ReducerType, HeaderOption>((state) => state.headerOption);
  const dispatch = useDispatch();
  const [selectedFeatures, setSelectedFeatures] = useState<any[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchDelayInterval, setSearchDelayInterval] = useState<ReturnType<typeof setTimeout>>();
  const [searchPlaceholder, setSearchPlaceholder] = useState<string>('');
  const [searchMode, setSearchMode] = useState<'none' | 'address' | 'coordinates' | 'cctv'>('none');
  const [searchList, setSearchList] = useState<any[]>([]);
  const [searchPageToken, setSearchPageToken] = useState<string>();
  const map = useRef<any>();
  const layerOption = useRef<any>();
  // let searchDelayInterval: ReturnType<typeof setTimeout>;

  useEffect(() => {
    dispatch(hideHeader());
    dispatch(fetchLayerStyles());
    dispatch(fetchGlobalProps());
  }, []);

  useEffect(() => {
    const markerDetails = document.querySelector('.marker-details') as HTMLDivElement;
    if (selectedFeatures.length > 0) {
      markerDetails.classList.add('active');
    } else {
      markerDetails.classList.remove('active');
    }
  }, [selectedFeatures.length]);

  useEffect(() => {
    setSearchKeyword('');
    switch (searchMode) {
      case 'address':
        setSearchPlaceholder('예) 삼성동 25, 독립기념관, 반포대로 58');
        break;
      case 'coordinates':
        setSearchPlaceholder('예) 36.829024, 127.096057');
        break;
      case 'cctv':
        setSearchPlaceholder('CCTV 검색어 입력');
        break;
      case 'none':
      default:
        setSearchPlaceholder('주소, 좌표, CCTV 검색');
    }
  }, [searchMode]);

  useEffect(() => {
    if (searchDelayInterval) {
      clearInterval(searchDelayInterval);
    }

    setSearchList([]);
    setSearchPageToken(undefined);

    if (searchKeyword.length > 0) {
      setSearchDelayInterval(setTimeout(() => searchFeature(true), 1000));
    }
  }, [searchKeyword]);

  const onClickMenu = () => {
    clearSelectedFeatures();
    dispatch(showMenu());
  };

  const onSelectClusterFeature = (features: any[]) => {
    setSelectedFeatures(features);
  };

  const clearSelectedFeatures = () => {
    setSelectedFeatures([]);
  };

  const onClickShowLayerOption = () => {
    clearSelectedFeatures();
    layerOption.current.show();
  };

  const onHide = () => {
    map.current.initLayer();
  };

  const searchFeature = (isFirst: boolean) => {
    if (searchMode === 'address') {
      gisServer.searchFeaturesByAddress(searchKeyword, searchPageToken).then((payload) => {
        const list =
          payload?.response?.items?.map((item: any) => ({
            id: Math.random(),
            place: item.place,
            address: item.address,
            road_address: item.road_address,
            lat: item.point?.lat,
            lon: item.point?.lng,
          })) ?? [];
        setSearchList(isFirst ? list : [...searchList, ...list]);
        setSearchPageToken(payload?.response?.pagetoken ?? undefined);
      });
    } else if (searchMode === 'coordinates') {
      const [lat, lon] = searchKeyword.split(',');
      if (lat && lon && !Number.isNaN(lat) && !Number.isNaN(lon)) {
        // ex: 36.829024, 127.09605799999997
        gisServer.searchFeaturesByCoordinates(Number(lat), Number(lon)).then((payload) => {
          const list =
            payload?.response?.results?.map((result: any) => ({
              id: Math.random(),
              place: result.name,
              address: result.name,
              road_address: undefined,
              lat,
              lon,
            })) ?? [];
          setSearchList(isFirst ? list : [...searchList, ...list]);
        });
      }
    } else if (searchMode === 'cctv') {
      gisServer
        .getFeaturesByFilter({
          typenames: LayerNames,
          srsname: 'EPSG:4326',
          cql_filter: `a.name like '%${searchKeyword}%'`,
          orderby: ['name'],
        })
        .then((payload) => {
          if (Array.isArray(payload) === false) {
            return;
          }

          const list = payload[0].features?.map((feature: any) => ({
            id: Math.random(),
            place: feature.properties?.name,
            address: undefined,
            road_address: undefined,
            lat: feature.geometry?.coordinates[1],
            lon: feature.geometry?.coordinates[0],
          }));
          setSearchList(isFirst ? list : [...searchList, ...list]);
        });
    }
  };

  const onScrollSearchList = (event: any) => {
    if (searchMode === 'coordinates' || searchMode === 'none') {
      return;
    }

    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const isBottom = scrollHeight <= scrollTop + clientHeight + 30;

    if (isBottom) {
      if (searchDelayInterval) {
        clearInterval(searchDelayInterval);
      }

      if (searchKeyword.length > 0) {
        setSearchDelayInterval(setTimeout(() => searchFeature(false), 300));
      }
    }
  };

  const featureDetail = (properties: any) => {
    const {
      id,
      name,
      address,
      asset_type,
      sublayer_id,
      ptz,
      direction,
      distance,
      // uid,
    } = properties;
    return (
      <div className="row" key={id} onClick={() => onClickFeatureDetail(id)}>
        <ul>
          <li className="tags">
            <span>{asset_type}</span>
            <span>{sublayer_id}</span>
            {ptz ? <span>PTZ</span> : ''}
          </li>
          <li className="address">{name}</li>
          <li className="title">{address}</li>
          <li className="information">
            {direction >= 0 ? (
              <div>
                <span>방향</span>
                <span>{direction}˚</span>
                <svg
                  style={{ transform: `rotate(${direction}deg)` }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                </svg>
              </div>
            ) : (
              <div>
                <span>방향</span>
                <span>미표기</span>
              </div>
            )}
            <div>
              <span>가시거리</span>
              <span>{distance}m</span>
            </div>
          </li>
        </ul>
        <div className="more">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
          </svg>
        </div>
      </div>
    );
  };

  const onClickFeatureDetail = (id: string) => {
    history.push(`/cctv/${id}`);
  };

  return (
    <>
      <LayerOption onHide={onHide} ref={layerOption} />
      <main className="content cctv">
        {/* 메뉴버튼, 검색바 */}
        <header>
          {searchMode !== 'none' && (
            <button type="button" className="btn-back" onClick={() => setSearchMode('none')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
              </svg>
            </button>
          )}
          {searchMode === 'none' && (
            <button type="button" className="toggle-menu" onClick={onClickMenu}>
              <svg viewBox="0 0 100 100" width="80">
                <path d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                <path d="m 30,50 h 40" />
                <path d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
              </svg>
            </button>
          )}
          <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
              onFocus={() => {
                setSelectedFeatures([]);
                if (searchMode === 'none') {
                  setSearchMode('address');
                }
              }}
            />
          </div>
        </header>
        {/* 레이어 옵션 사이드바 */}
        <button type="button" className="local-toggle-menu" onClick={onClickShowLayerOption}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
          </svg>
        </button>
        {/* 지도 컴포넌트 */}
        {headerOption.visible === false && (
          <Map showLayer showZoom useStateStoring onSelect={onSelectClusterFeature} ref={map} />
        )}
        {/* 클릭한 마커 정보 */}
        <div className="marker-details">
          <section className="move-down">
            <div className="arrow" onClick={clearSelectedFeatures}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              </svg>
            </div>
            {/* <div className="arrow" onClick={clearSelectedFeatures} /> */}
          </section>
          <section className="cctv-locations">
            {selectedFeatures.map((feature) => featureDetail(feature.properties))}
          </section>
        </div>
      </main>

      <div className={`modal modal-search-full ${searchMode !== 'none' ? 'active' : ''}`}>
        <header className="filters">
          <button type="button">
            <input
              id="selectAddress"
              type="radio"
              name="searchFilter"
              checked={searchMode === 'address'}
              onChange={(event) => {
                if (event.target.checked) {
                  setSearchMode('address');
                }
              }}
            />
            <label htmlFor="selectAddress">주소검색</label>
          </button>
          <button type="button">
            <input
              id="selectLocation"
              type="radio"
              name="searchFilter"
              checked={searchMode === 'coordinates'}
              onChange={(event) => {
                if (event.target.checked) {
                  setSearchMode('coordinates');
                }
              }}
            />
            <label htmlFor="selectLocation">좌표검색</label>
          </button>
          <button type="button">
            <input
              id="selectCCTV"
              type="radio"
              name="searchFilter"
              checked={searchMode === 'cctv'}
              onChange={(event) => {
                if (event.target.checked) {
                  setSearchMode('cctv');
                }
              }}
            />
            <label htmlFor="selectCCTV">CCTV검색</label>
          </button>
        </header>
        {searchList.length > 0 ? (
          <section onScroll={onScrollSearchList}>
            {searchList.map((feature) => (
              <div
                className="row"
                key={feature.id}
                onClick={() => {
                  setSearchMode('none');
                  map.current.moveCenter([feature.lon, feature.lat], 17);
                }}
              >
                <ul>
                  <li className="tags">
                    {searchMode === 'cctv' ? <span>CCTV</span> : <span>위치</span>}
                  </li>
                  <li className="address">{feature.place ?? '지역정보 미입력'}</li>
                  {feature.address ? <li className="title">{feature.address}</li> : ''}
                  {feature.road_address ? <li className="title">{feature.road_address}</li> : ''}
                </ul>
                <div className="more">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                  </svg>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="empty">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              </svg>
              조회된 기록이 없습니다.
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export { FeatureDetail } from './feature-detail';
