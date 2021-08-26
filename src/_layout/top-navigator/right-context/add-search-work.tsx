import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function AddSearchWork() {
  const history = useHistory();
  const [isToggleOn, setSearchArea] = useState(false);

  const toggleSearchArea = () => {
    setSearchArea(!isToggleOn);
  };

  return (
    <div className="buttons">
      <button type="button" onClick={() => history.push('/workspace-add')}>
        <i className="fad fa-briefcase" />
      </button>
      <button type="button" onClick={() => history.push('/device-add')}>
        <i className="fad fa-tools" />
      </button>
      <button type="button" onClick={toggleSearchArea} className={isToggleOn ? 'active' : ''}>
        <i className="fad fa-search" />
      </button>
    </div>
  );
}
