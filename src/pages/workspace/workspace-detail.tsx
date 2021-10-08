/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { showHeader } from '../../_store/slice/header-option';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { ModalImage } from '../../_component/modal-image';
import { Comment } from './components/comment';
import api from '../../_api/backend';
import { downloadFile } from '../../_util/file';
import { ActiveScroll } from '../../_component/active-scroll';
import { BottomStickyMenu } from '../../_layout/bottom-sticky-menu';
import { TextEditor } from '../../_component/text-editor';

export function WorkspaceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  // 모달 state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDelete2, setShowDelete2] = useState(false);
  const [showCatch, setShowCatch] = useState(false);

  const [workspaceDetail, setWorkspaceDetail] = useState<any>({}); // 일감상세 정보
  const [newResigtrant, setNewResigtrant] = useState<any>({}); // 일감상세 회원정보
  const [comments, setComments] = useState<any[]>([]); // 일감상세 댓글정보
  const [docFiles, setDocFiles] = useState<any[]>([]); // 일감상세 priview가 없는 문서
  const [imgFiles, setImgFiles] = useState<any[]>([]); // 일감상세 priview가 있는 이미지
  const [image, setImage] = useState(''); // 이미지 미리보기
  const [imageName, setImageName] = useState(''); // 이미지 다운로드 이름

  const [recipient, setRecipient] = useState<any[]>([]); // 받는사람 정보
  const [inputRecipient, setInputRecipient] = useState([]); // tag로 입력받은 값

  // 댓글 등록 state
  const [state, setState] = useState('WORK_REQUEST'); // 처리상태
  const [toList, setToList] = useState<any[]>([]); // 받는사람
  const [platformSharing, setPlatformSharing] = useState(true); // 플랫폼관리자 공개여부
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty()); // 작업내용에디터
  const [content, setContent] = useState(''); // 댓글내용
  const [attacheFiles, setAttacheFiles] = useState<File[]>([]); // 파일첨부
  const [contentRender, setContentRender] = useState(Boolean); // 댓글 등록 랜더링

  useEffect(() => {
    dispatch(
      showHeader({
        title: `Workspace`,
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
    fetchWorkspaceDetail();
    setContentRender(false);
  }, [id, contentRender]);

  useEffect(() => {
    fetchWorkspaceTemplate();
    filterRecipient();
  }, [inputRecipient]);

  // 일감상세 정보 api 호출
  const fetchWorkspaceDetail = () => {
    api.getWorkspaceDetail(id).then((payload: any) => {
      const { code, response } = payload;
      const docArr: Array<any> = [];
      const imgArr: Array<any> = [];
      if (code === 200 && Object(response.results)) {
        setWorkspaceDetail(response.results);
        setNewResigtrant(response.results.registrant);
        setComments(response.results.comment);
      }
      if (response.results.upload_files !== null) {
        response.results.upload_files.forEach((file: any) => {
          if (file.file_preview === '') docArr.push(file);
          else imgArr.push(file);
        });
        setDocFiles(docArr);
        setImgFiles(imgArr);
      }
    });
  };

  // 일감상세 정보 state 객체 구조 분해
  const {
    priority,
    title,
    reg_date: regDate,
    content: Content,
    comment_cnt: commentCnt,
    views,
    type,
  } = workspaceDetail;

  // 일감상세 회원정보 state 객체 구조 분해
  const { name } = newResigtrant;

  // 시간 포맷
  const dateFormat = (date: any) => {
    let changeDate = '';
    if (date !== undefined) {
      changeDate = date.substr(0, 19).replace('T', ' ');
    }
    return changeDate;
  };

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

  // 댓글 등록 빈 값 체크
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
    const post = api
      .addComment(id, {
        state,
        to_list: toList,
        platform_sharing: platformSharing,
        content,
        upload_files: attacheFiles,
      })
      .then(() => {
        if (post !== undefined) {
          setIsOpen2(true);
          setContentRender(true);
        }
      })
      .catch(() => {
        setIsOpen(false);
        setShowCatch(true);
      });
  };

  // 이미지 미리보기 | 다운로드
  const showImageModal = (event: any) => {
    const imagePath = event.target.src;
    const imageDownloadName = event.target.alt;
    setIsOpen3(true);
    setImage(imagePath);
    setImageName(imageDownloadName);
  };

  const isCloseAll = () => {
    setIsOpen(false);
    setIsOpen2(false);
  };

  // 댓글 취소
  const handleSubmitCancle = (e: any) => {
    e.preventDefault();
    setInputRecipient([]);
    setEditorState(EditorState.createEmpty());
    setContent('');
    setAttacheFiles([]);
  };

  // 댓글 등록
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEditorState(EditorState.createEmpty());
    setContent('');
    setInputRecipient([]);
    setAttacheFiles([]);
    isCloseAll();
  };

  // 일감 삭제
  const deleteWorkspace = () => {
    setShowDelete2(true);
    api.removeWorkspace(id);
  };

  const deleteWorkspace2 = () => {
    setShowDelete2(false);
    const { history } = props;
    history.push('/workspace');
  };

  // 파일 다운로드
  const onClickAttachFile = async (file: any) => {
    const { file_name, file_type, file_uuid } = file;
    if (!file_name || !file_type || !file_uuid) {
      return;
    }
    const fileBinary = await api.getFileDownload(id, file_uuid);
    downloadFile(fileBinary, file_type, file_name);
  };

  // 댓글 파일 다운로드
  const onClickCommentAttachFile = async (file: any, commentId: any) => {
    const { file_name, file_type, file_uuid } = file[0];
    if (!file_name || !file_type || !file_uuid) {
      return;
    }
    const fileBinary = await api.getFileDownload(commentId, file_uuid);
    downloadFile(fileBinary, file_type, file_name);
  };

  // Text Editor
  const onEditorStateChange = (editor: any) => {
    setEditorState(editor);
    setContent(draftToHtml(convertToRaw(editor.getCurrentContent())));
  };

  const switchimportance = (value: any) => {
    switch (value) {
      case 'EMERGENCY':
        return <span className="tag bg-red">긴급</span>;
      case 'HIGH':
        return <span className="tag bg-orange">높음</span>;
      case 'USUALLY':
        return <span className="tag bg-blue">보통</span>;
      case 'LOW':
        return <span className="tag bg-green">낮음</span>;
      default:
        return <span className="" />;
    }
  };

  return (
    <>
      <main className="content details workspace" onScroll={ActiveScroll}>
        <div className={`row ${type === 'disability' ? 'obstruction' : ''}`}>
          <div className="row-title">
            <div className="tags">{switchimportance(priority)}</div>
            <ul>
              <li className="title">
                <div>{title}</div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">{name}</span>
                <span className="date">{dateFormat(regDate)}</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <div dangerouslySetInnerHTML={{ __html: Content }} />
            <ul className="documents">
              {docFiles &&
                docFiles.map((doc) => (
                  <li
                    key={doc.file_uuid}
                    className="document"
                    onClick={() => onClickAttachFile(doc)}
                  >
                    <i className="fad fa-file-alt" />
                    <span>{doc.file_name}</span>
                  </li>
                ))}
            </ul>
            <div className="images">
              {imgFiles &&
                imgFiles.map((img) => (
                  <div key={img.file_uuid} className="image">
                    <img onClick={showImageModal} src={img.file_preview} alt={img.file_name} />
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
              <Select
                options={recipient}
                onChange={(e: any) => setInputRecipient(e)}
                value={inputRecipient}
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
            <TextEditor editorState={editorState} onEditorStateChange={onEditorStateChange} />
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
              {attacheFiles.map((item) => (
                <ul key={item.name.toString()} className="files-name">
                  <li>{item.name}</li>
                </ul>
              ))}
            </div>
          </div>
          {comments &&
            comments.map((comment: any) => (
              <Comment
                key={comment.comment_uuid}
                state={comment.state_name}
                writer={comment.registrant.name}
                date={dateFormat(comment.reg_date)}
                attachment={comment.upload_files}
                download={() =>
                  onClickCommentAttachFile(comment.upload_files, comment.comment_uuid)
                }
              >
                {comment.content}
              </Comment>
            ))}
        </div>
        <div className="buttons">
          <button type="button" onClick={() => setShowDelete(true)}>
            삭제하기
          </button>
        </div>
      </main>
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
        <ModalDone show={showContent} close={() => setShowCatch(false)}>
          댓글 등록 실패, 관리자에게 문의해주시기 바랍니다.
        </ModalDone>
      )}
      {showDoneModal && (
        <>
          <Modal show={isOpen} confirmed={showDoneModal} close={isCloseAll} title="댓글 등록">
            댓글 내용을 등록하시겠습니까?
          </Modal>
          <ModalDone show={isOpen2} close={handleSubmit}>
            댓글 내용이 등록 되었습니다.
          </ModalDone>
        </>
      )}
      {showDelete && (
        <>
          <Modal
            show={showDelete}
            confirmed={deleteWorkspace}
            close={() => setShowDelete(false)}
            title="일감 삭제"
          >
            삭제 하시겠습니까?
          </Modal>
          <ModalDone show={showDelete2} close={deleteWorkspace2}>
            삭제 되었습니다.
          </ModalDone>
        </>
      )}
      {imgFiles && (
        <ModalImage
          show={isOpen3}
          imagePath={image}
          imageName={imageName}
          close={() => setIsOpen3(false)}
        />
      )}
      <BottomStickyMenu />
    </>
  );
}
