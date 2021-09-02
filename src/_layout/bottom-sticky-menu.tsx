import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const BottomStickyMenu = (props: { toggle: any }) => {
  const history = useHistory();
  const { toggle } = props;

  const [isToggleOn, setToggleOn] = useState(false);
  const toggleMenus = () => {
    setToggleOn(!isToggleOn);
  };

  return (
    <>
      <div className={`overlay ${isToggleOn ? 'active' : ''}`} onClick={() => setToggleOn(false)} />
      <div className="bottom-sticky-menu">
        <div className={`buttons ${isToggleOn ? 'active' : ''}`}>
          <button className="btn-search" onClick={toggle} type="button">
            <i className="fad fa-search" />
          </button>
          <button
            onClick={() => history.push('/workspace-add')}
            className="btn-workspace"
            type="button"
          >
            <i className="fad fa-briefcase" />
          </button>
          <button
            onClick={() => history.push('/device-add')}
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
