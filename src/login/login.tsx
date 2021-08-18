import React, { useEffect, useState } from 'react';
import './login.css';
import { RouteComponentProps } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { fetchRolesAndProfile } from '../_store/slice/login-user';
import * as toast from '../_store/slice/toast';
import gisServer from '../_api/gis-backend';

export function Login({ history }: RouteComponentProps) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('loginTime');
  }, []);

  const onClickLogin = async () => {
    if (username.trim() === '') {
      dispatch(toast.error({ message: '아이디를 입력해주세요.', title: '필수 입력 항목 누락' }));
      return;
    }

    if (password.trim() === '') {
      dispatch(toast.error({ message: '비밀번호를 입력해주세요.', title: '필수 입력 항목 누락' }));
      return;
    }

    const loginPayload = {
      id: username,
      pwd: password,
    };

    const token = await gisServer.signin(loginPayload).then((payload) => {
      if (!payload) {
        dispatch(toast.error({ message: '서버로부터 응답이 없습니다.' }));
      } else if (payload.response?.error) {
        dispatch(toast.error({ message: payload.response.error, title: '로그인 실패' }));
      } else if (payload.code && payload.code === 250) {
        dispatch(
          toast.error({
            message: '누락된 필수 입력 항목이 있습니다.',
            title: '로그인 실패',
          })
        );
      } else if (payload.response?.access_token) {
        return {
          accessToken: `bearer ${payload.response.access_token}`,
          refreshToken: payload.response.refresh_token,
        };
      }

      return undefined;
    });

    if (token) {
      window.localStorage.setItem('token', token.accessToken);
      window.localStorage.setItem('refreshToken', token.refreshToken);
      window.localStorage.setItem('loginTime', moment().format());
      dispatch(fetchRolesAndProfile());
      history.push('/cctv');
    }
  };

  return (
    <main className="login dark-theme">
      <h2>스마트시티 통합플랫폼</h2>
      <section className="inputs">
        <div className="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
            <path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" />
          </svg>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </section>
      <section className="main-buttons">
        <button className="btn-signin" type="button" onClick={onClickLogin}>
          로그인
        </button>
      </section>
      {/* <section className="buttons">
        <button type="button" onClick={() => history.push('/find-account')}>
          아이디/비밀번호 찾기
        </button>
      </section> */}
    </main>
  );
}
