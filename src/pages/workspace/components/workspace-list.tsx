import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';
import api from '../../../_api/backend';

export function WorkspaceList(props: any) {
  const dispatch = useDispatch();
  const [workspaceList, setWorkspaceList] = useState<any[]>([]);

  useEffect(() => {
    dispatch(
      showHeader({
        title: 'Workspace',
        leftContextType: 'menu',
        rightContext: () => (
          <AddSearchWork
            onClickAddWork={onClickAddWork}
            onClickAddFault={onClickAddFault}
            onClickSearch={onClickSearch}
          />
        ),
      })
    );
    fetchWorkspace();
  }, []);

  const fetchWorkspace = () => {
    api.getWorkspace().then((workspace: any) => {
      const { responseTime } = workspace;
      setWorkspaceList(responseTime);
      // const { code, response } = workspace;
      // if (code === 200 && response && Array.isArray(response.results)) {
      //   setWorkspaceList(response.results);
      // }
    });
  };

  console.log(workspaceList);

  const onClickAddWork = () => {
    alert('on click add work');
  };

  const onClickAddFault = () => {
    alert('on click add fault');
  };

  const onClickSearch = () => {
    alert('on click add search');
  };

  const onClickItem = (workId: any) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  return (
    <div>
      <h1>this is workspace list</h1>
      <ul>
        <li onClick={() => onClickItem(workspaceList)}>{workspaceList}</li>
        {/* {workspaceList.map((workspace) => (
          <li key={workspace.work_uuid} onClick={() => onClickItem(workspace.work_uuid)}>
            {workspace.title}
          </li>
        ))} */}
      </ul>
    </div>
  );
}
