/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { FilterMarkers } from './components/filter-markers';
import { ModalMarkers } from './components/modal-markers';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { Row } from './components/list-row';
import { MapModule } from './components/map/mapModule';
import { BottomStickyMenu } from '../../_layout/bottom-sticky-menu';
// import api from '../../_api/backend';
import DeviceListAPI from './components/device-list-api';
import { ActiveScroll } from '../../_component/active-scroll';

export function DeviceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState<any[]>([]);
  // const [searchDevices, setSearchDevices] = useState<any[]>([]);
  const [searchType, setSerachType] = useState<string>('');

  // const [defaultSearchValue, setDefualtSearchValue] = useState<Boolean>(false); // 검색창 초기 리스트 state
  const [searchKeyword, setSearchKeyword] = useState<string>(''); // 디바이스 검색 keyword
  const [searKeyPress, setSearKeyPress] = useState<string>(''); // 디바이스 검색 state
  const [keywordReset, setKeywordReset] = useState<Boolean>(false); // search-area Keyword Reset
  const [page, setPage] = useState<number>(1); // 디아비스 목록 페이지
  const [keyUpReset, setKeyUpReset] = useState(false); // device-list-api Keypress Reset

  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };
  const overlays = document.querySelectorAll('.overlay') as any;
  overlays.forEach((overlay: any) => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showHeader({
        title: '장비 현황',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork toggle={toggleSearchArea} {...props} />,
      })
    );
  });

  const { loading, searchDevices, deviceListCheck } = DeviceListAPI(
    searchType,
    searKeyPress,
    page,
    keyUpReset
  );

  // 인피니티 스크롤 옵션
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  // 인피니티 스크롤(페이징)
  const observer = useRef<any>();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  // // 페이징 초기화
  // useEffect(() => {
  //   setSearchDevices([]);
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  // });

  // // 검색창 초기 리스트 Effect
  // useEffect(() => {
  //   fetchDevicesList('', '');
  //   setDefualtSearchValue(false);
  // }, [defaultSearchValue]);

  // // 디바이스 리스트 api 호출
  // const fetchDevicesList = (type: string, keyword: string) => {
  //   api.getDevicesForList(type, keyword, 1, 10).then((payload: any) => {
  //     if (payload.response.results !== null) {
  //       const { code, response } = payload;
  //       if (code === 200 && response && Array.isArray(response.results)) {
  //         console.log(`fetchList >> `, payload);
  //         setSearchDevices((prevList: any) => {
  //           return [...prevList, response];
  //         });
  //       } else {
  //         setSearchDevices([]);
  //       }
  //     }
  //     if (payload.response.count < 1) {
  //       setDeviceListCheck(true);
  //     }
  //   });
  // };

  const onClickItem = (workId: number) => {
    history.push(`/device/${workId}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const showFilterMarkers = () => {
    setIsOpen(true);
  };

  const showModalMarkers = () => {
    setIsOpen2(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  // const searchDevice = (keyword: string) => {
  //   if (keyword && keyword.trim().length > 0) {
  //     fetchDevicesList(searchType, keyword);
  //   } else {
  //     setSearchDevices([]);
  //   }
  // };

  // Search 핸들
  const handleKeyUp = (e: any) => {
    if (e.key === 'Enter') {
      setSearKeyPress(searchKeyword);
      // setPage(1);
    }
  };

  // Search Close 핸들
  const handleSearchAreaClose = () => {
    setKeywordReset(true);
    setKeyUpReset(true);
    setSearKeyPress('');
    setPage(1);
    setToggleOn(false);
    setSerachType('');
  };

  return (
    <>
      <SearchArea
        keywordReset={keywordReset}
        placeHolder="검색어를 입력하세요."
        show={isToggleOn}
        close={handleSearchAreaClose}
        onChange={(keyword) => setSearchKeyword(keyword)}
        onKeyUp={handleKeyUp}
      >
        <button type="button">
          <input
            type="radio"
            id="input-address"
            name="filter-search-equipments"
            defaultChecked
            onChange={(e: any) => {
              if (e.target) {
                setSerachType('addr');
                // setSearchDevices([]);
                // setDefualtSearchValue(true);
              }
            }}
          />
          <label htmlFor="input-address">
            <span>주소 검색</span>
          </label>
        </button>
        <button type="button">
          <input
            type="radio"
            id="input-cctv"
            name="filter-search-equipments"
            onChange={(e: any) => {
              if (e.target) {
                setSerachType('name');
                // setSearchDevices([]);
                // setDefualtSearchValue(true);
              }
            }}
          />
          <label htmlFor="input-cctv">
            <span>CCTV 검색</span>
          </label>
        </button>
      </SearchArea>
      <FilterMarkers show={isOpen} close={isClose} />
      <main className={`content equipments ${isToggleOn ? 'list' : ''}`}>
        {!isToggleOn ? (
          <>
            <button
              className="local-toggle-menu"
              onClick={showFilterMarkers}
              type="button"
              style={{ display: 'none' }}
            >
              <i className="fad fa-map-marked-alt" />
            </button>
            <MapModule
              onClicked={(value: any) => {
                console.log(`value : ${value}`);
                setSelectedDevices(value);
                showModalMarkers();
              }}
            />
          </>
        ) : (
          <>
            <section className="result">
              {searchDevices &&
                searchDevices.map((deviceList) =>
                  deviceList.results.map((device: any) => {
                    return (
                      <Row
                        key={device.item_uuid}
                        title={device.name}
                        type={device.type_property}
                        goDetail={() => onClickItem(device.item_uuid)}
                      />
                    );
                  })
                )}
            </section>
            {deviceListCheck ? <section className="no-result">검색 내역이 없습니다.</section> : ''}
          </>
        )}
      </main>
      <ModalMarkers show={isOpen2} devices={selectedDevices} close={() => setIsOpen2(false)} />
      <BottomStickyMenu toggle={toggleSearchArea} />
    </>
  );
}
