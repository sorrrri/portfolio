/* eslint-disable react/require-default-props */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from './list-row';

export const ModalMarkers = (props: any) => {
  const { show, devices, close } = props;
  const history = useHistory();

  const onClickItem = (workId: number) => {
    history.push(`/device/${workId}`);
  };

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <div className={`modal modal-marker ${show ? 'active' : ''}`}>
        <section className="move-down" onClick={close}>
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            </svg>
          </div>
        </section>
        <section className="result">
          {devices.map((item: any) => (
            <Row
              key={item.item_uuid}
              title={item.name}
              goDetail={() => onClickItem(item.item_uuid)}
            />
          ))}
        </section>
      </div>
    </>
  );
};
