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
        ADD WORK
      </button>
      <button type="button" onClick={props.onClickAddFault}>
        ADD FAULT
      </button>
      <button type="button" onClick={props.onClickSearch}>
        SEARCH
      </button>
    </>
  );
}
