/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { ModalImage } from '../../_component/modal-image';
import { ActiveScroll } from '../../_component/active-scroll';
import { Comment } from './components/comment';
import api from '../../_api/backend';

export function WorkspaceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [workspaceDetail, setWorkspaceDetail] = useState<any>({}); // 일감상세 정보
  const [newResigtrant, setNewResigtrant] = useState<any>({}); // 일감상세 회원정보
  const [comments, setComments] = useState<any[]>([]); // 일감상세 댓글정보

  const [recipient, setRecipient] = useState([]); // 받는사람 정보
  const [inRecipient, setInRecipient] = useState(''); // input 받는사람

  // 댓글 등록
  const [state, setState] = useState('WORK_REQUEST'); // 처리상태
  const [toList, setToList] = useState(''); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [content, setContent] = useState(''); // 댓글내용
  // const [uploadFiles, setUploadFiles] = useState(); // 파일첨부

  // 일감상세 객체 구조 분해
  const {
    title,
    reg_date: regDate,
    content: Content,
    comment_cnt: commentCnt,
    views,
    priority_name: priorityName,
  } = workspaceDetail;

  // 일감상세 회원정보 객체 구조 분해
  const { name } = newResigtrant;

  useEffect(() => {
    dispatch(
      showHeader({
        title: `Workspace #${id}`,
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  }, [id]);

  useEffect(() => {
    fetchWorkspaceDetail();
  }, []);

  useEffect(() => {
    filterRecipient();
  });

  useEffect(() => {
    fetchWorkspaceTemplate();
  }, [toList]);

  // 일감 상세 정보 get
  const fetchWorkspaceDetail = () => {
    api.getWorkspaceDetail(id).then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && Object(response.results)) {
        setWorkspaceDetail(response.results);
        setNewResigtrant(response.results.registrant);
        setComments(response.results.comment);
      }
    });
  };

  // 받는사람 정보 get
  const fetchWorkspaceTemplate = () => {
    api.getWorkspaceTemplate('work').then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response.results.recipient) {
        setRecipient(response.results.recipient);
      }
    });
  };

  // 받는사람 filter
  const filterRecipient = () => {
    const filtername = recipient.filter((item: any) => item.name === inRecipient);
    const filteruuid = filtername.map((item: any) => item.uuid);
    const result = filteruuid.join();
    setToList(result);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const showDoneModal = () => {
    setIsOpen2(true);
  };

  const showImageModal = () => {
    setIsOpen3(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const isCloseAll = () => {
    // api.addComment(id, {
    console.log(id, {
      state,
      to_list: toList,
      platform_sharing: platformSharing,
      content,
      // upload_files: uploadFiles,
    });
    setIsOpen(false);
    setIsOpen2(false);
  };

  const handleSubmitCancle = (e: any) => {
    e.preventDefault();
    setContent('');
    setInRecipient('');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setContent('');
    setInRecipient('');
    isCloseAll();
  };

  return (
    <>
      <main className="content details workspace" onScroll={ActiveScroll}>
        <div className="row emergency">
          <div className="row-title">
            <div className="tags">
              <span className="tag bg-red">긴급</span>
              <span className="tag bg-blue">요청</span>
            </div>
            <ul>
              <li className="title">
                <div>{title}</div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">{name}</span>
                <span className="date">{regDate}</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <p>{Content}</p>
            <div className="images">
              <div className="image">
                <img
                  onClick={showImageModal}
                  src="https://images.unsplash.com/photo-1610819610413-3e42356fc150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
              <div className="image">
                <img
                  onClick={showImageModal}
                  src="https://images.unsplash.com/photo-1596311087104-86dba6be2aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0cmVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="status">
            <div className="attach" />
            <ul>
              <li>
                <i className="fad fa-comment-alt-lines" />
                <span className="comment">{commentCnt}</span>
              </li>
              <li>
                <i className="fad fa-comment-alt-check" />
                <span className="read">{views}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row comments">
          <div className="new add">
            <div className="title">
              <i className="fad fa-comment-alt-edit" />
              <span>댓글작성</span>
            </div>
            <div className="filters">
              <button type="button">
                <input
                  type="radio"
                  id="input-request-comment"
                  name="filter-type"
                  defaultChecked
                  onClick={() => setState('WORK_REQUEST')}
                />
                <label className="bg-orange" htmlFor="input-request-comment">
                  <span>요청</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="input-undertake-comment"
                  name="filter-type"
                  onClick={() => setState('PROGRESS')}
                />
                <label className="bg-blue" htmlFor="input-undertake-comment">
                  <span>진행</span>
                </label>
              </button>
              <button type="button">
                <input
                  type="radio"
                  id="input-done-comment"
                  name="filter-type"
                  onClick={() => setState('COMPLETION')}
                />
                <label className="bg-green" htmlFor="input-done-comment">
                  <span>완료</span>
                </label>
              </button>
            </div>
            <div className="input">
              <span>받는사람</span>
              <input
                type="text"
                value={inRecipient}
                onChange={(e) => setInRecipient(e.target.value)}
              />
            </div>
            <div className="input">
              <span>플랫폼관리자 공개여부</span>
              <div className="filters">
                <button type="button">
                  <input
                    type="radio"
                    id="comment-public"
                    name="comment-type"
                    defaultChecked
                    onClick={() => setPlatformSharing(true)}
                  />
                  <label htmlFor="comment-public">
                    <span>예</span>
                  </label>
                </button>
                <button type="button">
                  <input
                    type="radio"
                    id="comment-private"
                    name="comment-type"
                    onClick={() => setPlatformSharing(false)}
                  />
                  <label htmlFor="comment-private">
                    <span>아니오</span>
                  </label>
                </button>
              </div>
            </div>
            <textarea name="" id="" value={content} onChange={(e) => setContent(e.target.value)} />
            <div className="comment-footer">
              <div className="buttons attach">
                <button type="button">
                  <label htmlFor="input-attach">
                    <i className="fad fa-cloud-upload" />
                  </label>
                  <input type="file" id="input-attach" />
                </button>
              </div>
              <div className="buttons">
                <button className="btn-cancel" type="submit" onClick={handleSubmitCancle}>
                  취소
                </button>
                <button className="btn-submit" onClick={showModal} type="button">
                  등록
                </button>
              </div>
            </div>
          </div>
          {comments &&
            comments.map((comment: any) => (
              <Comment
                key={comment.comment_uuid}
                state={priorityName}
                writer={comment.registrant.name}
                date={comment.reg_date}
              >
                {comment.content}
              </Comment>
            ))}
          {/* <Comment request writer="홍길동" date="2021-08-03 12:42:32" read="박보검">
            [템플릿] 내용 확인 했습니다. 최대한 빨리 조치 가능 하도록 하겠습니다.
          </Comment>
          <Comment
            undertake
            writer="홍길동"
            date="2021-08-03 12:42:32"
            read="박보검, 정우성, 전지현, 이정재, 이영애, 손예진, 현빈, 고길동, 둘리, 또치"
          >
            [템플릿] 내용 확인 했습니다. 최대한 빨리 조치 가능 하도록 하겠습니다.
          </Comment>
          <Comment done writer="홍길동" date="2021-08-03 12:42:32" read="박보검">
            [템플릿] 내용 확인 했습니다. 최대한 빨리 조치 가능 하도록 하겠습니다.
          </Comment> */}
        </div>
      </main>
      <Modal show={isOpen} confirmed={showDoneModal} close={isClose} title="댓글 등록">
        작업 내용을 등록하시겠습니까?
      </Modal>
      <ModalDone show={isOpen2} close={handleSubmit}>
        작업 내용이 등록 되었습니다.
      </ModalDone>
      <ModalImage show={isOpen3} close={() => setIsOpen3(false)} />
    </>
  );
}
