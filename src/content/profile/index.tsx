import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';

export function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '개인정보수정',
        type: 'back',
      })
    );
  }, []);

  return (
    <>
      <main className="content">개인정보수정</main>
    </>
  );
}
