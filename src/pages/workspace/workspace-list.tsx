import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { Row } from './components/list-row';
import api from '../../_api/backend';

export function WorkspaceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };
  const [workspaceList, setWorkspaceList] = useState<any[]>([]); // 일감목록 정보

  const dispatch = useDispatch();
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

  // 일감 목록 정보 get
  const fetchWorkspaceList = () => {
    api.getWorkspaceList().then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && Array.isArray(response.results)) {
        setWorkspaceList(response.results);
      }
    });
  };

  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  return (
    <>
      <SearchArea show={isToggleOn} />
      <main className="content list workspace">
        {workspaceList.map((workdata) => (
          <Row
            key={workdata.work_uuid}
            title={workdata.title}
            item={() => onClickItem(workdata.work_uuid)}
            typeEmergency
            comment={workdata.comment}
            read={workdata.views}
            writer={workdata.registrant.name}
            date={workdata.reg_date}
          >
            {workdata.summary_content}
          </Row>
        ))}
        {/* <Row
          item={() => onClickItem(1)}
          comment={3}
          read={5}
          title="[템플릿] 카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건"
          writer="홍길동"
          date="2021-08-03 12:42:32"
          documents
        >
          모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링
          중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처
          가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처 가로수로
          인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
        </Row>
        <Row
          item={() => onClickItem(1)}
          comment={3}
          read={5}
          title="[템플릿] 카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건"
          writer="홍길동"
          date="2021-08-03 12:42:32"
          images
        >
          모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링
          중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처
          가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처 가로수로
          인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
        </Row> */}
      </main>
    </>
  );
}
