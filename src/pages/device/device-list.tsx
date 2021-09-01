/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { FilterMarkers } from './components/filter-markers';
import { ModalMarkers } from './components/modal-markers';
import { ActiveScroll } from '../../_component/active-scroll';

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
      <main className="content equipments maps" onScroll={ActiveScroll}>
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
