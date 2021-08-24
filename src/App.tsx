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

function App(routeProps: RouteComponentProps) {
  return (
    <Route path="*">
      <LayoutTopNavigator {...routeProps}>
        <Switch>
          <Route path="/workspace" component={Workspace} />
          <Route path="/device" component={Device} />
          <Redirect push to="/workspace" />
        </Switch>
      </LayoutTopNavigator>
    </Route>
  );
}

export default App;
