import React from 'react';
import {
  // BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import './App.css';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
import { Cookies } from 'react-cookie';
import { LayoutTopNavigator } from './_layout';
import { Workspace } from './pages/workspace';
import { Device } from './pages/device';

function App(routeProps: RouteComponentProps) {
  const keycloackConfig = {
    url: 'https://auth-172-30-10-101.vurix.kr/auth/',
    realm: 'platform',
    clientId: 'platform',
  };

  const cookies = new Cookies();

  return (
    <SSRKeycloakProvider
      initOptions={{
        onLoad: 'login-required',
      }}
      onEvent={(type, error) => console.log(error)}
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
