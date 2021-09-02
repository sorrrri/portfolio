import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const BottomStickyMenu = (props: { toggle: any }) => {
  const history = useHistory();
  const { toggle } = props;

  const [isToggleOn, setToggleOn] = useState(false);
  const toggleMenus = () => {
    setToggleOn(!isToggleOn);
  };

  const test = () => {
    setToggleOn(false);
    const main = document.querySelector('main') as HTMLDivElement;
    main.scrollTop = 0;
  };

  return (
    <>
      <div className={`overlay ${isToggleOn ? 'active' : ''}`} onClick={() => setToggleOn(false)} />
      <div className="bottom-sticky-menu">
        <div className={`buttons ${isToggleOn ? 'active' : ''}`}>
          <button className="btn-search" onClick={toggle} type="button">
            <i className="fad fa-search" />
          </button>
          <button className="btn-top" type="button" onClick={test}>
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
