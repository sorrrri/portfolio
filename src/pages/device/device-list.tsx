/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { FilterMarkers } from './components/filter-markers';
import { ModalMarkers } from './components/modal-markers';
import { ActiveScroll } from '../../_component/active-scroll';
import { SearchArea } from '../../_layout/top-navigator/search-area';

export function DeviceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showHeader({
        title: '장비 현황',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork toggle={toggleSearchArea} {...props} />,
      })
    );
  });

  const onClickItem = (workId: number) => {
    history.push(`/device/${workId}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const showFilterMarkers = () => {
    setIsOpen(true);
  };

  const showModalMarkers = () => {
    setIsOpen2(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchArea show={isToggleOn}>
        <button type="button">
          <input type="radio" id="input-address" name="filter-search-equipments" defaultChecked />
          <label htmlFor="input-address">
            <span>주소 검색</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="input-cctv" name="filter-search-equipments" />
          <label htmlFor="input-cctv">
            <span>CCTV 검색</span>
          </label>
        </button>
      </SearchArea>
      <FilterMarkers showFilter={isOpen} closeModal={isClose} />
      <main className="content equipments maps">
        <button className="local-toggle-menu" onClick={showFilterMarkers} type="button">
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

        <div className="marker" onClick={showModalMarkers}>
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
      <main className="content list equipments" onScroll={ActiveScroll}>
        <section className="result">
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
        <section className="no-result">검색 내역이 없습니다.</section>
      </main>
      <ModalMarkers
        show={isOpen2}
        closeModal={() => setIsOpen2(false)}
        goDetail={() => {
          onClickItem(1);
        }}
      />
    </>
  );
}
