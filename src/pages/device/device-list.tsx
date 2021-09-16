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
import { Row } from './components/list-row';
import { MapModule } from './components/map/mapModule';

export function DeviceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState<any[]>([]);
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
      <FilterMarkers show={isOpen} close={isClose} />
      <main className="content equipments maps">
        <button
          className="local-toggle-menu"
          onClick={showFilterMarkers}
          type="button"
          style={{ display: 'none' }}
        >
          <i className="fad fa-map-marked-alt" />
        </button>
        {/* <div className="maps" /> */}
        <MapModule
          onClicked={(value: any) => {
            console.log(`value : ${value}`);
            setSelectedDevices(value);
            showModalMarkers();
          }}
        />
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
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
        </section>
        <section className="no-result">검색 내역이 없습니다.</section>
      </main>
      <ModalMarkers show={isOpen2} devices={selectedDevices} close={() => setIsOpen2(false)} />
    </>
  );
}
