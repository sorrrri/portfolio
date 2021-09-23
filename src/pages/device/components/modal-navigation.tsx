/* eslint-disable react/require-default-props */
import React from 'react';

export const ModalNavigation = (props: any) => {
  const { show, close } = props;

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
            <li>
              <img src="assets/images/logo_kakaomap.png" alt="카카오맵 바로가기" />
              <span>카카오맵</span>
            </li>
            <li>
              <img src="assets/images/logo_navermap.png" alt="네이버지도 바로가기" />
              <span>네이버지도</span>
            </li>
            <li>
              <img src="assets/images/logo_tmap.jpg" alt="티맵 바로가기" />
              <span>T map</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
