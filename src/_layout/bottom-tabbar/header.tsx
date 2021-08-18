/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../_store';
import { HeaderOption, showMenu, hideMenu } from '../../_store/slice/header-option';
import { User, fetchRolesAndProfile } from '../../_store/slice/login-user';

export default function Header({ history }: RouteComponentProps) {
  const headerOption = useSelector<ReducerType, HeaderOption>((state) => state.headerOption);
  const loginUser = useSelector<ReducerType, User>((state) => state.loginUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRolesAndProfile());
  }, []);

  const isShowMenu = () => {
    return headerOption.type === 'menu' || headerOption.type === 'menu&search';
  };

  const onClickMenu = () => {
    dispatch(showMenu());
  };

  const onClickOverlay = () => {
    dispatch(hideMenu());
  };

  const onClickGoPage = (uri: string) => {
    history.push(uri);
    dispatch(hideMenu());
  };

  const onClickGoBack = () => {
    history.goBack();
  };

  const onClickSearch = () => {
    headerOption.onClickSearch();
  };

  return (
    <>
      <div
        className={`overlay ${headerOption.menuVisible ? 'active' : ''}`}
        onClick={onClickOverlay}
      />
      <aside className={`global-navigation-menu ${headerOption.menuVisible ? 'active' : ''}`}>
        <div className="profile">
          <div className="image">
            <img src="assets/images/no_image.png" alt="" />
          </div>
          <ul className="user-information">
            <li className="user-name">{loginUser.profile.user_name ?? ''}</li>
            <li className="user-type">{loginUser.profile.Group?.group_name ?? ''}</li>
          </ul>
        </div>
        <ul className="menu">
          {/* <li>
            <div className="main-menu" onClick={() => onClickGoPage('/notice')}>
              <span>공지사항</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li> */}
          <li>
            <div className="main-menu" onClick={() => onClickGoPage('/cctv')}>
              <span>CCTV</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
          {/* <li>
            <div className="main-menu" onClick={() => onClickGoPage('/manage-disability')}>
              <span>장애관리</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="main-menu" onClick={() => onClickGoPage('/manage-asset')}>
              <span>자산관리</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="main-menu" onClick={() => onClickGoPage('/manage-task')}>
              <span>업무관리</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="main-menu" onClick={() => onClickGoPage('/manage-complaint')}>
              <span>민원관리</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li> */}
        </ul>
        <ul className="menu menu-settings">
          {/* <li>
            <div className="main-menu" onClick={() => onClickGoPage('/setting')}>
              <span>환경설정</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="main-menu" onClick={() => onClickGoPage('/change-pwd')}>
              <span>비밀번호변경</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="main-menu" onClick={() => onClickGoPage('/profile')}>
              <span>개인정보수정</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li> */}
          <li>
            <div
              className="main-menu"
              onClick={() => {
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('refreshToken');
                window.localStorage.removeItem('loginTime');
                onClickGoPage('/login');
              }}
            >
              <span>로그아웃</span>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </div>
          </li>
        </ul>
      </aside>
      {headerOption.visible && (
        <header>
          {headerOption.type === 'back' && (
            <button className="btn-back" type="button" onClick={onClickGoBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
              </svg>
            </button>
          )}
          {isShowMenu() && (
            <button className="toggle-menu" type="button" onClick={onClickMenu}>
              <svg viewBox="0 0 100 100" width="80">
                <path d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                <path d="m 30,50 h 40" />
                <path d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
              </svg>
            </button>
          )}
          <div className="title">{headerOption.title}</div>
          {headerOption.type === 'menu&search' && (
            <button className="btn-search" type="button" onClick={onClickSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          )}
        </header>
      )}
    </>
  );
}
