/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { showHeader } from '../../_store/slice/header-option';
import api from '../../_api/backend';

export function WorkspaceAdd(props: any) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [recipient, setRecipient] = useState<any[]>([]); // 받는사람 정보

  // 일감 등록
  const [title, setTitle] = useState(''); // 작업명
  const [priority, setPriority] = useState('EMERGENCY'); // 중요도
  const [detailType, setDetailType] = useState('WORK_PERMISSION'); // 업무유형
  const [toList, setToList] = useState<any[]>([]); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [content, setContent] = useState(''); // 작업내용
  const [attacheFiles, setAttacheFiles] = useState<File[]>([]); // 파일첨부

  useEffect(() => {
    dispatch(
      showHeader({
        title: '업무 요청',
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
    if (title === '') {
      setShowTitle(true);
    } else if (toList.length === 0) {
      setShowToList(true);
    } else if (content === '') {
      setShowContent(true);
    } else {
      setIsOpen(true);
    }
  };

  // 업무 요청 등록
  const showDoneModal = () => {
    setIsOpen2(true);
    api.addWorkspace('work', {
      title,
      priority,
      detail_type: detailType,
      to_list: toList,
      platform_sharing: platformSharing,
      content,
      upload_files: attacheFiles,
    });
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
      <main className="content details add workspace">
        <div className="inputs">
          <div className="input title">
            <span>작업명</span>
            <input
              type="text"
              placeholder="작업명을 입력하세요."
              onChange={(e) => setTitle(e.target.value)}
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
                <label htmlFor="input-emergency" className="bg-red">
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
                <label htmlFor="input-high" className="bg-orange">
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
                <label htmlFor="input-normal" className="bg-blue">
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
                <label htmlFor="input-low" className="bg-green">
                  <span>낮음</span>
                </label>
              </button>
            </div>
          </div>
          <div className="input">
            <span>업무유형</span>
            <div className="filters work-type">
              <button type="button">
                <input
                  type="radio"
                  id="request-permission"
                  name="work-type"
                  defaultChecked
                  onClick={() => setDetailType('WORK_PERMISSION')}
                />
                <label htmlFor="request-permission">
                  <span>권한요청</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="personal-information"
                  name="work-type"
                  onClick={() => setDetailType('MODIFY_INFO')}
                />
                <label htmlFor="personal-information">
                  <span>개인정보변경</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="reset-password"
                  name="work-type"
                  onClick={() => setDetailType('RESET_PASSWORD')}
                />
                <label htmlFor="reset-password">
                  <span>비밀번호 초기화</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="etc"
                  name="work-type"
                  onClick={() => setDetailType('WORK_ETC')}
                />
                <label htmlFor="etc">
                  <span>기타</span>
                </label>
              </button>
            </div>
          </div>
          <div className="input send-to">
            <span>받는사람 (임시)다중입력은 ; 구분 </span>
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
          업무 요청 등록
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
      <Modal show={isOpen} confirmed={showDoneModal} close={isClose} title="업무 요청">
        업무 요청을 등록하시겠습니까?
      </Modal>
      <ModalDone show={isOpen2} close={isCloseAll}>
        업무 요청이 등록 되었습니다.
      </ModalDone>
    </>
  );
}
