/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { FilterMarkers } from './components/filter-markers';
import { ModalMarkers } from './components/modal-markers';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { Row } from './components/list-row';
import { MapModule } from './components/map/mapModule';
import { BottomStickyMenu } from '../../_layout/bottom-sticky-menu';
import api from '../../_api/backend';

export function DeviceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState<any[]>([]);
  const [searchDevices, setSearchDevices] = useState<any[]>([]);
  const [searchType, setSerachType] = useState<string>('addr');
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };
  const overlays = document.querySelectorAll('.overlay') as any;
  overlays.forEach((overlay: any) => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

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

  const fetchDevicesList = (type: string, keyword: string) => {
    api.getDevicesForList(type, keyword, 1, 10).then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response && Array.isArray(response.results)) {
        console.log(`fetchList >> `, payload);
        setSearchDevices(response.results);
      } else {
        setSearchDevices([]);
      }
    });
  };

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

  const searchDevice = (keyword: string) => {
    if (keyword && keyword.trim().length > 0) {
      fetchDevicesList(searchType, keyword);
    } else {
      setSearchDevices([]);
    }
  };

  return (
    <>
      <SearchArea show={isToggleOn} onChange={searchDevice} close={() => setToggleOn(false)}>
        <button type="button">
          <input
            type="radio"
            id="input-address"
            name="filter-search-equipments"
            defaultChecked
            onChange={(e: any) => {
              if (e.target) {
                setSerachType('addr');
                setSearchDevices([]);
              }
            }}
          />
          <label htmlFor="input-address">
            <span>주소 검색</span>
          </label>
        </button>
        <button type="button">
          <input
            type="radio"
            id="input-cctv"
            name="filter-search-equipments"
            onChange={(e: any) => {
              if (e.target) {
                setSerachType('name');
                setSearchDevices([]);
              }
            }}
          />
          <label htmlFor="input-cctv">
            <span>CCTV 검색</span>
          </label>
        </button>
      </SearchArea>
      <FilterMarkers show={isOpen} close={isClose} />
      <main className={`content equipments ${isToggleOn ? 'list' : ''}`}>
        {!isToggleOn ? (
          <>
            <button
              className="local-toggle-menu"
              onClick={showFilterMarkers}
              type="button"
              style={{ display: 'none' }}
            >
              <i className="fad fa-map-marked-alt" />
            </button>
            <MapModule
              onClicked={(value: any) => {
                console.log(`value : ${value}`);
                setSelectedDevices(value);
                showModalMarkers();
              }}
            />
          </>
        ) : (
          <>
            <section className="result">
              {searchDevices.map((device) => (
                <Row
                  key={device.item_uuid}
                  title={device.name}
                  type={device.type_property}
                  goDetail={() => onClickItem(device.item_uuid)}
                />
              ))}
            </section>
            <section className="no-result">검색 내역이 없습니다.</section>
          </>
        )}
      </main>
      <ModalMarkers show={isOpen2} devices={selectedDevices} close={() => setIsOpen2(false)} />
      <BottomStickyMenu toggle={toggleSearchArea} />
    </>
  );
}
