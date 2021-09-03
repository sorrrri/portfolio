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
import { LayoutTopNavigator } from './_layout';
import { Workspace } from './pages/workspace';
import { Device } from './pages/device';
import { DeviceAdd } from './pages/device/device-add';
import { WorkspaceAdd } from './pages/workspace/components/workspace-add';

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
  return (
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
  );
}

export default App;
