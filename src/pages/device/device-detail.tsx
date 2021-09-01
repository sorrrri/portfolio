import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { ModalNavigation } from './components/modal-navigation';

export function DeviceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(
      showHeader({
        title: `장비 상세 정보 #${id}`,
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  }, [id]);

  const [currentTab, setCurrentTab] = useState(0);
  const handleClickTab = (tabIndex: React.SetStateAction<number>) => {
    setCurrentTab(tabIndex);
  };

  const [isOpen, setIsOpen] = useState(false);
  const showModalNavigation = () => {
    setIsOpen(true);
  };
  const isClose = () => {
    setIsOpen(false);
  };

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
    <>
      <main className="content equipments details" onScroll={activeScroll}>
        <section>
          <div className="title">
            <strong>W28E012_서북구 불당동 1830</strong>
            <span>(불달18로 불당25로)</span>
          </div>
          <div className="view">
            <img
              src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="address">
            <p>충청남도 천안시 서북구 불당동 1830</p>
            <button className="btn-navigation" onClick={showModalNavigation} type="button">
              <i className="fad fa-directions" />
              <span>내비게이션</span>
            </button>
          </div>
        </section>
        <section className="information">
          <ul className="tabs">
            <li onClick={() => handleClickTab(0)} className={currentTab === 0 ? 'active' : ''}>
              기본 정보
            </li>
            <li onClick={() => handleClickTab(1)} className={currentTab === 1 ? 'active' : ''}>
              연결 장비 정보
            </li>
          </ul>
          <div className={`tab-content basic ${currentTab === 0 ? 'active' : ''}`}>
            <div className="row">
              <span>연결 유형</span>
              <span>TMS (통합플랫폼)</span>
            </div>
            <div className="row">
              <span>장비 유형</span>
              <span>CCTV &gt; 도로 감시</span>
            </div>
            <div className="row">
              <span>장비 상태</span>
              <span className="status normal" />
            </div>
            <div className="row">
              <span>최근 업데이트</span>
              <span>10초 전</span>
            </div>
            <div className="row">
              <span>연동 일시</span>
              <span>2021.07.28 12:54:32</span>
            </div>
          </div>
          <div className={`tab-content equipment ${currentTab === 1 ? 'active' : ''}`}>
            <div className="row">
              <span className="status normal" />
              <span>0</span>
              <span>TNM-3620TDY</span>
              <span>2021.07.28 11:30:22</span>
            </div>
            <div className="row">
              <span className="status abnormal" />
              <span>0</span>
              <span>TNM-3620TDY</span>
              <span>2021.07.28 11:30:22</span>
            </div>
            <div className="row">
              <span className="status normal" />
              <span>0</span>
              <span>TNM-3620TDY</span>
              <span>2021.07.28 11:30:22</span>
            </div>
          </div>
        </section>
      </main>
      <ModalNavigation show={isOpen} closeModal={isClose} />
    </>
  );
}
