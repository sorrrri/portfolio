/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { showHeader } from '../../_store/slice/header-option';
import api from '../../_api/backend';

export function WorkspaceAdd(props: any) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [recipient, setRecipient] = useState<any[]>([]); // 받는사람 정보

  // 일감 등록
  const [title, setTitle] = useState(''); // 작업명
  const [priority, setPriority] = useState('EMERGENCY'); // 중요도
  const [detailType, setDetailType] = useState('WORK_PERMISSION'); // 업무유형
  const [toList, setToList] = useState(''); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [content, setContent] = useState(''); // 작업내용
  // const [uploadFiles, setUploadFiles] = useState(); // 파일 업로드
  // const [fileBase64, setFileBase64] = useState<any[]>([]); // 파일 base64
  // const [fileupload, setFileupload] = useState(null);
  const [attacheFiles, setAttacheFiles] = useState<File[]>([]);

  useEffect(() => {
    dispatch(
      showHeader({
        title: '업무 요청',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  });

  useEffect(() => {
    fetchWorkspaceTemplate();
  }, [toList]);

  // 받는사람 정보 get
  const fetchWorkspaceTemplate = () => {
    api.getWorkspaceTemplate('work').then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && Array.isArray(response.results.recipient)) {
        setRecipient(response.results.recipient);
      }
    });
  };

  // 받는사람 filter
  const handleInputName = (e: any) => {
    const filtername = recipient.filter((item) => item.name === e.target.value);
    const filteruuid = filtername.map((item) => item.uuid);
    const result = filteruuid.join();
    setToList(result);
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: any) => {
    setContent(e.target.value);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const showDoneModal = () => {
    setIsOpen2(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  // 업무 요청 등록
  const isCloseAll = () => {
    setIsOpen(false);
    setIsOpen2(false);
    api.addWorkspace('work', {
      priority,
      detail_type: detailType,
      // to_list: ['c329536f-1633-4997-bc01-4c6e3532f70b', '6bf44769-1af3-4d0b-b9df-a8a5ba8ae8de'],
      to_list: toList,
      platform_sharing: platformSharing,
      title,
      content,
      upload_files: attacheFiles,
    });
    const { history } = props;
    history.push('/workspace');
  };

  return (
    <>
      <main className="content details add workspace">
        {/* {fileBase64.map((item: any) => (
          <img
            className=""
            src={item}
            alt="First slide"
            style={{ width: '100%', height: '550px' }}
          />
        ))} */}
        <div className="inputs">
          <div className="input title">
            <span>작업명</span>
            <input type="text" placeholder="작업명을 입력하세요." onChange={handleTitle} />
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
            <span>받는사람</span>
            <input type="text" onChange={handleInputName} />
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
          <textarea name="" id="" onChange={handleContent} />
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
        </div>
      </main>
      <div className="buttons">
        <button className="btn-main" onClick={showModal} type="button">
          업무 요청 등록
        </button>
      </div>
      <Modal show={isOpen} confirmed={showDoneModal} close={isClose} title="업무 요청">
        업무 요청을 등록하시겠습니까?
      </Modal>
      <ModalDone show={isOpen2} close={isCloseAll}>
        업무 요청이 등록 되었습니다.
      </ModalDone>
    </>
  );
}
