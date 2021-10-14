import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { Row } from './components/list-row';
import { BottomStickyMenu } from '../../_layout/bottom-sticky-menu';
import { ActiveScroll } from '../../_component/active-scroll';
import WorkspaceListAPI from './components/workpace-list-api';
import { ModalDone } from '../../_component/modal-done';

export function WorkspaceList(props: any) {
  const dispatch = useDispatch();
  const [isToggleOn, setToggleOn] = useState<Boolean>(false);

  const [page, setPage] = useState<number>(1); // 일감 목록 페이지
  const [searchKeyword, setSearchKeyword] = useState<string>(''); // 일감 검색 keyword
  const [searKeyPress, setSearKeyPress] = useState<string>(''); // 일감 검색 state
  const [errorClear, setErrorClear] = useState<Boolean>(false); // 모달, errorClear prop
  const [keyUpReset, setKeyUpReset] = useState<Boolean>(false); // workspace-list-api Keypress Reset
  const [keywordReset, setKeywordReset] = useState<Boolean>(false); // search-area Keyword Reset

  useEffect(() => {
    dispatch(
      showHeader({
        title: 'Workspace',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork toggle={toggleSearchArea} {...props} />,
      })
    );
  });

  // 일감 목록 검색 / 페이징 함수
  const { loading, workspaceList, pagingError, workspaceListCheck } = WorkspaceListAPI(
    searKeyPress,
    page,
    errorClear,
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

  // 검색창 토글
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };

  const overlays = document.querySelectorAll('.overlay') as any;
  overlays.forEach((overlay: any) => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

  // 일감상세 props
  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  // Search 핸들
  const handleKeyUp = (e: any) => {
    if (e.key === 'Enter') {
      setSearKeyPress(searchKeyword);
      setPage(1);
    }
  };

  // Search Close 핸들
  const handleSearchAreaClose = () => {
    setKeywordReset(true);
    setKeyUpReset(true);
    setSearKeyPress('');
    setPage(1);
    setToggleOn(false);
  };

  return (
    <>
      <SearchArea
        keywordReset={keywordReset}
        placeHolder="작업명을 입력하세요."
        show={isToggleOn}
        close={handleSearchAreaClose}
        onChange={(keyword) => setSearchKeyword(keyword)}
        onKeyUp={handleKeyUp}
      />
      <main
        className={`content list workspace ${!workspaceListCheck && 'no-result'}`}
        onScroll={ActiveScroll}
      >
        {workspaceListCheck ? (
          <>
            {workspaceList &&
              workspaceList.map((item: any) =>
                item.results.map((workdata: any) => {
                  return (
                    <Row
                      key={workdata.work_uuid}
                      item={() => onClickItem(workdata.work_uuid)}
                      rowtype={workdata.type}
                      title={workdata.title}
                      writer={workdata.registrant.name}
                      date={workdata.reg_date}
                      worktype={workdata.type}
                      importance={workdata.priority}
                      attachments={workdata.attachments}
                      comment={workdata.comment}
                      read={workdata.views}
                      images={workdata.attachments_preview}
                    >
                      {workdata.summary_content}
                    </Row>
                  );
                })
              )}
            <div ref={lastElementRef} />
          </>
        ) : (
          <div className="empty">
            <i className="fad fa-exclamation-triangle" />
            <span>등록된 일감이 없습니다.</span>
          </div>
        )}
      </main>
      <BottomStickyMenu toggle={toggleSearchArea} />
      <ModalDone show={pagingError} close={() => setErrorClear(true)}>
        일감 목록 확인 실패, 관리자에게 문의해주시기 바랍니다.
      </ModalDone>
    </>
  );
}
