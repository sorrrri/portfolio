import React from 'react';

type Props = {
  onClickAddWork: () => void;
  onClickAddFault: () => void;
  onClickSearch: () => void;
};

export function AddSearchWork(props: Props) {
  return (
    <>
      <button type="button" onClick={props.onClickAddWork}>
        <i className="fad fa-briefcase" />
      </button>
      <button type="button" onClick={props.onClickAddFault}>
        <i className="fad fa-tools" />
      </button>
      <button type="button" onClick={props.onClickSearch}>
        <i className="fad fa-search" />
      </button>
    </>
  );
}
