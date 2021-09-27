/* eslint-disable react/require-default-props */
import React from 'react';

// eslint-disable-next-line react/no-unused-prop-types
export const ModalImage = (props: any) => {
  const { show, close } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <div className={`modal modal-image ${show ? 'active' : ''}`} onClick={close} />
    </>
  );
};
