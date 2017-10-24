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
import { SIGNUP_PATH, DASHBOARD_PATH } from '../../common/routing';
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
        <Card width="80%" mobileWidth="100%">
          <div className="left">
            <img src={squares} className="squares" alt="square logo" />
            <PekanRistek>Pekan Ristek</PekanRistek>
          </div>
          <div className="right">
            <PageTitle>Sign Up</PageTitle>
            <CenterForm>
              <InputIcon
                name="firstName"
                glyph="text-color"
                label="first Name"
                value={firstName}
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                name="lastName"
                glyph="text-color"
                label="Last Name"
                value={lastName}
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                type="tel"
                name="phone"
                glyph="phone"
                label="Phone"
                placeHolder="phone"
                value={phone}
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                name="institution"
                glyph="book"
                label="Institution"
                value={institution}
                placeHolder="institution"
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                type="email"
                name="email"
                glyph="envelope"
                label="email"
                value={email}
                plcaeHolder="email"
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                name="username"
                glyph="user"
                label="Username"
                value={username}
                placeHolder="username"
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                type="password"
                name="password"
                glyph="lock"
                label="Password"
                value={password}
                onChange={e => this.onInputChange(e)}
                validationState={this.props.auth.error ? 'error' : null}
              />
              <InputIcon
                type="password"
                name="rePassword"
                glyph="lock"
                label="Re-enter Password"
                value={rePassword}
                onChange={e => this.onInputChange(e)}
                validationState={this.generateLastValidationState()}
                help={this.generateHelpMessage()}
              />
              <Button primary onClick={e => this.signup(e)} disabled={loading}>
                {!loading && 'Sign Up'}
                {loading && <LoadingButtonComponent />}
              </Button>
            </CenterForm>
          </div>
        </Card>
      </Body>
    );
  }
}

export default Signup;

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
