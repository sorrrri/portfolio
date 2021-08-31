/* eslint-disable react/require-default-props */
import React from 'react';

// eslint-disable-next-line react/no-unused-prop-types
export const ModalImage = (props: { show?: any; closeModal?: any }) => {
  const { show, closeModal } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={closeModal} />
      <div className={`modal modal-image ${show ? 'active' : ''}`} onClick={closeModal} />
    </>
  );
};
