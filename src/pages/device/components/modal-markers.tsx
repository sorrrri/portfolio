/* eslint-disable react/require-default-props */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from './list-row';

export const ModalMarkers = (props: any) => {
  const { show, close } = props;
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
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
          <Row title="2019_P_신정호_고정15_자기망" goDetail={() => onClickItem(1)} />
        </section>
      </div>
    </>
  );
};
