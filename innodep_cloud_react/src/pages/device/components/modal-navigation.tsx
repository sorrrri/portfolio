/* eslint-disable react/require-default-props */
import React from 'react';
import { useDispatch } from 'react-redux';
import * as device from '../../../_util/device';
import * as toast from '../../../_store/slice/toast';

export const ModalNavigation = (props: any) => {
  const dispatch = useDispatch();
  const { show, close, lat, lon } = props;

  const goNavigationApp = (type: 'kakao' | 'naver' | 'tmap') => {
    console.log(`goNavigationApp >> `, type);
    if (lon && lat) {
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
            url = `tmap://?rGoName=목적지명&rGoX=${lon}&rGoY=${lat}`;
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
        if (isMobile) {
          window.location.href = url;
        } else {
          window.open(url);
        }
      }
    } else {
      dispatch(toast.error({ message: '좌표정보가 미기입 되어 있습니다.' }));
    }
  };

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <div className={`modal modal-navigation ${show ? 'active' : ''}`}>
        <div className="modal-header">
          <div className="title">
            <h3>내비게이션</h3>
            <button className="btn-close" type="button" onClick={close}>
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
};
