import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DeviceList } from './device-list';
import { DeviceDetail } from './device-detail';
import { DeviceAdd } from './device-add';
import { DeviceSearch } from './device-search';

export function Device() {
  return (
    <Switch>
      <Route path="/device" component={DeviceList} exact />
      <Route path="/device/:id" component={DeviceDetail} />
      <Route path="/device-add" component={DeviceAdd} />
      <Route path="/device-search" component={DeviceSearch} />
      <Redirect push to="/device" />
    </Switch>
  );
}
