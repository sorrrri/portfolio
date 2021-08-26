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
import { DeviceAdd } from './pages/device/components/device-add';
import { WorkspaceAdd } from './pages/workspace/components/workspace-add';

function App(routeProps: RouteComponentProps) {
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
