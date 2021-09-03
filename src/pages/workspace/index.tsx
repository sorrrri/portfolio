import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { WorkspaceList } from './workspace-list';
import { WorkspaceDetail } from './workspace-detail';
import { WorkspaceAdd } from './workspace-add';

export function Workspace() {
  return (
    <Switch>
      <Route path="/workspace" component={WorkspaceList} exact />
      <Route path="/workspace/:id" component={WorkspaceDetail} />
      <Route path="/workspace-add" component={WorkspaceAdd} />
      <Redirect push to="/workspace" />
    </Switch>
  );
}
