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
import { LOGIN_PATH, SIGNUP_PATH, DASHBOARD_PATH } from '../../common/routing';
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

  static INITIAL_STATE = {
    username: '',
    password: '',
    isUIStudent: true,
  };

  constructor() {
    super();
    this.state = { ...Login.INITIAL_STATE };
  }

  componentDidMount() {
    if (this.props.auth.login) {
      this.props.history.push(DASHBOARD_PATH);
    }
    const receiveSSOLoginCredentials = e => {
      const allowedOrigin = 'http://ristek.cs.ui.ac.id';
      const allowedLocalOrigin = 'http://localhost:8000';
      if (e.origin === allowedOrigin || e.origin === allowedLocalOrigin) {
        console.log(e.data);
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
        <img
          alt="squares"
          src={squares}
          onClick={() => this.setState({ ...Login.INITIAL_STATE })}
        />
        <CenterForm isActive={!isUIStudent}>
          <InputIcon
            type="tel"
            label="Username"
            name="username"
            placeHolder="username"
            value={username}
            onChange={e => this.onInputChange(e)}
            validationState={this.props.auth.error ? 'error' : null}
          />
          <InputIcon
            help={this.props.auth.error ? 'Username atau password salah' : null}
            label="Password"
            name="password"
            onChange={e => this.onInputChange(e)}
            placeHolder="password"
            type="password"
            validationState={this.props.auth.error ? 'error' : null}
            value={password}
          />
          <Button disabled={this.props.auth.loading} onClick={e => this.login(e)}>
            {!this.props.auth.loading && 'Sign in'}
            {this.props.auth.loading && <LoadingButtonComponent>Loading</LoadingButtonComponent>}
          </Button>
        </CenterForm>
        <ButtonSSO onClick={() => Login.openLoginSSO()} isActive={isUIStudent} />
        <EnforceSSOToggler onClick={() => this.toggleUIStudent()}>
          {isUIStudent && <span>Not a student? manually sign in here.</span>}
          {!isUIStudent && <span>{`Doesn't have account yet? Sign up.`}</span>}
        </EnforceSSOToggler>
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
  font-family: ${props => props.theme.font.jaapokki};
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
  ${media('mobile')} {
    width: 100%;
  }
`;

const Body = styled.div`
  align-items: center;
  align-self: center;
  color: ${props => props.theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 0.25rem black;
  border-radius: 0.25rem;
  padding: 2rem 4rem;
  position: relative;
  margin-top: 2rem;
  img {
    position: absolute;
    top: -2rem;
    width: 3rem;
    object-fit: scale-down;
    background-color: ${props => props.theme.color.white};
    z-index: 1;
    cursor: pointer;
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
