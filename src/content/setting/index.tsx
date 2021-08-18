import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';

export function Setting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '환경설정',
        type: 'back',
      })
    );
  }, []);

  return (
    <>
      <main className="content">환경설정</main>
    </>
  );
}
