import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';

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
        <li onClick={() => onClickItem(1)}>item1</li>
        <li onClick={() => onClickItem(2)}>item2</li>
        <li onClick={() => onClickItem(3)}>item3</li>
      </ul>
    </div>
  );
}
