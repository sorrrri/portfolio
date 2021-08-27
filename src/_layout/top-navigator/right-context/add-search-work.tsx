/* eslint-disable react/require-default-props */
import React from 'react';
import { useHistory } from 'react-router-dom';

export function AddSearchWork(props: { toggle?: any }) {
  const history = useHistory();
  const { toggle } = props;

  return (
    <div className="buttons">
      <button type="button" onClick={() => history.push('/workspace-add')}>
        <i className="fad fa-briefcase" />
      </button>
      <button type="button" onClick={() => history.push('/device-add')}>
        <i className="fad fa-tools" />
      </button>
      <button type="button" onClick={toggle}>
        <i className="fad fa-search" />
      </button>
    </div>
  );
}
