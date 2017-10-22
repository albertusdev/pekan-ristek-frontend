import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotFound from './components/NotFound';
import AuthenticatedRoute from './common/auth';
import {
  LOGIN_PATH,
  LOGOUT_PATH,
  SIGNUP_PATH,
} from './common/routing';
// How do you create a Master Detail page? (v4)
// https://github.com/ReactTraining/react-router/issues/3928

const dashboardRoutes = [
  { path: '/dashboard', component: Dashboard },
];

export default (
  <Switch>
    {dashboardRoutes.map(({ path, exact, component: Comp }) =>
      <Route
        key="static-key"
        path={path}
        exact={exact}
        render={props =>
          <AuthenticatedRoute>
            <Comp {...props} />
          </AuthenticatedRoute>}
      />
    )}
    <Route
      path='/'
      exact
      render={props =>
        <AuthenticatedRoute authenticated={false}>
          <Home {...props} />
        </AuthenticatedRoute>}
    />
    <Route
      path={LOGIN_PATH}
      exact
      render={props =>
        <AuthenticatedRoute authenticated={false}>
          <Login {...props} />
        </AuthenticatedRoute>}
    />
    <Route
      path={SIGNUP_PATH}
      exact
      render={props =>
        <AuthenticatedRoute authenticated={false}>
          <Signup {...props} />
        </AuthenticatedRoute>}
    />
    <Route path={LOGOUT_PATH} exact render={() => <AuthenticatedRoute logout />} />
    <Route component={NotFound} />
  </Switch>
);
