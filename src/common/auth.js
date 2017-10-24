import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reloadAuth, logout as authLogout } from '../redux_modules/auth';
import { LOGIN_PATH } from './routing';
import { ssoLOGOUT } from './apiUrl';

@withRouter
@connect(
  state => ({
    auth: state.auth,
  }),
  { reloadAuth, authLogout }
)
export default class AuthenticatedRoute extends React.Component {
  static defaultProps = {
    authenticated: true,
    logout: false,
  };

  static propTypes = {
    // Optional Props (passed from making JSX)
    logout: PropTypes.bool,
    authenticated: PropTypes.bool,
    children: PropTypes.node.isRequired,
    // Props obtained from Structure
    history: PropTypes.object.isRequired,
    // Redux State
    auth: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      login: PropTypes.bool.isRequired,
      dry: PropTypes.bool.isRequired,
    }).isRequired,
    // Redux Thunk
    reloadAuth: PropTypes.func.isRequired,
    authLogout: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    if (this.props.auth.dry) {
      await this.props.reloadAuth();
    }
  }

  render() {
    const { auth, authenticated, children, logout } = this.props;
    if (logout) {
      const sso = window.open(ssoLOGOUT, 'SSO UI', 'width=600, height=600');
      setTimeout(() => {
        sso.postMessage('close window please', '*');
        sso.close();
        this.props.authLogout();
        this.props.history.push(LOGIN_PATH);
      }, 2000);
      return null;
    }
    if (authenticated && !auth.dry && !auth.loading && !auth.login) {
      this.props.history.push(LOGIN_PATH);
      return null;
    }
    return (
      <div>
        {children}
      </div>
    );
  }
}
