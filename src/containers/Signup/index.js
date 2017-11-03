import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import squares from '../../assets/squares.png';
import Card from '../../components/Card';
import InputIcon from '../../components/InputIcon';
import { signup } from '../../redux_modules/auth';
import { media } from '../../common/theme';
import { LOGIN_PATH, DASHBOARD_PATH } from '../../common/routing';
import LoadingButtonComponent from '../../components/LoadingButtonComponent';

@connect(
  state => ({
    auth: state.auth,
    router: state.router,
  }),
  { signup }
)
class Signup extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    signup: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      firstName: '',
      email: '',
      lastName: '',
      institution: '',
      password: '',
      phone: '',
      rePassword: '',
      username: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.auth.login && nextProps.auth.login) {
      this.props.history.push(DASHBOARD_PATH);
    }
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generateHelpMessage() {
    const { rePassword, password } = this.state;
    if (this.props.auth && this.props.auth.error) {
      if (rePassword && rePassword !== password) return "Password doesn't match";
      return "Data isn't complete or username already exists";
    }
    return null;
  }

  generateLastValidationState() {
    const { rePassword, password } = this.state;
    if (this.props.auth && this.props.auth.error) return 'error';
    if (rePassword && rePassword === password) return 'success';
    return null;
  }

  async signup() {
    const { firstName, email, lastName, institution, password, phone, username } = this.state;
    await this.props.signup({
      first_name: firstName,
      email,
      last_name: lastName,
      institution,
      password,
      phone,
      username,
    });
  }

  render() {
    const {
      firstName,
      email,
      lastName,
      institution,
      password,
      phone,
      rePassword,
      username,
    } = this.state;
    const { loading } = this.props.auth;
    return (
      <Body>
        <img
          alt="squares"
          src={squares}
          onClick={() => this.props.history.push(LOGIN_PATH)}
        />
        <CenterForm>
          <InputIcon
            label="first Name"
            name="firstName"
            onChange={e => this.onInputChange(e)}
            validationState={this.props.auth.error ? 'error' : null}
            value={firstName}
          />
          <InputIcon
            label="Last Name"
            name="lastName"
            onChange={e => this.onInputChange(e)}
            validationState={this.props.auth.error ? 'error' : null}
            value={lastName}
          />
          <InputIcon
            label="Phone"
            name="phone"
            onChange={e => this.onInputChange(e)}
            placeHolder="phone"
            type="tel"
            validationState={this.props.auth.error ? 'error' : null}
            value={phone}
          />
          <InputIcon
            label="Institution"
            name="institution"
            onChange={e => this.onInputChange(e)}
            placeHolder="institution"
            validationState={this.props.auth.error ? 'error' : null}
            value={institution}
          />
          <InputIcon
            label="email"
            name="email"
            onChange={e => this.onInputChange(e)}
            placeHolder="email"
            type="email"
            validationState={this.props.auth.error ? 'error' : null}
            value={email}
          />
          <InputIcon
            label="Username"
            name="username"
            onChange={e => this.onInputChange(e)}
            placeHolder="username"
            validationState={this.props.auth.error ? 'error' : null}
            value={username}
          />
          <InputIcon
            label="Password"
            name="password"
            onChange={e => this.onInputChange(e)}
            type="password"
            validationState={this.props.auth.error ? 'error' : null}
            value={password}
          />
          <InputIcon
            help={this.generateHelpMessage()}
            label="Re-enter Password"
            name="rePassword"
            onChange={e => this.onInputChange(e)}
            type="password"
            validationState={this.generateLastValidationState()}
            value={rePassword}
          />
          <Button primary onClick={e => this.signup(e)} disabled={loading}>
            {!loading && 'Sign Up'}
            {loading && <LoadingButtonComponent />}
          </Button>
        </CenterForm>
      </Body>
    );
  }
}

export default Signup;

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
    background-color: ${props => props.theme.color.white};
    cursor: pointer;
    object-fit: scale-down;
    position: absolute;
    top: -2rem;
    width: 3rem;
    z-index: 1;
  }
`;

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
`;

const CenterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 0.3s;
  .form-group {
    margin: 0;
    padding: 0;
  }
`;
