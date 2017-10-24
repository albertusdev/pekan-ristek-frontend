import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import DashboardEditProfile from './containers/Dashboard/EditProfile';
import DashboardEditPassword from './containers/Dashboard/EditPassword';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotFound from './components/NotFound';
import AuthenticatedRoute from './common/auth';
import Navigation from './components/Navigation';
import {
  DASHBOARD_PATH,
  DASHBOARD_EDIT_PASSWORD_PATH,
  DASHBOARD_EDIT_PROFILE_PATH,
  LOGIN_PATH,
  LOGOUT_PATH,
  SIGNUP_PATH,
} from './common/routing';
import { media } from './common/theme';

// How do you create a Master Detail page? (v4)
// https://github.com/ReactTraining/react-router/issues/3928

const AUTHENTICATED_ROUTES = [
  { path: DASHBOARD_PATH, component: Dashboard, exact: true },
  { path: DASHBOARD_EDIT_PROFILE_PATH, component: DashboardEditProfile },
  { path: DASHBOARD_EDIT_PASSWORD_PATH, component: DashboardEditPassword },
];

const UNAUTHENTICATED_ROUTES = [
  { path: '/', component: Home, exact: true },
  { path: SIGNUP_PATH, component: Signup, exact: true },
  { path: LOGIN_PATH, component: Login },
];

export default (
  <Switch>
    {AUTHENTICATED_ROUTES.map(({ path, exact, component: Comp }) =>
      <Route
        key="static-key"
        path={path}
        exact={exact}
        render={props =>
          <AuthenticatedRoute>
            <Wrapper>
              <Container>
                <Navigation history={props.history} />
                <Comp {...props} />
              </Container>
            </Wrapper>
          </AuthenticatedRoute>}
      />
    )}
    {UNAUTHENTICATED_ROUTES.map(({ path, exact, component: Comp, logout }) =>
      <Route
        key="static-key"
        path={path}
        exact={exact}
        render={props =>
          <AuthenticatedRoute authenticated={false}>
            <Wrapper>
              <Container>
                <Navigation history={props.history}/>
                <Comp {...props} />
              </Container>
            </Wrapper>
          </AuthenticatedRoute>}
      />
    )}
    <Route path={LOGOUT_PATH} exact render={() => <AuthenticatedRoute logout />} />
    <Route component={NotFound} />
  </Switch>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  ${media('mobile')} {
    width: 100%;
  }
`;
