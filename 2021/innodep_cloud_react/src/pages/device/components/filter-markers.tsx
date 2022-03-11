/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const FilterMarkers = (props: any) => {
  const { show, close } = props;
  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <aside className={`local-navigation-menu ${show ? 'active' : ''}`}>
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
    </>
  );
};
