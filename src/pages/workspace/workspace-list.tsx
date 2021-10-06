import React, { useEffect, useState } from 'react';
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

  return (
    <>
      <SearchArea show={isToggleOn} onChange={(keyword) => setSearch(keyword)} />
      {searchWorkspaceList !== [] ? (
        <main className="content list workspace" onScroll={ActiveScroll}>
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
        </main>
      ) : (
        <main className="no-result">
          <div>
            <i className="fad fa-exclamation-triangle" />
            <span>등록된 일감이 없습니다.</span>
          </div>
        </main>
      )}

      <BottomStickyMenu toggle={toggleSearchArea} />
    </>
  );
}
