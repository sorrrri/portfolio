/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const BottomStickyMenu = (props: any) => {
  const history = useHistory();
  const { toggle } = props;

  const [isToggleOn, setToggleOn] = useState(false);
  const toggleMenus = () => {
    setToggleOn(!isToggleOn);
  };

  const scrollToTop = () => {
    setToggleOn(false);
    const main = document.querySelector('main') as HTMLDivElement;
    const equipmentsList = document.querySelector('.equipments.list') as HTMLDivElement;
    main.scrollTop = 0;
    if (equipmentsList) {
      const result = equipmentsList.querySelector('.result') as HTMLDivElement;
      result.scrollTop = 0;
    }
  };

  const toggleSearchArea = () => {
    scrollToTop();
    const searchArea = document.querySelector('.search-area');
    if (searchArea) {
      searchArea.classList.contains('active')
        ? searchArea.classList.remove('active')
        : searchArea.classList.add('active');
    }
  };

  const showAlways = {
    opacity: '1',
    transform: 'translateY(0)',
    zIndex: 3,
  };

  return (
    <>
      <div className={`overlay ${isToggleOn ? 'active' : ''}`} onClick={() => setToggleOn(false)} />
      <div className="bottom-sticky-menu" style={showAlways}>
        <div className={`buttons ${isToggleOn ? 'active' : ''}`}>
          <button className="btn-search" onClick={toggle} type="button">
            <i className="fad fa-search" />
          </button>
          <button className="btn-top" type="button" onClick={scrollToTop}>
            <i className="fad fa-arrow-up" />
          </button>
          <button
            onClick={() => {
              history.push('/workspace-add');
              setToggleOn(false);
            }}
            className="btn-workspace"
            type="button"
          >
            <i className="fad fa-briefcase" />
          </button>
          <button
            onClick={() => {
              history.push('/device-add');
              setToggleOn(false);
            }}
            className="btn-undertake"
            type="button"
          >
            <i className="fad fa-tools" />
          </button>
        </div>
        <button className="btn-main" onClick={toggleMenus} type="button">
          <i className="fal fa-plus" />
        </button>
      </div>
    </>
  );
};
