/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { ModalSearch } from './components/modal-search';
import api from '../../_api/backend';

export function DeviceAdd(props: any) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [recipient, setRecipient] = useState<any[]>([]); // 받는사람 정보

  // 장애 등록
  const [title, setTitle] = useState(''); // 작업명
  const [priority, setPriority] = useState('EMERGENCY'); // 중요도
  const [toList, setToList] = useState<any[]>([]); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [content, setContent] = useState(''); // 작업내용
  const [attacheFiles, setAttacheFiles] = useState<File[]>([]); // 파일첨부

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장애 접수',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
    fetchWorkspaceTemplate();
  }, []);

  // 받는사람 정보 get
  const fetchWorkspaceTemplate = () => {
    setTimeout(() => {
      api.getWorkspaceTemplate().then((payload: any) => {
        const { code, response } = payload;
        if (code === 200 && Array.isArray(response.results.recipient)) {
          setRecipient(response.results.recipient);
        }
      });
    });
  };

  // 받는사람 filter / select2로 html변경 후 재작업 필요
  const handleInputName = (e: any) => {
    const arrayName = e.target.value.split(';');
    const tolistresult = [];
    for (let i = 0; i < arrayName.length; i++) {
      const filtername = recipient.filter((item) => item.name === arrayName[i]);
      const filteruuid = filtername.map((item) => item.uuid);
      tolistresult.push(filteruuid);
    }
    setToList(tolistresult);
    fetchWorkspaceTemplate();
  };

  const showModal = () => {
    // if (title === '') {
    //   setShowTitle(true);
    // } else if (toList.length === 0) {
    //   setShowToList(true);
    // } else if (content === '') {
    //   setShowContent(true);
    // } else {
    setIsOpen(true);
    // }
  };

  const showDoneModal = () => {
    setIsOpen2(true);
    api.addWorkspace('disability', {
      title: '장애 접수 등록',
      priority: 'HIGH',
      detail_type: 'DISABILITY_ETC',
      to_list: '6bf44769-1af3-4d0b-b9df-a8a5ba8ae8de',
      platform_sharing: false,
      content: '내용 = 장애 접수 등록',
      upload_files: attacheFiles,
    });
  };

  const showSearchModal = () => {
    setIsOpen3(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const isCloseAll = () => {
    setIsOpen(false);
    setIsOpen2(false);
    const { history } = props;
    history.push('/workspace');
  };

  const options = [
    { value: '박보검', label: '박보검' },
    { value: '전지현', label: '전지현' },
    { value: '정우성', label: '정우성' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <main className="content details add">
        <div className="inputs">
          <div className="input title">
            <span>작업명</span>
            <input
              type="text"
              placeholder="작업명을 입력하세요."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input title" onClick={showSearchModal}>
            <span>장비명</span>
            <input
              className="input-search"
              type="text"
              readOnly
              placeholder="장비명을 검색해주세요."
            />
          </div>
          <div className="input">
            <span>중요도</span>
            <div className="filters">
              <button type="button">
                <input
                  type="radio"
                  id="input-emergency"
                  name="filter-importance"
                  defaultChecked
                  onClick={() => setPriority('EMERGENCY')}
                />
                <label htmlFor="input-emergency">
                  <span>긴급</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="input-high"
                  name="filter-importance"
                  onClick={() => setPriority('HIGH')}
                />
                <label htmlFor="input-high">
                  <span>높음</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="input-normal"
                  name="filter-importance"
                  onClick={() => setPriority('USUALLY')}
                />
                <label htmlFor="input-normal">
                  <span>보통</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="input-low"
                  name="filter-importance"
                  onClick={() => setPriority('LOW')}
                />
                <label htmlFor="input-low">
                  <span>낮음</span>
                </label>
              </button>
            </div>
          </div>
          <div className="input send-to">
            <span>받는사람</span>
            <Select defaultValue={selectedOption} options={options} isMulti />
            {/* <input type="text" onChange={handleInputName} /> */}
          </div>
          <div className="input">
            <span>플랫폼관리자 공개여부</span>
            <div className="filters">
              <button type="button">
                <input
                  type="radio"
                  id="content-public"
                  name="content-type"
                  defaultChecked
                  onClick={() => setPlatformSharing(true)}
                />
                <label htmlFor="content-public">
                  <span>예</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="content-private"
                  name="content-type"
                  onClick={() => setPlatformSharing(false)}
                />
                <label htmlFor="content-private">
                  <span>아니오</span>
                </label>
              </button>
            </div>
          </div>
          <textarea name="" id="" onChange={(e) => setContent(e.target.value)} />
          <div className="buttons attach">
            <button type="button">
              <input
                type="file"
                id="input-attach"
                multiple
                onChange={(e: any) => setAttacheFiles(Array.from(e.target.files))}
              />
              <label htmlFor="input-attach">
                <i className="fad fa-cloud-upload" />
              </label>
            </button>
          </div>
          {attacheFiles.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ul key={index} className="files-name">
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
      </main>
      <div className="buttons">
        <button className="btn-main" onClick={showModal} type="button">
          장애 접수 등록
        </button>
      </div>
      <ModalDone show={showTitle} close={() => setShowTitle(false)}>
        작업명을 입력해 주세요.
      </ModalDone>
      <ModalDone show={showToList} close={() => setShowToList(false)}>
        받는사람을 입력해 주세요.
      </ModalDone>
      <ModalDone show={showContent} close={() => setShowContent(false)}>
        댓글을 입력해 주세요.
      </ModalDone>
      <Modal show={isOpen} confirmed={showDoneModal} close={isClose} title="장애 접수">
        장애 접수를 등록하시겠습니까?
      </Modal>
      <ModalDone show={isOpen2} close={isCloseAll}>
        장애 접수가 등록 되었습니다.
      </ModalDone>
      <ModalSearch
        show={isOpen3}
        close={() => {
          setIsOpen3(false);
        }}
      />
    </>
  );
}
