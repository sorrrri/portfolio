/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { showHeader } from '../../_store/slice/header-option';
import api from '../../_api/backend';
import { ActiveScroll } from '../../_component/active-scroll';

export function WorkspaceAdd(props: any) {
  const dispatch = useDispatch();

  // 모달 state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showCatch, setShowCatch] = useState(false);

  const [recipient, setRecipient] = useState<any[]>([]); // 받는사람 정보
  const [inputRecipient, setInputRecipient] = useState([]); // tag로 입력받은 값

  // 업무 요청
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
  });

  useEffect(() => {
    fetchWorkspaceTemplate();
    filterRecipient();
  }, [inputRecipient]);

  // 받는사람 정보 api 호출
  const fetchWorkspaceTemplate = () => {
    api.getWorkspaceTemplate().then((payload: any) => {
      const { code, response } = payload;
      const emptyArr: Array<object> = [];
      if (code === 200 && Array.isArray(response.results.recipient)) {
        response.results.recipient.forEach((data: any) => {
          const obj = { value: data.uuid, label: data.name };
          emptyArr.push(obj);
        });
      }
      setRecipient(emptyArr);
    });
  };

  // tag로 입력받은 받는사람 uuid 추출
  const filterRecipient = () => {
    const emptyArr: Array<any> = [];
    inputRecipient.filter((item: any) => {
      const str = item.value;
      return emptyArr.push(str);
    });
    setToList(emptyArr);
  };

  // 업무 요청 페이지 빈 값 체크
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
    const post = api
      .addWorkspace('work', {
        title,
        priority,
        detail_type: detailType,
        to_list: toList,
        platform_sharing: platformSharing,
        content,
        upload_files: attacheFiles,
      })
      .then(() => {
        if (post !== undefined) {
          setIsOpen2(true);
        }
      })
      .catch(() => {
        setIsOpen(false);
        setShowCatch(true);
      });
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const isClose2 = () => {
    setIsOpen2(false);
    const { history } = props;
    history.push('/workspace');
  };

  return (
    <>
      <main className="content details add workspace" onScroll={ActiveScroll}>
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
                  onClick={() => setPriority('LOW')}
                />
                <label htmlFor="input-normal">
                  <span>낮음</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="input-low"
                  name="filter-importance"
                  onClick={() => setPriority('USUALLY')}
                />
                <label htmlFor="input-low">
                  <span>보통</span>
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
                  id="etc"
                  name="work-type"
                  defaultChecked
                  onClick={() => setDetailType('WORK_ETC')}
                />
                <label htmlFor="etc">
                  <span>기타</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="request-permission"
                  name="work-type"
                  onClick={() => setDetailType('WORK_PERMISSION')}
                />
                <label htmlFor="request-permission">
                  <span>권한</span>
                </label>
              </button>
            </div>
          </div>
          <div className="input send-to">
            <span>받는사람</span>
            <Select
              defaultValue={recipient}
              options={recipient}
              onChange={(e: any) => setInputRecipient(e)}
              isMulti
              placeholder="받는사람 이름을 입력하세요."
            />
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
          {attacheFiles.map((item) => (
            <ul key={item.name.toString()} className="files-name">
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
      {showTitle && (
        <ModalDone show={showTitle} close={() => setShowTitle(false)}>
          작업명을 입력해 주세요.
        </ModalDone>
      )}
      {showToList && (
        <ModalDone show={showToList} close={() => setShowToList(false)}>
          받는사람을 입력해 주세요.
        </ModalDone>
      )}
      {showContent && (
        <ModalDone show={showContent} close={() => setShowContent(false)}>
          댓글을 입력해 주세요.
        </ModalDone>
      )}
      {showCatch && (
        <ModalDone show={showCatch} close={() => setShowCatch(false)}>
          업무 요청 등록 실패, 관리자에게 문의해주시기 바랍니다.
        </ModalDone>
      )}
      {isOpen && (
        <>
          <Modal show={isOpen} confirmed={showDoneModal} close={isClose} title="업무 요청">
            업무 요청을 등록하시겠습니까?
          </Modal>
          <ModalDone show={isOpen2} close={isClose2}>
            업무 요청이 등록 되었습니다.
          </ModalDone>
        </>
      )}
    </>
  );
}
