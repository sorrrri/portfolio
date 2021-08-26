import React from 'react';
import { useHistory } from 'react-router-dom';

export const BottomStickyMenu = () => {
  const history = useHistory();

  return (
    <div className="bottom-sticky-menu">
      <div className="buttons">
        <button className="btn-search" type="button">
          <i className="fad fa-search" />
        </button>
        <button
          onClick={() => history.push('/workspace-add')}
          className="btn-workspace"
          type="button"
        >
          <i className="fad fa-briefcase" />
        </button>
        <button onClick={() => history.push('/device-add')} className="btn-undertake" type="button">
          <i className="fad fa-tools" />
        </button>
      </div>
      <button className="btn-main" type="button">
        <i className="fal fa-plus" />
      </button>
    </div>
  );
};
