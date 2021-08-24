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
        <button type="button" onClick={toggleMenu}>
          MENU
        </button>
      );
    }

    if (leftContextType === 'back') {
      return (
        <button type="button" onClick={() => history.goBack()}>
          BACK
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
      <div>
        {/* Left context area */}
        <div>
          <LeftContext />
        </div>

        {/* Title */}
        <h1>{headerOption.title}</h1>

        {/* Right context area */}
        <div>
          <RightContext />
        </div>
      </div>

      {/* Menu overlay */}
      <div className={`overlay ${menuDisplay ? 'active' : ''}`}>
        <div style={{ width: '50%', height: '100%', backgroundColor: 'white' }}>
          <h3>this is menu</h3>
          <ul>
            <li onClick={() => history.push('/workspace')}>* workspace</li>
            <li onClick={() => history.push('/device')}>* device</li>
          </ul>
        </div>
      </div>

      <hr />
    </>
  ) : null;
}
