/* eslint-disable react/require-default-props */
import React from 'react';

export const ModalMarkers = (props: { show?: any; closeModal?: any; goDetail?: any }) => {
  const { show, closeModal, goDetail } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={closeModal} />
      <div className={`modal modal-marker ${show ? 'active' : ''}`}>
        <section className="move-down" onClick={closeModal}>
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            </svg>
          </div>
        </section>
        <section className="result">
          <div className="row" onClick={goDetail}>
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
          <div className="row">
            <div className="tags">
              <span className="tag">TMS</span>
              <span className="tag">CCTV</span>
              <span className="tag">주정차 단속</span>
            </div>
            <div>2019_P_신정호_고정15_자기망</div>
          </div>
        </section>
      </div>
    </>
  );
};
