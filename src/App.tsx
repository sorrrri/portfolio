/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-redeclare */
import React, { useEffect } from 'react';
import {
  // BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import './App.css';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
import { Cookies } from 'react-cookie';
import { LayoutTopNavigator } from './_layout';
import { Workspace } from './pages/workspace';
import { Device } from './pages/device';
import { DeviceAdd } from './pages/device/device-add';
import { WorkspaceAdd } from './pages/workspace/workspace-add';

function functionScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    const container = document.querySelector('.container') as HTMLDivElement;
    const bottomStickyMenu = document.querySelector('.bottom-sticky-menu') as HTMLDivElement;
    container.classList.remove('scroll');
    bottomStickyMenu.classList.remove('active');
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(functionScrollToTop);

function App(routeProps: RouteComponentProps) {
  const keycloackConfig = {
    url: 'https://auth-172-30-10-101.vurix.kr/auth/',
    realm: process.env.REACT_APP_REALM!,
    clientId: process.env.REACT_APP_REALM!,
  };

  const cookies = new Cookies();

  return (
    <SSRKeycloakProvider
      initOptions={{
        onLoad: 'login-required',
      }}
      onEvent={(type, message) => {
        console.log('[Keycloak]', type, message);
      }}
      keycloakConfig={keycloackConfig}
      persistor={SSRCookies(cookies)}
    >
      <Route path="*">
        <LayoutTopNavigator {...routeProps}>
          <Switch>
            <Route path="/workspace" component={Workspace} />
            <Route path="/device" component={Device} />
            <Redirect push to="/workspace" />
          </Switch>
        </LayoutTopNavigator>
      </Route>
    </SSRKeycloakProvider>
  );
}

export default App;
