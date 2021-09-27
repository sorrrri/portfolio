/* eslint-disable react/prop-types */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/ssr';

export const GlobalNavigationMenu = (props: any) => {
  const { toggle } = props;
  const history = useHistory();
  const { keycloak } = useKeycloak();

  const goGuide = () => {
    {
      window.open('https://portal-172-30-10-101.vurix.kr/terms/personal_guide.pdf', '_blank');
    }
  };

  const goPrivacy = () => {
    {
      window.open('https://portal-172-30-10-101.vurix.kr/terms/privacy_policy.pdf', '_blank');
    }
  };

  const goTerms = () => {
    {
      window.open('https://portal-172-30-10-101.vurix.kr/terms/terms_service.pdf', '_blank');
    }
  };

  const onClickLogout = async () => {
    keycloak?.onAuthLogout!();
  };

  return (
    <aside className={`global-navigation-menu ${toggle ? 'active' : ''}`}>
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
        <div className="menu-privacy" onClick={goGuide}>
          <i className="fad fa-book" />
          <span>개인정보 수집 및 이용안내</span>
        </div>
        <div className="menu-privacy" onClick={goPrivacy}>
          <i className="fad fa-file-user" />
          <span>개인정보처리방침</span>
        </div>
        <div className="menu-terms" onClick={goTerms}>
          <i className="fad fa-file-invoice" />
          <span>약관</span>
        </div>
        <div className="menu-logout" onClick={onClickLogout}>
          <i className="fad fa-sign-out" />
          <span>로그아웃</span>
        </div>
      </nav>
    </aside>
  );
};
