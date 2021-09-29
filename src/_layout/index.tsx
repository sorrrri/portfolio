/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
import React, { useEffect } from 'react';
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

  useEffect(() => {
    const container = document.querySelector('.container') as HTMLDivElement;
    const main = document.querySelector('main') as HTMLDivElement;
    const mapPage = document.querySelector('.equipments') as HTMLDivElement;

    if (main) {
      if (!mapPage) {
        main.addEventListener('scroll', () => {
          if (main.scrollTop > 50) {
            container.classList.add('scroll');
          } else {
            container.classList.remove('scroll');
          }
        });
      }
    }
  });

  return (
    <>
      <TopNavigatorHeader {...props} />
      {props.children}
    </>
  );
}
