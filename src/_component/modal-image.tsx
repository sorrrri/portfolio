/* eslint-disable react/require-default-props */
import React from 'react';

// eslint-disable-next-line react/no-unused-prop-types
export const ModalImage = (props: { show?: any; closeModal?: any }) => {
  const { show, closeModal } = props;

  const images = document.querySelectorAll<HTMLElement>('.images img');
  const modalImage = document.querySelector('.modal-image') as HTMLDivElement;

  images.forEach((image) => {
    image.addEventListener('click', (e: any) => {
      console.log(e);
      modalImage.innerHTML = `<img src="${e.target.src}" alt="" />`;
    });
  });

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={closeModal} />
      <div className={`modal modal-image ${show ? 'active' : ''}`} onClick={closeModal} />
    </>
  );
};
