/* eslint-disable react/require-default-props */
import React from 'react';

export const ModalDone = (props: { children?: any; show?: any; closeModal?: any }) => {
  const { show, closeModal } = props;

  return (
    <div className={`modal modal-done ${show ? 'active' : ''}`}>
      <div className="modal-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
          <path
            d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
            style={{
              fill: 'none',
              stroke: 'slategray',
              strokeMiterlimit: 10,
              strokeWidth: '32px',
            }}
          />
          <polyline
            points="352 176 217.6 336 160 272"
            style={{
              fill: 'none',
              stroke: 'slategray',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px',
            }}
          />
        </svg>
        <p>{props.children}</p>
      </div>
      <div className="modal-footer buttons">
        <button className="btn-cancel" onClick={closeModal} type="button">
          확인
        </button>
      </div>
    </div>
  );
};
