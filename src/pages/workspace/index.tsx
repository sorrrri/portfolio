import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { WorkspaceList } from './components/workspace-list';
import { WorkspaceDetail } from './components/workspace-detail';

export function Workspace(routeProps: RouteComponentProps) {
  return (
    <Switch>
      <Route path="/workspace" component={WorkspaceList} exact />
      <Route path="/workspace/:id" component={WorkspaceDetail} />
      <Redirect push to="/workspace" />
    </Switch>
  );
}
