/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import TopNavigatorHeader from './top-navigator/header';
import { RouteAndChildrenProps } from '../@jms-react/types/aux-props';
import { BottomStickyMenu } from './bottom-sticky-menu';

export function LayoutTopNavigator(props: RouteAndChildrenProps) {
  const [isToggleOn, setToggleOn] = useState(false);

  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };

  return (
    <>
      <TopNavigatorHeader {...props} />
      {props.children}
      <BottomStickyMenu toggle={toggleSearchArea} />
    </>
  );
}
