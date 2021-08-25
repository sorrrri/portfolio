import React from 'react';
import { RouteAndChildrenProps } from '../@jms-react/types/aux-props';

export function BottomStickyMenu(props: RouteAndChildrenProps) {
  const { history } = props;
  return (
    <div className="bottom-sticky-menu">
      <div className="buttons">
        <button className="btn-search" type="button">
          <i className="fad fa-search" />
        </button>
        <button className="btn-workspace" onClick={() => history.push('/workspace')} type="button">
          <i className="fad fa-briefcase" />
        </button>
        <button className="btn-undertake" onClick={() => history.push('/device')} type="button">
          <i className="fad fa-tools" />
        </button>
      </div>
      <button className="btn-main" type="button">
        <i className="fal fa-plus" />
      </button>
    </div>
  );
}
