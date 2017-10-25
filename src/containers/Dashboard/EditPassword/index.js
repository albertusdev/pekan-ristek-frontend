import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Button, Form, FormControl, Glyphicon } from 'react-bootstrap';
import { updatePassword } from '../../../redux_modules/auth';
import { media } from '../../../common/theme';
import { DASHBOARD_PATH } from '../../../common/routing';
import InputIcon from '../../../components/InputIcon';
import LoadingButtonComponent from '../../../components/LoadingButtonComponent';

@connect(
  state => ({
    auth: state.auth,
  }),
  { updatePassword },
)
export default class UserProfile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    updatePassword: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      // Edit Password
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
      hasUpdatedPassword: false,
    };
  }

  handleInputChange(e) {
    const { name: field, value } = e.target;
    this.setState({ [field]: value });
  }

  goBackToDashboard() {
    this.props.history.push(DASHBOARD_PATH);
  }

  async submitEditPassword() {
    const { oldPassword, newPassword } = this.state;
    const { user } = this.props.auth;
    if (user) {
      const { id } = user;
      const update = {
        id,
        old_password: oldPassword,
        new_password: newPassword,
      };
      await this.props.updatePassword(update);
      this.setState({ hasUpdatedPassword: true });
      if (this.props.auth.updatePasswordSuccess) {
        setTimeout(() => this.props.history.push(DASHBOARD_PATH), 3000);
      }
    }
  }

  generateOldPasswordValidationState() {
    if (this.state.oldPassword.length < 8) return 'error';
    return 'success';
  }

  generateOldPasswordHelp() {
    if (this.state.oldPassword.length < 8) return 'Password length must be at least 8';
    return null;
  }

  generatePasswordValidationState() {
    if (this.state.newPassword.length >= 8) return 'success';
    return 'error';
  }

  generatePasswordHelp() {
    const validationState = this.generatePasswordValidationState();
    if (validationState === 'error') {
      return 'Password length must be at least 8';
    }
    return null;
  }

  generateReEnterPasswordValidationState() {
    if (this.generatePasswordValidationState() === 'error') return 'error';
    if (this.state.reNewPassword !== this.state.newPassword) return 'error';
    return 'success';
  }

  generateReEnterPasswordHelp() {
    const validationState = this.generateReEnterPasswordValidationState();
    if (this.generatePasswordValidationState() === 'error') {
      return 'Password length must be at least 8';
    }
    if (validationState === 'error') {
      return `Password doesn't match`;
    }
    return null;
  }

  render() {
    const { user, loading, updatePasswordSuccess } = this.props.auth;
    const { newPassword, oldPassword, reNewPassword, hasUpdatedPassword } = this.state;
    return (
      <Container>
        <BackButton onClick={() => this.goBackToDashboard()}>
          <Glyphicon glyph="arrow-left" />
          <span>Back</span>
        </BackButton>
        <h2>Edit Password</h2>
        {hasUpdatedPassword &&
          updatePasswordSuccess &&
          <Alert bsStyle="success">Successfully update password</Alert>}
        {hasUpdatedPassword &&
          !updatePasswordSuccess &&
          <Alert bsStyle="danger">Update password fail.</Alert>}
        <Form>
          <InputIcon
            label="Old Password"
            validationState={this.generateOldPasswordValidationState()}
            help={this.generateOldPasswordHelp()}
            name="oldPassword"
            onChange={e => this.handleInputChange(e)}
            placeholder="old password"
            type="password"
            value={oldPassword}
          />
          <InputIcon
            help={this.generatePasswordHelp()}
            label="New Password"
            name="newPassword"
            onChange={e => this.handleInputChange(e)}
            placeholder="new password"
            type="password"
            validationState={this.generatePasswordValidationState()}
            value={newPassword}
          />
          <InputIcon
            help={this.generateReEnterPasswordHelp()}
            label="Re-enter New Password"
            name="reNewPassword"
            onChange={e => this.handleInputChange(e)}
            placeholder="re-enter new password"
            type="password"
            validationState={this.generateReEnterPasswordValidationState()}
            value={reNewPassword}
          />
          <Button
            onClick={() => this.submitEditPassword()}
            disabled={loading || this.generateReEnterPasswordValidationState() === 'error'}
          >
            {!loading && 'Save'}
            {loading && <LoadingButtonComponent />}
          </Button>
        </Form>
      </Container>
    );
  }
}

const BackButton = styled.button`
  border: none;
  background: none;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: ${props => props.theme.font.jaapokki};
  margin: 2rem 0;
  .name {
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${props => props.theme.size.font.medium};
  }
  ${media('mobile')} {
    > * {
      margin-left: 1rem;
    }
  }
`;

const Line = styled.div`
  border-bottom: solid 1px ${props => props.theme.color.black};
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  button {
    margin: 1rem 1rem 1rem 0;
  }
`;
