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
          <i className="fad fa-chevron-down" />
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
        <section className="no-result">
          <i className="fal fa-exclamation-circle" />
          <span>해당 좌표주변에서 장비를 찾을 수 없습니다.</span>
        </section>
      </div>
    </>
  );
};
