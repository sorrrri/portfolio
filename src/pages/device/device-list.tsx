/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { FilterMarkers } from './components/filter-markers';
import { ModalMarkers } from './components/modal-markers';

export function DeviceList(props: any) {
  const history = useHistory();
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
    history.push(`/device/${workId}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

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
      <ModalMarkers show={isOpen2} closeModal={() => setIsOpen2(false)} />
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
