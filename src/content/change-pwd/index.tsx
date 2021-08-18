import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';

export function ChangePwd() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '비밀번호변경',
        type: 'back',
      })
    );
  }, []);

  return (
    <>
      <main className="content">비밀번호변경</main>
    </>
  );
}
