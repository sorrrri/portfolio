/* eslint-disable react/require-default-props */
import React from 'react';

// eslint-disable-next-line react/no-unused-prop-types
export const ModalImage = (props: any) => {
  const { show, close, imagePath } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <div className={`modal modal-image ${show ? 'active' : ''}`}>
        <button className="btn-close" type="button" onClick={close}>
          <i className="fal fa-times" />
        </button>
        <button className="download" type="button">
          <i className="fad fa-arrow-to-bottom" />
        </button>
        <img src={imagePath} alt="" />
      </div>
    </>
  );
};
