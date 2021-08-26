/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';

export function DeviceList(props: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장비 현황',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork {...props} />,
      })
    );
  });

  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/device/${workId}`);
  };

  return (
    <>
      <aside className="local-navigation-menu">
        <div className="filters">
          <h4>
            <span>마커 표시</span>
          </h4>
          <div className="markers">
            <button className="checkbox" type="button">
              <input type="checkbox" id="markPublicParkingLot" name="filter-markers" />
              <label htmlFor="markPublicParkingLot">
                <i className="fad fa-parking-circle" />
                <span>공영주차장</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markPublicToilet" name="filter-markers" />
              <label htmlFor="markPublicToilet">
                <i className="fad fa-restroom" />
                <span>공중화장실</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markTrafficControlCenter" name="filter-markers" />
              <label htmlFor="markTrafficControlCenter">
                <i className="fad fa-traffic-light" />
                <span>교통관제센터</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markTrafficEnforcement" name="filter-markers" />
              <label htmlFor="markTrafficEnforcement">
                <i className="fad fa-traffic-light-go" />
                <span>교통단속</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markCityPark" name="filter-markers" />
              <label htmlFor="markCityPark">
                <i className="fad fa-trees" />
                <span>도시공원</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markCrimePrevention" name="filter-markers" />
              <label htmlFor="markCrimePrevention">
                <i className="fad fa-cctv" />
                <span>방범</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markCrimePreventionCityPark" name="filter-markers" />
              <label htmlFor="markCrimePreventionCityPark">
                <i className="fad fa-cctv" />
                <span>방범(도시공원)</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markCrimePreventionSchoolZone" name="filter-markers" />
              <label htmlFor="markCrimePreventionSchoolZone">
                <i className="fad fa-cctv" />
                <span>방범(스쿨존)</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markCrimePreventionResidentalArea" name="filter-markers" />
              <label htmlFor="markCrimePreventionResidentalArea">
                <i className="fad fa-cctv" />
                <span>방범(주택가)</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markCrimePreventionEmergencyBell" name="filter-markers" />
              <label htmlFor="markCrimePreventionEmergencyBell">
                <i className="fad fa-bell-on" />
                <span>방범비상벨1</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markWildfireMonitoring" name="filter-markers" />
              <label htmlFor="markWildfireMonitoring">
                <i className="fad fa-fire-alt" />
                <span>산불감시</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markLifeCrimePrevention" name="filter-markers" />
              <label htmlFor="markLifeCrimePrevention">
                <i className="fad fa-cctv" />
                <span>생활방범</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markSchoolZone" name="filter-markers" />
              <label htmlFor="markSchoolZone">
                <i className="fad fa-school" />
                <span>스쿨존</span>
              </label>
            </button>
            <button className="checkbox" type="button">
              <input type="checkbox" id="markFacilitiesManagement" name="filter-markers" />
              <label htmlFor="markFacilitiesManagement">
                <i className="fad fa-building" />
                <span>시설물관리</span>
              </label>
            </button>
          </div>
        </div>
      </aside>
      <main className="content equipments maps">
        <button className="local-toggle-menu" type="button">
          <i className="fad fa-map-marked-alt" />
        </button>

        <div className="maps" />

        <div className="zoom-in-out">
          <button className="zoom-out" type="button">
            <i className="fal fa-minus" />
          </button>
          <div className="range-slider">
            <input type="range" step="1" min="10" max="20" />
          </div>
          <button className="zoom-in" type="button">
            <i className="fal fa-plus" />
          </button>
        </div>

        <div className="marker">
          <i
            className="fas fa-map-marker-alt"
            style={{
              fontSize: '24px',
              color: 'orange',
              position: 'absolute',
              top: '50%',
              left: '50%',
              cursor: 'pointer',
            }}
          />
        </div>
      </main>
      <div className="modal modal-marker">
        <section className="move-down">
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            </svg>
          </div>
        </section>
        <section className="result">
          <div className="row" onClick={() => onClickItem(1)}>
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
        </section>
      </div>
      <div className="modal modal-search-full">
        <header className="filters">
          <button type="button">
            <input id="selectAddress" type="radio" name="searchFilter" defaultChecked />
            <label htmlFor="selectAddress">주소검색</label>
          </button>
          <button type="button">
            <input id="selectLocation" type="radio" name="searchFilter" />
            <label htmlFor="selectLocation">좌표검색</label>
          </button>
          <button type="button">
            <input id="selectCCTV" type="radio" name="searchFilter" />
            <label htmlFor="selectCCTV">CCTV검색</label>
          </button>
        </header>
        <section style={{ display: 'none' }}>
          <div className="row">
            <ul>
              <li className="tags">
                <span>산불감시</span>
                <span>CCTV</span>
                <span>PTZ</span>
              </li>
              <li className="address">충청남도 천안시 서북구 백석동 895</li>
              <li className="title">W29C097-17_5 두정동 1246(두정중학교동남측사거리)</li>
            </ul>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </div>
          <div className="row">
            <ul>
              <li className="tags">
                <span>산불감시</span>
                <span>CCTV</span>
                <span>PTZ</span>
              </li>
              <li className="address">충청남도 천안시 서북구 백석동 895</li>
              <li className="title">W29C097-17_5 두정동 1246(두정중학교동남측사거리)</li>
            </ul>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </div>
          <div className="row">
            <ul>
              <li className="tags">
                <span>산불감시</span>
                <span>CCTV</span>
                <span>PTZ</span>
              </li>
              <li className="address">충청남도 천안시 서북구 백석동 895</li>
              <li className="title">W29C097-17_5 두정동 1246(두정중학교동남측사거리)</li>
            </ul>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </div>
          <div className="row">
            <ul>
              <li className="tags">
                <span>산불감시</span>
                <span>CCTV</span>
                <span>PTZ</span>
              </li>
              <li className="address">충청남도 천안시 서북구 백석동 895</li>
              <li className="title">W29C097-17_5 두정동 1246(두정중학교동남측사거리)</li>
            </ul>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </div>
          <div className="row">
            <ul>
              <li className="tags">
                <span>산불감시</span>
                <span>CCTV</span>
                <span>PTZ</span>
              </li>
              <li className="address">충청남도 천안시 서북구 백석동 895</li>
              <li className="title">W29C097-17_5 두정동 1246(두정중학교동남측사거리)</li>
            </ul>
            <div className="more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </div>
        </section>
        <section className="empty">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
            조회된 기록이 없습니다.
          </div>
        </section>
      </div>
    </>
  );
}
