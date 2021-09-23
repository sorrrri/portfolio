import { ReactChild, ReactChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type RouteAndChildrenProps = RouteComponentProps & {
  children: ReactChild | ReactChildren;
};

export type ChildrenProps = {
  children: ReactChild | ReactChildren;
};
