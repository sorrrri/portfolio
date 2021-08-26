import React from 'react';
import { useHistory } from 'react-router-dom';

export const BottomStickyMenu = () => {
  const { push } = useHistory();

  return (
    <div className="bottom-sticky-menu">
      <div className="buttons">
        <button className="btn-search" type="button">
          <i className="fad fa-search" />
        </button>
        <button onClick={() => push('/workspace')} className="btn-workspace" type="button">
          <i className="fad fa-briefcase" />
        </button>
        <button onClick={() => push('/device')} className="btn-undertake" type="button">
          <i className="fad fa-tools" />
        </button>
      </div>
      <button className="btn-main" type="button">
        <i className="fal fa-plus" />
      </button>
    </div>
  );
};
