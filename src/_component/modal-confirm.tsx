/* eslint-disable react/require-default-props */
import React from 'react';

export const Modal = (props: {
  children?: any;
  confirmed?: any;
  show?: any;
  closeModal?: any;
  title?: any;
}) => {
  const { show, closeModal, title, confirmed } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={closeModal} />
      <div className={`modal modal-confirm ${show ? 'active' : ''}`}>
        <div className="modal-header">
          <div className="title">
            <h3>{title}</h3>
            <button className="btn-close" onClick={closeModal} type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal-content">{props.children}</div>
        <div className="modal-footer buttons">
          <button className="btn-cancel" onClick={closeModal} type="button">
            아니오
          </button>
          <button className="btn-submit" onClick={confirmed} type="button">
            예
          </button>
        </div>
      </div>
    </>
  );
};
