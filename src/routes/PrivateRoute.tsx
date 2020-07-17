import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const location = useLocation();
  console.log(location);

  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
