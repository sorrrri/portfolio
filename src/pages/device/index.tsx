import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { DeviceList } from './components/device-list';
import { DeviceDetail } from './components/device-detail';

export function Device(routeProps: RouteComponentProps) {
  return (
    <Switch>
      <Route path="/device" component={DeviceList} exact />
      <Route path="/device/:id" component={DeviceDetail} />
      <Redirect push to="/workspace" />
    </Switch>
  );
}
