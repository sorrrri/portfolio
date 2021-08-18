import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { Implementing } from '../../_component/implementing';

export function ManageTask() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '업무관리',
        type: 'menu',
      })
    );
  }, []);

  return (
    <>
      <Implementing />
      {/* <main className="content">업무관리</main> */}
    </>
  );
}
