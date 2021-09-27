/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { ModalImage } from '../../_component/modal-image';
import { Comment } from './components/comment';
import api from '../../_api/backend';

export function WorkspaceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDelete2, setShowDelete2] = useState(false);

  const [workspaceDetail, setWorkspaceDetail] = useState<any>({}); // 일감상세 정보
  const [newResigtrant, setNewResigtrant] = useState<any>({}); // 일감상세 회원정보
  const [comments, setComments] = useState<any[]>([]); // 일감상세 댓글정보
  const [uploadFiles, setUploadFiles] = useState<any[]>(); // 파일 정보

  const [recipient, setRecipient] = useState([]); // 받는사람 정보
  const [inRecipient, setInRecipient] = useState(''); // input 받는사람

  // 댓글 등록
  const [state, setState] = useState('WORK_REQUEST'); // 처리상태
  const [toList, setToList] = useState(''); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [content, setContent] = useState(''); // 댓글내용
  const [attacheFiles, setAttacheFiles] = useState<File[]>([]); // 파일첨부

  // 일감상세 객체 구조 분해
  const {
    req_type_name: reqTypeName,
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
        setUploadFiles(response.results.upload_files);
      }
    });
  };

  // 받는사람 정보 get
  const fetchWorkspaceTemplate = () => {
    api.getWorkspaceTemplate().then((payload: any) => {
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

  const switchimportance = (value: any) => {
    switch (value) {
      case '긴급':
        return <span className="tag bg-red">긴급</span>;
      case '높음':
        return <span className="tag bg-orange">높음</span>;
      case '보통':
        return <span className="tag bg-blue">보통</span>;
      case '낮음':
        return <span className="tag bg-green">낮음</span>;
      default:
        return <span className="">...</span>;
    }
  };

  const imgFiles = uploadFiles?.filter((file) => file.file_preview !== '');
  const docFiles = uploadFiles?.filter((file) => file.file_preview === '');

  const showModal = () => {
    if (toList.length === 0) {
      setShowToList(true);
    } else if (content === '') {
      setShowContent(true);
    } else {
      setIsOpen(true);
    }
  };

  // 댓글 등록
  const showDoneModal = () => {
    api.addComment(id, {
      state,
      to_list: toList,
      platform_sharing: platformSharing,
      content,
      upload_files: attacheFiles,
    });
    setIsOpen(false);
    setIsOpen2(true);
  };

  const showImageModal = (event: any) => {
    const modalImage = document.querySelector('.modal-image') as HTMLDivElement;
    modalImage.innerHTML = `<img src="${event.target.src}" alt="" />`;
    setIsOpen3(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const isClose2 = () => {
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
    isClose2();
  };

  // 일감 삭제
  const deleteWorkspace = () => {
    setShowDelete2(false);
    api.removeWorkspace(id);
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
      <main className="content details workspace">
        <div className="row emergency">
          <div className="row-title">
            <div className="tags">{switchimportance(reqTypeName)}</div>
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
            <ul className="documents">
              {docFiles &&
                docFiles?.map((file, index) => (
                  <li className="document">
                    <div key={index}>
                      <i className="fad fa-file-alt" />
                      <span>{file.file_name}</span>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="images">
              {imgFiles &&
                imgFiles?.map((img, index) => (
                  <div className="image">
                    <img key={index} onClick={showImageModal} src={img.file_preview} alt="" />
                  </div>
                ))}
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
                <label htmlFor="input-request-comment">
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
                <label htmlFor="input-undertake-comment">
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
                <label htmlFor="input-done-comment">
                  <span>완료</span>
                </label>
              </button>
            </div>
            <div className="input">
              <span>받는사람</span>
              <Select defaultValue={selectedOption} options={options} isMulti />
              {/* <input
                type="text"
                value={inRecipient}
                onChange={(e) => setInRecipient(e.target.value)}
              /> */}
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
                  <input
                    type="file"
                    id="input-attach"
                    multiple
                    onChange={(e: any) => setAttacheFiles(Array.from(e.target.files))}
                  />
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
              {attacheFiles.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ul key={index} className="files-name">
                  <li>{item.name}</li>
                </ul>
              ))}
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
        <div className="buttons">
          <button type="button" onClick={() => setShowDelete(true)}>
            삭제하기
          </button>
        </div>
      </main>
      <ModalDone show={showToList} close={() => setShowToList(false)}>
        받는사람을 입력해 주세요.
      </ModalDone>
      <ModalDone show={showContent} close={() => setShowContent(false)}>
        댓글을 입력해 주세요.
      </ModalDone>
      <Modal show={isOpen} confirmed={showDoneModal} close={isClose} title="댓글 등록">
        작업 내용을 등록하시겠습니까?
      </Modal>
      <ModalDone show={isOpen2} close={handleSubmit}>
        작업 내용이 등록 되었습니다.
      </ModalDone>
      <Modal
        show={showDelete}
        confirmed={() => setShowDelete2(true)}
        close={() => setShowDelete(false)}
        title="일감 삭제"
      >
        삭제 하시겠습니까?
      </Modal>
      <ModalDone show={showDelete2} close={deleteWorkspace}>
        삭제 되었습니다.
      </ModalDone>
      <ModalImage show={isOpen3} close={() => setIsOpen3(false)} />
    </>
  );
}
