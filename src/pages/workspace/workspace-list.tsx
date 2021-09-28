import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { Row } from './components/list-row';
import api from '../../_api/backend';

export function WorkspaceList(props: any) {
  const dispatch = useDispatch();
  const [isToggleOn, setToggleOn] = useState(false);

  const [workspaceList, setWorkspaceList] = useState<any[]>([]); // 일감목록 정보
  const [attachmentsWorkuuid, setAttachmentsWorkuuid] = useState<any>([]); // 일감목록 중 첨부파일 있는 work_uuid
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
      const emptyArr: Array<object> = [];
      if (code === 200 && Array.isArray(response.results)) {
        setWorkspaceList(response.results);
        // 일감목록 중 첨부파일 있는 work_uuid 파싱
        response.results.forEach((data: any) =>
          data.attachments === true ? emptyArr.push(data.work_uuid) : emptyArr.push([])
        );
      }
      setAttachmentsWorkuuid(emptyArr);
    });
  };

  // 검색창 토글
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
    setSearch('');
  };

  // 일감목록 검색
  const searchWorkspaceList = workspaceList.filter(
    (item: any) =>
      item.title.toLowerCase().includes(search) ||
      item.registrant.name.toLowerCase().includes(search)
  );

  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  return (
    <>
      <SearchArea show={isToggleOn} onChange={(keyword) => setSearch(keyword)} />
      <main className="content list workspace">
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
            // images={workdata.attachments}
          >
            {workdata.summary_content}
          </Row>
        ))}
      </main>
    </>
  );
}
