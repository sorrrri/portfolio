import React, { useEffect } from 'react';
import {
  // BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import './App.css';
import { LayoutBottomTabBar } from './_layout';
import { Login } from './login/login';
import { FindAccount } from './login/find-account';
import {
  CCTV,
  FeatureDetail,
  ManageDisability,
  ManageAsset,
  ManageTask,
  ManageCompaint,
  Notice,
  Setting,
  ChangePwd,
  Profile,
} from './content';
import gisServer from './_api/gis-backend';
import * as toast from './_store/slice/toast';

function App(routeProps: RouteComponentProps) {
  const dispatch = useDispatch();
  let sessionCheckInterval: ReturnType<typeof setInterval>;

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const ivh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${ivh}px`);
    });

    sessionCheck();
    sessionCheckInterval = setInterval(sessionCheck, 10 * 1000);

    return () => {
      clearInterval(sessionCheckInterval);
    };
  }, []);

  async function sessionCheck() {
    const { history } = routeProps;
    const { pathname } = history.location;

    if (pathname === '/login' || pathname === '/find-account') {
      return;
    }

    const token = window.localStorage.getItem('token');
    const refreshToken = window.localStorage.getItem('refreshToken');
    const loginTimeStr = window.localStorage.getItem('loginTime');

    if (!token || !refreshToken) {
      history.replace('/login');
    } else if (loginTimeStr) {
      const loginTime = moment(loginTimeStr);
      const duration = moment.duration(moment().diff(loginTime)).asMinutes();

      if (duration > 9) {
        history.replace('/login');
      } else if (duration > 5) {
        const newToken = await gisServer
          .refreshToken({ refresh_token: refreshToken })
          .then((payload) => {
            if (!payload) {
              dispatch(
                toast.error({ message: '서버로부터 응답이 없습니다.', title: '세션갱신 실패' })
              );
            } else if (payload?.response?.error) {
              dispatch(toast.error({ message: payload.response.error, title: '세션갱신 실패' }));
            } else if (payload.response?.access_token) {
              return `bearer ${payload.response.access_token}`;
            }

            return undefined;
          })
          .catch((error) => {
            dispatch(toast.error({ message: error, title: '세션갱신 실패' }));
          });

        if (newToken) {
          window.localStorage.setItem('token', newToken);
          window.localStorage.setItem('loginTime', moment().format());
        } else {
          history.replace('/login');
        }
      }
    }
  }

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/find-account" component={FindAccount} />
      <Route path="*">
        <LayoutBottomTabBar {...routeProps}>
          <Switch>
            <Route path="/cctv" component={CCTV} exact />
            <Route path="/cctv/:id" component={FeatureDetail} />
            <Route path="/manage-disability" component={ManageDisability} />
            <Route path="/manage-asset" component={ManageAsset} />
            <Route path="/manage-task" component={ManageTask} />
            <Route path="/manage-complaint" component={ManageCompaint} />
            <Route path="/notice" component={Notice} />
            <Route path="/setting" component={Setting} />
            <Route path="/change-pwd" component={ChangePwd} />
            <Route path="/profile" component={Profile} />
            <Redirect push to="/login" />
          </Switch>
        </LayoutBottomTabBar>
      </Route>
    </Switch>
  );
}

export default App;
