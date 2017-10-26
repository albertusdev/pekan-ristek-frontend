import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import squares from '../../assets/squares.png';
import ButtonSSO from '../../components/ButtonSSO';
import Card from '../../components/Card';
import InputIcon from '../../components/InputIcon';
import Footer from '../../components/Footer';
import { ssoLOGIN } from '../../common/apiUrl';
import { login, setAuth } from '../../redux_modules/auth';
import { media } from '../../common/theme';
import { SIGNUP_PATH, DASHBOARD_PATH } from '../../common/routing';
import LoadingButtonComponent from '../../components/LoadingButtonComponent';

@connect(
  state => ({
    auth: state.auth,
    router: state.router,
  }),
  { login, setAuth }
)
class Login extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    setAuth: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  static openLoginSSO() {
    const ssoWindow = window.open(ssoLOGIN, 'SSO UI', 'width=600, height=600');
    const interval = setInterval(() => {
      if (!ssoWindow.closed) ssoWindow.postMessage('open window please', '*');
      else clearInterval(interval);
    }, 100);
  }

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isUIStudent: true,
    };
  }

  componentDidMount() {
    if (this.props.auth.login) {
      this.props.history.push(DASHBOARD_PATH);
    }
    const receiveSSOLoginCredentials = e => {
      const allowedOrigin = 'http://ristek.cs.ui.ac.id';
      const allowedLocalOrigin = 'http://localhost:8000';
      if (e.origin === allowedOrigin || e.origin === allowedLocalOrigin) {
        this.props.setAuth(e.data);
        this.props.history.push(DASHBOARD_PATH);
      }
    };
    window.addEventListener('message', receiveSSOLoginCredentials, false);
  }

  async login(event) {
    const { username, password } = this.state;
    event.preventDefault();
    await this.props.login({ username, password });
    if (this.props.auth.login) {
      this.props.history.push(DASHBOARD_PATH);
    }
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  toggleUIStudent() {
    if (!this.state.isUIStudent) {
      this.props.history.push(SIGNUP_PATH);
    }
    this.setState({ isUIStudent: !this.state.isUIStudent });
  }

  render() {
    const { username, password, isUIStudent } = this.state;
    return (
      <Body>
        <Card width="50vw" mobileWidth="100%">
          <div className="right">
            <PageTitle>Sign in</PageTitle>
            <CenterForm isActive={!isUIStudent}>
              <InputIcon
                type="tel"
                name="username"
                glyph="user"
                placeHolder="username"
                value={username}
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                type="password"
                name="password"
                glyph="lock"
                value={password}
                placeHolder="password"
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
                help={this.props.auth.error ? 'Username atau password salah' : null}
              />
              <Button disabled={this.props.auth.loading} onClick={e => this.login(e)}>
                {!this.props.auth.loading && 'Sign in'}
                {this.props.auth.loading && <LoadingButtonComponent>Loading</LoadingButtonComponent>}
              </Button>
            </CenterForm>
            <ButtonSSO onClick={() => Login.openLoginSSO()} isActive={isUIStudent} />
            <EnforceSSOToggler onClick={() => this.toggleUIStudent()}>
              {/*isUIStudent && <span>Not an UI student? Sign in manually.</span>*/}
              {/*!isUIStudent &&
                <span>Doesn't have account yet? Sign up.</span>*/}
            </EnforceSSOToggler>
          </div>
        </Card>
      </Body>
    );
  }
}

export default Login;

const Button = styled.button`
  background: ${props => props.theme.color.orange};
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.color.black};
  display: flex;
  margin: 1rem 0;
  padding: 1rem 0;
  width: 50%;
  text-decoration: none;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.black};
  ${Card} {
    display: flex;
    justify-content: center;
    .left,
    .right {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: center;
      justify-content: center;
      img {
        height: 4rem;
      }
      margin: 1rem;
    }
    ${media('mobile')} {
      .left {
        display: none;
      }
      .right: {
        width: 100%;
      }
    }
  }
`;
const CenterForm = styled(({ isActive, ...props }) => <Form {...props} />)`
  display: flex;
  display: ${props => !props.isActive && 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 1s;
  .form-group {
    margin: 0;
  }
`;

const EnforceSSOToggler = styled.button`
  text-decoration: underline;
  border: none;
  background-color: ${props => props.theme.color.white};
  &:focus {
    outline: none;
  }
  font-family: ${props => props.theme.font.jaapokki};
`;

const PageTitle = styled.div`
  color: ${props => props.theme.color.yellowPR};
  font-family: ${props => props.theme.font.jaapokki};
  font-size: 2.5rem;
`;

const PekanRistek = styled.div`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.font.pekanRistek};
  font-size: 2.5rem;
  img {
    height: 3rem;
    margin-right: 1rem;
  }
`;
