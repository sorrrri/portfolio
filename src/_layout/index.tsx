/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
import React from 'react';
import TopNavigatorHeader from './top-navigator/header';
import { RouteAndChildrenProps } from '../@jms-react/types/aux-props';
import { BottomStickyMenu } from './bottom-sticky-menu';

export function LayoutTopNavigator(props: RouteAndChildrenProps) {
  // 기기 높이 맞추기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <>
      <TopNavigatorHeader {...props} />
      {props.children}
      <BottomStickyMenu />
    </>
  );
}
