import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';
import dummy from '../../../workspace-test/workspace-list-test.json';

export function WorkspaceList(props: any) {
  const dispatch = useDispatch();

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
  });

  const onClickAddWork = () => {
    alert('on click add work');
  };

  const onClickAddFault = () => {
    alert('on click add fault');
  };

  const onClickSearch = () => {
    alert('on click search');
  };

  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  return (
    <div>
      <h1>this is workspace list</h1>
      <ul>
        {dummy.response.results.map((data: any) => (
          <li key={data.uuid} onClick={() => onClickItem(data.uuid)}>
            {data.registrant.name}
            <p>{data.reg_date}</p>
            <p>{data.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
