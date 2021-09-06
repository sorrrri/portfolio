/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteAndChildrenProps } from '../../@jms-react/types/aux-props';
import { ReducerType } from '../../_store';
import { HeaderOption } from '../../_store/slice/header-option';
import { GlobalNavigationMenu } from '../global-navigation-menu';

export default function TopNavigatorHeader(props: RouteAndChildrenProps) {
  const headerOption = useSelector<ReducerType, HeaderOption>((state) => state.headerOption);
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
  const { history } = props;

  // 페이지 이동 이벤트 리스너
  useEffect(() => {
    // 왼쪽 메뉴를 숨김
    setMenuDisplay(false);
  }, [history.location]);

  const toggleMenu = () => {
    setMenuDisplay(!menuDisplay);
  };

  function LeftContext() {
    const { leftContextType } = headerOption;
    if (leftContextType === 'menu') {
      return (
        <button className="toggle-menu" type="button" onClick={toggleMenu}>
          <i className="fad fa-bars" />
        </button>
      );
    }

    if (leftContextType === 'back') {
      return (
        <button type="button" onClick={() => history.goBack()}>
          <i className="fad fa-arrow-left" />
        </button>
      );
    }

    return null;
  }

  function RightContext() {
    return headerOption.rightContext();
  }

  return headerOption.visible ? (
    <>
      <div className={`overlay ${menuDisplay ? 'active' : ''}`} onClick={toggleMenu} />
      <header>
        <div className="row">
          {/* Left context area */}
          <LeftContext />

          {/* Title */}
          <div className="title">{headerOption.title}</div>

          {/* Right context area */}
          <RightContext />
        </div>
      </header>
      {/* 좌측메뉴 */}
      <GlobalNavigationMenu toggle={menuDisplay} />
    </>
  ) : null;
}
