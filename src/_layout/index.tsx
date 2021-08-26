/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TopNavigatorHeader from './top-navigator/header';
import { RouteAndChildrenProps } from '../@jms-react/types/aux-props';
import { BottomStickyMenu } from './bottom-sticky-menu';

export function LayoutTopNavigator(props: RouteAndChildrenProps) {
  return (
    <>
      <TopNavigatorHeader {...props} />
      {props.children}
      <BottomStickyMenu />
    </>
  );
}
