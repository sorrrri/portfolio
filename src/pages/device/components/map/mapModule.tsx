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

// 주석처리 작업 이어나가야함.
export const MapModule = (props: any) => {
  const [devicesForMap, setDevicesForMap] = useState<any[]>([]);
  const [naverMap, setNaverMap] = useState<naver.maps.Map>();
  const [showMarkers, setShowMarkers] = useState<naver.maps.Marker[]>([]);

  useEffect(() => {
    fetchDevices();
  }, []);

  useEffect(() => {
    mapSetting();
  }, [devicesForMap]);

  const fetchDevices = () => {
    api.getDevicesForMap().then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response && Array.isArray(response.results)) {
        const ret = response.results.filter((item: any): boolean => item.type === 'CCTV');
        setDevicesForMap(ret);
        console.log(ret);
      }
    });
  };

  const setDefaultMapSetting = () => {
    const lng = Number(process.env.REACT_APP_MAP_INIT_LNG);
    const lat = Number(process.env.REACT_APP_MAP_INIT_LAT);
    const initZoom = Number(process.env.REACT_APP_MAP_INIT_ZOOM);

    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: initZoom,
      maxZoom: 15,
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
        // title: devicesForMap[i].name,
        title: devicesForMap[i].item_uuid,
        position: new naver.maps.LatLng(devicesForMap[i].latitude, devicesForMap[i].longitude),
        zIndex: 100,
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        // markerClick(marker);
        markerClicked(devicesForMap.filter((item) => item.item_uuid === marker.getTitle()));
      });
      markers.push(marker);
    }
  };

  const mapSetting = () => {
    const markers: naver.maps.Marker[] = [];
    // 지도 생성, max min zoom 확인
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(36.8169675, 127.1056431),
      zoom: 13,
      maxZoom: 15,
    });

    /*
    console.log(`lng: ${mapLng}, lat: ${mapLat}`);
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(mapLat, mapLng),
      zoom: mapInitZoom,
      maxZoom: 15,
    });
*/
    // 마커 생성
    for (let i = 0; i < devicesForMap.length; i++) {
      const marker = new naver.maps.Marker({
        // title: devicesForMap[i].name,
        title: devicesForMap[i].item_uuid,
        position: new naver.maps.LatLng(devicesForMap[i].latitude, devicesForMap[i].longitude),
        zIndex: 100,
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        // markerClick(marker);
        markerClicked(devicesForMap.filter((item) => item.item_uuid === marker.getTitle()));
      });
      markers.push(marker);
    }

    const markerClustering = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 15,
      map: map,
      markers: markers,
      disableClickZoom: true,
      gridSize: 50,
      // icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
      indexGenerator: [10, 100, 200, 500, 1000],
      stylingFunction: function (cluster: any[], clusterMarker: any, count: number) {
        $(clusterMarker.getElement()).find('div:first-child').text(count);
        // console.log(`stylingFunction - ${count}`);
        naver.maps.Event.addListener(clusterMarker, 'click', () => {
          const items = devicesForMap.filter((item) => {
            for (let i = 0; i < cluster.length; i++) {
              if (item.item_uuid === cluster[i].title) {
                return true;
              }
            }
            return false;
          });

          console.log('cluster click');
          markerClicked(items);
        });
      },
    });

    console.log(markerClustering);

    naver.maps.Event.addListener(map, 'bounds_changed', function () {
      console.log('bounds_changed');
      // console.log(map.getBounds());
      console.log(map.getBounds().getCenter());
    });
  };

  const markerClick = (marker: naver.maps.Marker) => {
    console.log(`marker Click : ${marker.getTitle()}`);
  };

  return (
    <>
      <div id="map" style={mapStyle} />
    </>
  );
};
