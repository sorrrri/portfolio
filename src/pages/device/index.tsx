import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DeviceList } from './components/device-list';
import { DeviceDetail } from './components/device-detail';
import { DeviceAdd } from './components/device-add';

export function Device() {
  return (
    <Switch>
      <Route path="/device" component={DeviceList} exact />
      <Route path="/device/:id" component={DeviceDetail} />
      <Route path="/device-add" component={DeviceAdd} />
      <Redirect push to="/device" />
    </Switch>
  );
}
