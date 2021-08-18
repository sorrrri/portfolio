import React, { useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as _ from 'lodash';
import { showHeader } from '../../_store/slice/header-option';
import Map from '../../_component/map';
import gisServer from '../../_api/gis-backend';
import { LayerNames } from '../../_constant/map';
import * as device from '../../_util/device';
import * as toast from '../../_store/slice/toast';

type Params = {
  id: string;
};

const featureTitle = {
  area: '지역코드',
  district: '관할지구대',
  monitor_area: '관제장소',
  asset_type: '종류',
  name: '이름',
  asset_id: '식별번호',
  model: '모델명',
  pixel: '화소수',
  ptz: 'PTZ 유무',
  direction: '방향',
  distance: '가시거리',
  // problem_car: '작동상태',
  state: '작동상태',
  install_date: '설치일자',
};

export function FeatureDetail({ match }: RouteComponentProps) {
  const dispatch = useDispatch();
  const { id } = match.params as Params;
  const { dmsGis } = window as any;
  const [featureGeometry, setFeatureGeometry] = useState<any>({});
  const [featureProperties, setFeatureProperties] = useState<any>({});
  const [navgationModalVisible, setNavgationModalVisible] = useState<boolean>(false);
  const map = useRef<any>();

  const fetchFeature = async () => {
    const requestPayload: any = {
      // area: '11530',
      // 자산 요청 대상 레이어명 (다중 레이어 처리를 위한 배열)
      typenames: LayerNames,
      layer_uids: [id],
    };

    gisServer.getClusterFeatureDetail(requestPayload).then((payload) => {
      const { features } = payload;
      if (features && Array.isArray(features) && features.length > 0) {
        const { geometry, properties } = features[0];
        setFeatureGeometry(geometry);
        setFeatureProperties(properties);

        const { coordinates } = geometry;
        if (coordinates && Array.isArray(coordinates) && coordinates.length >= 2) {
          map.current.addMarker({
            coordinates: dmsGis.getTransForm(coordinates),
            moveMapCenter: true,
          });
        }
      }
    });
  };

  useEffect(() => {
    dispatch(
      showHeader({
        title: 'CCTV 상세정보',
        type: 'back',
      })
    );

    fetchFeature();
  }, []);

  const showNavigationModal = () => {
    setNavgationModalVisible(true);
  };

  const hideNavigationModal = () => {
    setNavgationModalVisible(false);
  };

  const goNavigationApp = (type: 'kakao' | 'naver' | 'tmap') => {
    const { coordinates } = featureGeometry;
    if (coordinates && Array.isArray(coordinates) && coordinates.length >= 2) {
      const [epsgLon, epsgLat] = coordinates;
      const [lon, lat] = dmsGis.getTransForm([epsgLon, epsgLat]);

      const isMobile = device.isMobile();
      let url;
      if (isMobile) {
        switch (type) {
          case 'kakao':
            url = `kakaomap://route?ep=${lat},${lon}`;
            break;
          case 'naver':
            url = `nmap://route/car?dlat=${lat}&dlng=${lon}`;
            break;
          case 'tmap':
            // url = `tmap://route?goalx=${lon}&goaly=${lat}&goalname=$title`;
            url = `tmap://route?goalx=${lon}&goaly=${lat}`;
            break;
          default:
            alert('지금 환경에서 지원하지 않습니다.');
            break;
        }
      } else {
        switch (type) {
          case 'kakao':
            url = `https://map.kakao.com/link/to/CCTV,${lat},${lon}`;
            break;
          case 'naver':
            url = `http://map.naver.com/index.nhn?elng=${lon}&elat=${lat}&etext=CCTV`;
            break;
          default:
            dispatch(toast.error({ message: '지금 환경에서 지원하지 않습니다.' }));
            break;
        }
      }

      if (url) {
        try {
          if (isMobile) {
            window.location.href = url;
          } else {
            window.open(url);
          }
        } catch (error) {
          console.log(123);
          console.log(error);
        }
      }
    } else {
      dispatch(toast.error({ message: '좌표정보가 미기입 되어 있습니다.' }));
    }
  };

  return (
    <>
      <main className="content cctv-details">
        <section>
          <div className="title">
            <strong>{featureProperties?.name ?? ''}</strong>
          </div>
          <div className="view">
            <Map showLayer={false} ref={map} />
            {/* <button type="button" className="btn-refresh">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
              </svg>
              <span>새로고침</span>
            </button> */}
          </div>
          <div className="address">
            <p>{featureProperties?.address ?? ''}</p>
            <button className="btn-navigation" type="button" onClick={showNavigationModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
              </svg>
              <span>내비게이션</span>
            </button>
          </div>
        </section>
        <section className="information">
          {_.map(featureTitle, (title, key) => {
            let value = featureProperties?.[key] ?? '';
            if (key === 'ptz') {
              value = value ? '사용' : '미사용';
            } else if (key === 'problem_car') {
              value = value ? '비정상' : '정상';
            }
            return (
              <div className="row" key={key}>
                <span>{title}</span>
                <span>{value}</span>
              </div>
            );
          })}
        </section>
      </main>
      {/* 길찾기 모달 */}
      {navgationModalVisible ? (
        <div className="overlay active" onClick={hideNavigationModal} />
      ) : (
        ''
      )}
      <div className={`modal modal-navigation ${navgationModalVisible ? 'active' : ''}`}>
        <div className="modal-header">
          <div className="title">
            <h3>길찾기</h3>
            <button type="button" className="close" onClick={hideNavigationModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal-content">
          <ul className="navigations">
            <li onClick={() => goNavigationApp('kakao')}>
              <img src="assets/images/logo_kakaomap.png" alt="카카오맵 바로가기" />
              <span>카카오맵</span>
            </li>
            <li onClick={() => goNavigationApp('naver')}>
              <img src="assets/images/logo_navermap.png" alt="네이버지도 바로가기" />
              <span>네이버지도</span>
            </li>
            <li onClick={() => goNavigationApp('tmap')}>
              <img src="assets/images/logo_tmap.jpg" alt="티맵 바로가기" />
              <span>T map</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
