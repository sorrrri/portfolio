import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActiveScroll } from '../../_component/active-scroll';
import { showHeader } from '../../_store/slice/header-option';
import { ModalNavigation } from './components/modal-navigation';
import api from '../../_api/backend';
import { dateFormat3, dateDiffNow } from '../../_util/date-format';

export function DeviceDetail(props: any) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const [deviceDetail, setDeviceDetail] = useState<any>({});

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장비 상세 정보',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
    fecthDeviceDetail();
  }, [id]);

  const fecthDeviceDetail = () => {
    api.getDeviceDetail(id).then((payload: any) => {
      console.log(`id : ${id}`);
      const { code, response } = payload;
      console.log(payload);
      if (code === 200 && response && response.results) {
        setDeviceDetail(response.results);

        console.log(dateFormat3(new Date(response.results.reg_date)));
        console.log(millisecConversion(dateDiffNow(new Date(response.results.reg_date))));
      } else {
        console.log('no');
      }
    });
  };

  function millisecConversion(millisec: number) {
    const seconds = Math.floor(millisec / 1000);
    const minutes = Math.floor(millisec / (1000 * 60));
    const hours = Math.floor(millisec / (1000 * 60 * 60));
    const days = Math.floor(millisec / (1000 * 60 * 60 * 24));

    let result;

    if (seconds < 60) {
      result = `${seconds}초`;
    } else if (minutes < 60) {
      result = `${minutes}분`;
    } else if (hours < 24) {
      result = `${hours}시간`;
    } else {
      result = `${days}일`;
    }
    return result;
  }

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

  return (
    <>
      <main className="content equipments details" onScroll={ActiveScroll}>
        <section>
          <div className="title">
            <strong>{deviceDetail?.name}</strong>
            <span>(불달18로 불당25로 - 변경해야함)</span>
          </div>
          <div className="view">
            <img
              src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="address">
            <p>충청남도 천안시 서북구 불당동 1830 - 변경해야함</p>
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
              <span>{deviceDetail?.device_type}</span>
            </div>
            <div className="row">
              <span>장비 유형</span>
              <span>{`${deviceDetail?.type} > ${deviceDetail?.attribute?.sublayer_id}`}</span>
            </div>
            <div className="row">
              <span>장비 상태</span>
              <span
                className={`status ${deviceDetail?.state === 'error' ? 'abnormal' : 'nomal'}`}
              />
            </div>
            <div className="row">
              <span>최근 업데이트</span>
              <span>
                {deviceDetail?.reg_date
                  ? `${millisecConversion(dateDiffNow(new Date(deviceDetail.reg_date)))} 전`
                  : ''}
              </span>
              {/* <span>10초 전</span> */}
            </div>
            <div className="row">
              <span>연동 일시</span>
              <span>
                {deviceDetail?.reg_date ? dateFormat3(new Date(deviceDetail.reg_date)) : ''}
              </span>
              {/* <span>2021.07.28 12:54:32</span> */}
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
      <ModalNavigation show={isOpen} close={isClose} />
    </>
  );
}
