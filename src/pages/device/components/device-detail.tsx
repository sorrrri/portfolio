import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';

export function DeviceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(
      showHeader({
        title: `장비 상세 정보 #${id}`,
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  }, [id]);

  return (
    <div>
      <h1>this is device detail</h1>
      <div>detail content</div>
    </div>
  );
}
