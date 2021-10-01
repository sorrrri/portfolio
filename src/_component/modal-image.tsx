/* eslint-disable react/require-default-props */
import React from 'react';

// eslint-disable-next-line react/no-unused-prop-types
export const ModalImage = (props: any) => {
  const { show, close, imagePath } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <div className={`modal modal-image ${show ? 'active' : ''}`}>
        <img src={imagePath} alt="" />
        <button className="btn-close" type="button" onClick={close}>
          <i className="fal fa-times" />
        </button>
        <a href={imagePath} className="download" download>
          <i className="fad fa-arrow-to-bottom" />
        </a>
      </div>
    </>
  );
};
