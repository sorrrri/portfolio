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

  const delta = 5;
  let lastScrollTop = 0;

  const activeScroll = () => {
    const container = document.querySelector('.container') as HTMLDivElement;
    const main = document.querySelector('main') as HTMLDivElement;
    const bottomStickyMenu = document.querySelector('.bottom-sticky-menu') as HTMLDivElement;

    if (main.scrollTop > 50) {
      container.classList.add('scroll');
    } else {
      container.classList.remove('scroll');
    }

    // scroll이 감지될 떄, 하단 sticky menu의 활성화 여부
    // eslint-disable-next-line prefer-const
    let currentScrollTop = main.scrollTop;
    if (Math.abs(lastScrollTop - currentScrollTop) <= delta) {
      return;
    }
    if (currentScrollTop > lastScrollTop) {
      bottomStickyMenu.classList.remove('active');
    } else {
      bottomStickyMenu.classList.add('active');
    }
    lastScrollTop = currentScrollTop;
  };

  return (
    <main className="content list equipments" onScroll={activeScroll}>
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
