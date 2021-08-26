import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { WorkspaceList } from './components/workspace-list';
import { WorkspaceDetail } from './components/workspace-detail';
import { WorkspaceAdd } from './components/workspace-add';

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
