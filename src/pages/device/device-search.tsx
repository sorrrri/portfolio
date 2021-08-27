/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';

export function DeviceSearch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장애 접수',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  });

  return (
    <main className="content list equipments">
      <section className="result">
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
      <section className="no-result">검색 내역이 없습니다.</section>
    </main>
  );
}
