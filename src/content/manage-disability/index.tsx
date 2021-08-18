import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { Implementing } from '../../_component/implementing';

export function ManageDisability() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장애관리',
        type: 'menu',
      })
    );
  }, []);

  return (
    <>
      <Implementing />
      {/* <main className="content">장애관리</main> */}
    </>
  );
}
