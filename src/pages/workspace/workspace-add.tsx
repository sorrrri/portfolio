/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { showHeader } from '../../_store/slice/header-option';
import api from '../../_api/backend';

export function WorkspaceAdd() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '업무 요청',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
    fetchTemplate();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [title, setTitle] = useState(''); // 작업명
  const [priority, setPriority] = useState(''); // 중요도
  const [detailType, setDetailType] = useState(''); // 업무유형
  const [toList, setToList] = useState(''); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [content, setContent] = useState(''); // 작업내용

  const [recipient, setRecipient] = useState<any[]>([]); // 받는사람 정보(리스트)

  // 받는사람 정보(리스트) 가져오기
  const fetchTemplate = () => {
    api.getTemplate('work').then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response && Array.isArray(response.results.recipient)) {
        setRecipient(response.results.recipient);
      }
    });
  };

  // 작업명 입력 받아 setState
  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  // 받는사람 입력 받아 필터 후 setState
  const onChangeToList = (e: any) => {
    const toListname = recipient.filter((item) => item.name === e.target.value);
    const toListuuid = toListname.map((name) => name.uuid);
    const toListresult = toListuuid.join();
    setToList(toListresult);
  };

  // 작업내용 입력 받아 setState
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  // 업무 요청 등록
  const showDoneModal = () => {
    api.addWorkspace('work', {
      priority,
      detail_type: detailType,
      to_list: toList,
      platform_sharing: platformSharing,
      title,
      content,
    });
    setIsOpen2(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const isCloseAll = () => {
    setIsOpen(false);
    setIsOpen2(false);
  };

  return (
    <>
      <main className="content details add workspace">
        <div className="inputs">
          <div className="input title">
            <span>작업명</span>
            <input type="text" placeholder="작업명을 입력하세요." onChange={onChangeTitle} />
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
            <input type="text" onChange={onChangeToList} />
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
          <textarea name="" id="" onChange={onChangeContent} />
          <div className="buttons attach">
            <button type="button">
              <input type="file" id="input-attach" />
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
