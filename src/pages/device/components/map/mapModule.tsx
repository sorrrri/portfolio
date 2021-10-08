/* eslint-disable no-else-return */
/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import api from '../../../../_api/backend';

const mapStyle = {
  width: '100%',
  height: '100%',
};

const markerIcon = {
  // cctv: <i class="fas fa-cctv"></i>
  // 공영주차장: <i className="fad fa-parking-circle" />
  // 공중화장실: <i className="fad fa-restroom" />
  // 교통관제센터: <i className="fad fa-traffic-light" />
  // 교통단속: <i className="fad fa-traffic-light-go" />
  // 도시공원: <i className="fad fa-trees" />
  // 비상벨: <i className="fad fa-bell-on" />
  // 산불감시: <i className="fad fa-fire-alt" />
  // 스쿨존: <i className="fad fa-school" />
  // 시설물관리: <i className="fad fa-building" />
  // 배경색상: bg-blue, bg-red, bg-orange, bg-green
  content: '<div class="marker-circle bg-blue"><i class="fas fa-cctv"></i></div>',
  size: new naver.maps.Size(40, 40),
  anchor: new naver.maps.Point(20, 20),
};

export const MapModule = (props: any) => {
  const [devicesForMap, setDevicesForMap] = useState<any[]>([]);
  const [naverMap, setNaverMap] = useState<naver.maps.Map>();
  const [markerCluster, setMarkerCluster] = useState<any>();
  const [clusterListener, setClusterListener] = useState<any>();

  useEffect(() => {
    fetchDevices(mapCorrd(36.8169675, 127.1056431), '2');
    setDefaultMapSetting();
  }, []);

  useEffect(() => {
    mapMarkerSetting();
  }, [devicesForMap]);

  const fetchDevices = (corrd: string, radius: string) => {
    console.log(`fetchDevices : coord: ${corrd}, radius: ${radius}`);
    api.getDevicesForMap(corrd, radius).then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response && Array.isArray(response.results)) {
        const ret = response.results.filter((item: any): boolean => item.type === 'CCTV');
        setDevicesForMap(ret);
        console.log(ret);
      }
    });
  };

  // type_property_icon으로 아이콘 결정
  const getMarkerIcon = (type: string) => {
    let className: string;
    if (type && type.length > 0) {
      className = type;
    } else {
      className = 'fas fa-cctv';
    }

    return {
      content: `<div class="marker-circle bg-blue"><i class="${className}"></i></div>`,
      size: new naver.maps.Size(30, 30),
      anchor: new naver.maps.Point(15, 15),
    };
  };

  const mapCorrd = (mapLat: number, mapLng: number) => {
    if (mapLat <= 0 || mapLng <= 0) {
      return '';
    }

    return `${mapLat.toString()} ${mapLng.toString()}`;
  };

  function changeMarkerClusterEvent(cluster: any[], clusterMarker: any, count: number) {
    $(clusterMarker.getElement())
      .find('div:first-child')
      .html(`<span class="marker-counter">${count}</span><i class="fas fa-cctv"></i>`);

    if (clusterListener) {
      naver.maps.Event.removeListener(clusterListener);
    }

    const listener = naver.maps.Event.addListener(clusterMarker, 'click', () => {
      const items = devicesForMap.filter((item) => {
        for (let i = 0; i < cluster.length; i++) {
          if (item.item_uuid === cluster[i].title) {
            return true;
          }
        }
        return false;
      });
      markerClicked(items);
    });
    setClusterListener(listener);
  }

  const setDefaultMapSetting = () => {
    const lng = Number(process.env.REACT_APP_MAP_INIT_LNG);
    const lat = Number(process.env.REACT_APP_MAP_INIT_LAT);
    const initZoom = Number(process.env.REACT_APP_MAP_INIT_ZOOM);

    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: initZoom,
      maxZoom: 15,
      minZoom: 10,
    });

    const markerClustering = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 15,
      map: map,
      disableClickZoom: true,
      averageCenter: true,
      gridSize: 80,
      icons: [markerIcon],
      // indexGenerator: [10, 100, 200, 500, 1000],
    });

    setMarkerCluster(markerClustering);

    const zoomScale = (zoomLevel: number) => {
      if (zoomLevel >= 15) {
        return '1.5';
      } else if (zoomLevel === 14) {
        return '2';
      } else if (zoomLevel === 13) {
        return '3.5';
      } else if (zoomLevel === 12) {
        return '4.5';
      } else if (zoomLevel === 11) {
        return '5.5';
      } else if (zoomLevel === 10) {
        return '6.5';
      } else {
        return '10';
      }
    };
    /*
    naver.maps.Event.addListener(map, 'bounds_changed', function () {
      fetchDevices(
        mapCorrd(
          (map.getBounds() as naver.maps.LatLngBounds).getCenter().lat(),
          (map.getBounds() as naver.maps.LatLngBounds).getCenter().lng()
        ),
        zoomScale(map.getZoom())
      );
      console.log(`bound : `, map.getBounds().getCenter());
    });
*/
    naver.maps.Event.addListener(map, 'dragend', function () {
      fetchDevices(
        mapCorrd(
          (map.getBounds() as naver.maps.LatLngBounds).getCenter().lat(),
          (map.getBounds() as naver.maps.LatLngBounds).getCenter().lng()
        ),
        zoomScale(map.getZoom())
      );
      console.log(`bound : `, map.getBounds().getCenter());
    });

    naver.maps.Event.addListener(map, 'zoom_changed', function () {
      fetchDevices(
        mapCorrd(
          (map.getBounds() as naver.maps.LatLngBounds).getCenter().lat(),
          (map.getBounds() as naver.maps.LatLngBounds).getCenter().lng()
        ),
        zoomScale(map.getZoom())
      );
      console.log(map.getZoom());
    });

    setNaverMap(map);
  };

  const markerClicked = (event: any) => {
    const arr = event;
    props.onClicked(arr);
  };

  const mapMarkerSetting = () => {
    const markers: naver.maps.Marker[] = [];
    for (let i = 0; i < devicesForMap.length; i++) {
      const marker = new naver.maps.Marker({
        title: devicesForMap[i].item_uuid,
        position: new naver.maps.LatLng(devicesForMap[i].latitude, devicesForMap[i].longitude),
        icon: getMarkerIcon(devicesForMap[i]?.type_property_icon),
        zIndex: 100,
      });

      marker.setMap(null);

      naver.maps.Event.addListener(marker, 'click', () => {
        markerClicked(devicesForMap.filter((item) => item.item_uuid === marker.getTitle()));
      });
      markers.push(marker);
    }

    if (markerCluster) {
      (markerCluster as any).setStylingFunction(changeMarkerClusterEvent);
      (markerCluster as any).setMarkers(markers);
      (markerCluster as any).onUpdate();
    }
  };

  return (
    <>
      <div id="map" style={mapStyle} />
    </>
  );
};
