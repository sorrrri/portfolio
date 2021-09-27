/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-redeclare */
import React, { useEffect, useState } from 'react';
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
import server from './_api/backend';

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

  const [initialized, setInitialized] = useState<boolean>(false);

  async function init() {
    await server
      .login()
      .then(() => {
        window.localStorage.setItem('initialized', 'Y');
        setInitialized(true);
      })
      .catch(() => {
        window.localStorage.removeItem('initialized');
        setInitialized(false);
      });
  }

  return (
    <SSRKeycloakProvider
      initOptions={{
        onLoad: 'login-required',
      }}
      onEvent={async (type, message) => {
        console.log('[Keycloak]', type, message);
        if (type === 'onReady') {
          init();
        }
      }}
      keycloakConfig={keycloackConfig}
      persistor={SSRCookies(cookies)}
    >
      {initialized && (
        <Route path="*">
          <ScrollToTop>
            <LayoutTopNavigator {...routeProps}>
              <Switch>
                <Route path="/workspace" component={Workspace} />
                <Route path="/workspace-add" component={WorkspaceAdd} />
                <Route path="/device" component={Device} />
                <Route path="/device-add" component={DeviceAdd} />
                <Redirect push to="/workspace" />
              </Switch>
            </LayoutTopNavigator>
          </ScrollToTop>
        </Route>
      )}
      {!initialized && <span className="loader" />}
    </SSRKeycloakProvider>
  );
}

export default App;
