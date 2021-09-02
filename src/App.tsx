/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
import React from 'react';
import {
  // BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import './App.css';
import { LayoutTopNavigator } from './_layout';
import { Workspace } from './pages/workspace';
import { Device } from './pages/device';
import { DeviceAdd } from './pages/device/device-add';
import { WorkspaceAdd } from './pages/workspace/components/workspace-add';

function App(routeProps: RouteComponentProps) {
  // 기기 높이 맞추기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <Route path="*">
      <LayoutTopNavigator {...routeProps}>
        <Switch>
          <Route path="/workspace" component={Workspace} />
          <Route path="/workspace-add" component={WorkspaceAdd} />
          <Route path="/device" component={Device} />
          <Route path="/device-add" component={DeviceAdd} />
          <Redirect push to="/workspace" />
        </Switch>
      </LayoutTopNavigator>
    </Route>
  );
}

export default App;
