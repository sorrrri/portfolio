/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { Row } from './components/list-row';
import api from '../../_api/backend';
import { BottomStickyMenu } from '../../_layout/bottom-sticky-menu';
import { ActiveScroll } from '../../_component/active-scroll';

export function WorkspaceList(props: any) {
  const dispatch = useDispatch();
  const [isToggleOn, setToggleOn] = useState(false);

  const [workspaceList, setWorkspaceList] = useState<any[]>([]); // 일감목록 정보
  const [search, setSearch] = useState(''); // 일감목록 검색

  useEffect(() => {
    dispatch(
      showHeader({
        title: 'Workspace',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork toggle={toggleSearchArea} {...props} />,
      })
    );
  });

  useEffect(() => {
    fetchWorkspaceList();
  }, []);

  // 일감목록 정보 api 호출
  const fetchWorkspaceList = () => {
    api.getWorkspaceList().then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && Array.isArray(response.results)) {
        setWorkspaceList(response.results);
      }
    });
  };

  // 검색창 토글
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
    setSearch('');
  };
  const overlays = document.querySelectorAll('.overlay') as any;
  overlays.forEach((overlay: any) => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });

  // 일감목록 검색
  const searchWorkspaceList = workspaceList.filter(
    (item: any) =>
      item.title.toLowerCase().includes(search) ||
      item.registrant.name.toLowerCase().includes(search)
  );

  // 일감상세 props
  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  const ListItem = () => (
    <>
      {searchWorkspaceList.map((workdata) => (
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
      ))}
    </>
  );

  const fakeFetch = (delay = 1000) => new Promise((res) => setTimeout(res, delay));
  // const fetchItems = async () => searchWorkspaceList.map((workdata) => workdata + 3);
  const [state, setState] = useState({ itemCount: 0, isLoading: false });
  const fetchItems = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await fakeFetch();
    setState((prev) => ({
      itemCount: prev.itemCount + 5,
      isLoading: false,
    }));
  };
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  const checkIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await fetchItems();
      observer.observe(entry.target);
    }
  };
  const options = {
    root: document.querySelector('main'),
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    let observer: any;
    if (target) {
      observer = new IntersectionObserver(checkIntersect, options);
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const { itemCount, isLoading } = state;

  return (
    <>
      <SearchArea show={isToggleOn} onChange={(keyword) => setSearch(keyword)} />
      <main className="content list workspace" onScroll={ActiveScroll}>
        {[...Array(itemCount)].map((_, index) => {
          return <ListItem key={index} />;
        })}
        <div ref={setTarget} className="Loading">
          {isLoading && 'Loading...'}
        </div>
      </main>
      <main className="no-result">
        <div>
          <i className="fad fa-exclamation-triangle" />
          <span>등록된 일감이 없습니다.</span>
        </div>
      </main>

      <BottomStickyMenu toggle={toggleSearchArea} />
    </>
  );
}
