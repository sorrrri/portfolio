import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';

export function DeviceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(
      showHeader({
        title: `장비 상세 정보 #${id}`,
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  }, [id]);

  return (
    <>
      <main className="content equipments details">
        <section>
          <div className="title">
            <strong>W28E012_서북구 불당동 1830</strong>
            <span>(불달18로 불당25로)</span>
          </div>
          <div className="view">
            <img
              src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="address">
            <p>충청남도 천안시 서북구 불당동 1830</p>
            <button className="btn-navigation" type="button">
              <i className="fad fa-directions" />
              <span>내비게이션</span>
            </button>
          </div>
        </section>
        <section className="information">
          <ul className="tabs">
            <li>기본 정보</li>
            <li>연결 장비 정보</li>
          </ul>
          <div className="tab-content basic">
            <div className="row">
              <span>연결 유형</span>
              <span>TMS (통합플랫폼)</span>
            </div>
            <div className="row">
              <span>장비 유형</span>
              <span>CCTV &alt; 도로 감시</span>
            </div>
            <div className="row">
              <span>장비 상태</span>
              <span className="status normal" />
            </div>
            <div className="row">
              <span>최근 업데이트</span>
              <span>10초 전</span>
            </div>
            <div className="row">
              <span>연동 일시</span>
              <span>2021.07.28 12:54:32</span>
            </div>
          </div>
          <div className="tab-content equipment">
            <div className="row">
              <span className="status normal" />
              <span>0</span>
              <span>TNM-3620TDY</span>
              <span>2021.07.28 11:30:22</span>
            </div>
            <div className="row">
              <span className="status abnormal" />
              <span>0</span>
              <span>TNM-3620TDY</span>
              <span>2021.07.28 11:30:22</span>
            </div>
            <div className="row">
              <span className="status normal" />
              <span>0</span>
              <span>TNM-3620TDY</span>
              <span>2021.07.28 11:30:22</span>
            </div>
          </div>
        </section>
      </main>
      <div className="modal modal-navigation">
        <div className="modal-header">
          <div className="title">
            <h3>내비게이션</h3>
            <button className="btn-close" type="button">
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
}
