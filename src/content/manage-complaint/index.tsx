import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import { Implementing } from '../../_component/implementing';

export function ManageCompaint() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '민원관리',
        type: 'menu&search',
        onClickSearch,
      })
    );
  }, []);

  const onClickSearch = () => {
    console.log('onClickSearch from complaint');
  };

  return (
    <>
      <Implementing />
      {/* <main className="content">민원관리</main> */}
    </>
  );
}
