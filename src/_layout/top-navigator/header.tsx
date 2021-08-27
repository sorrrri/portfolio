/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteAndChildrenProps } from '../../@jms-react/types/aux-props';
import { ReducerType } from '../../_store';
import { HeaderOption } from '../../_store/slice/header-option';

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
      <aside className={`global-navigation-menu ${menuDisplay ? 'active' : ''}`}>
        <div className="profile">
          <div className="image">
            <img src="assets/images/profile.jpg" alt="" />
          </div>
          <ul className="user-information">
            <li className="user-id">otter0104</li>
            <li className="user-type">최고관리자</li>
          </ul>
        </div>
        <nav className="menu">
          <div className="menu-workspace" onClick={() => history.push('/workspace')}>
            <i className="fad fa-mail-bulk" />
            <span>Workspace</span>
          </div>
          <div className="menu-equipments" onClick={() => history.push('/device')}>
            <i className="fad fa-cctv" />
            <span>장비현황</span>
          </div>
        </nav>
        <nav className="menu menu-settings">
          <div className="menu-privacy">
            <i className="fad fa-file-user" />
            <span>개인정보처리방침</span>
          </div>
          <div className="menu-terms">
            <i className="fad fa-file-invoice" />
            <span>약관</span>
          </div>
          <div className="menu-logout">
            <i className="fad fa-sign-out" />
            <span>로그아웃</span>
          </div>
        </nav>
      </aside>
    </>
  ) : null;
}
