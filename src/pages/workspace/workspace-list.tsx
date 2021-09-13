import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { AddSearchWork } from '../../_layout/top-navigator/right-context/add-search-work';
import { SearchArea } from '../../_layout/top-navigator/search-area';
import { ActiveScroll } from '../../_component/active-scroll';
import { Row } from './components/list-row';
import api from '../../_api/backend';

export function WorkspaceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);
  const [workspaceList, setWorkspaceList] = useState<any[]>([]);
  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showHeader({
        title: 'Workspace',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork toggle={toggleSearchArea} {...props} />,
      })
    );
    fetchWorkspace();
  }, []);

  const fetchWorkspace = () => {
    api.getWorkspace().then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response && Array.isArray(response.results)) {
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
      <main className="content list workspace" onScroll={ActiveScroll}>
        <Row
          item={() => onClickItem(1)}
          typeEmergency
          comment={3}
          read={5}
          title="카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건"
          writer="홍길동"
          date="2021-08-03 12:42:32"
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
          title="카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건"
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
          title="카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건"
          writer="홍길동"
          date="2021-08-03 12:42:32"
          images
        >
          모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링
          중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처
          가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처 가로수로
          인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
        </Row>
        <Row
          item={() => onClickItem(1)}
          typeEmergency
          comment={3}
          read={5}
          title="카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건"
          writer="홍길동"
          date="2021-08-03 12:42:32"
        >
          모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링
          중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처
          가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 모니터링 중 근처 가로수로
          인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
        </Row>
      </main>
    </>
  );
}
