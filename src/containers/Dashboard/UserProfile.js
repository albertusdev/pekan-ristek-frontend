import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';
import { updateProfile, updatePassword } from '../../redux_modules/auth';
import { media } from '../../common/theme';
import LoadingButtonComponent from '../../components/LoadingButtonComponent';
import { validateEmail } from '../../common/utils';
import InputIcon from '../../components/InputIcon';

@connect(
  state => ({
    auth: state.auth,
  }),
  { updateProfile },
)
export default class UserProfile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isEditPassword: false,
      isEditProfile: false,
      // Edit Profile
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      institution: '',
      // Edit Password
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
      // Validator
      isEmailValid: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.auth.user && nextProps.auth.user) {
      this.setPropsToState(nextProps);
    }
  }

  setPropsToState(props) {
    const { auth } = props;
    const { user } = auth;
    if (user) {
      this.setState({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        institution: user.institution,
      });
    }
  }

  handleInputChange(e) {
    const { name: field, value } = e.target;
    this.setState({ [field]: value });
  }

  goBackToDashboard() {
    this.setState({ isEditPassword: false, isEditProfile: false });
  }

  async submitEditProfile() {
    const { firstName, lastName, email, phone, institution } = this.state;
    const { user } = this.props.auth;
    if (user) {
      const { id, is_internal } = user;
      const update = {
        id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        institution,
      };
      // eslint-disable-next-line
      if (is_internal) delete update['institution'];
      await this.props.updateProfile(update);
      this.toggleEditProfile();
    }
  }

  toggleEditProfile() {
    this.setState({ isEditProfile: !this.state.isEditProfile });
  }

  toggleEditPassword() {
    this.setState({ isEditPassword: !this.state.isEditPassword });
  }

  render() {
    const { user, loading } = this.props.auth;
    const { isEditPassword, isEditProfile } = this.state;
    const { firstName, lastName, email, phone, institution } = this.state;
    if (isEditProfile) {
      return (
        <Profile>
          <Button onClick={() => this.goBackToDashboard()}>Go back to dashboard</Button>
          <h2>Edit Profile</h2>
          <Form>
            <InputIcon
              placeholder="first name"
              name="firstName"
              value={firstName}
              onChange={e => this.handleInputChange(e)}
            />
            <InputIcon
              placeholder="last name"
              name="lastName"
              value={lastName}
              onChange={e => this.handleInputChange(e)}
            />
            <InputIcon
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={e => this.handleInputChange(e)}
            />
            <InputIcon
              placeholder="phone"
              name="phone"
              value={phone}
              onChange={e => this.handleInputChange(e)}
            />
            <InputIcon
              placeholder="institution"
              name="institution"
              value={institution}
              onChange={e => this.handleInputChange(e)}
              disabled={user && user.is_internal}
            />
            <Button onClick={() => this.submitEditProfile()} disabled={loading}>
              {!loading && 'Save'}
              {loading && <LoadingButtonComponent />}
            </Button>
          </Form>
        </Profile>
      );
    }
    if (isEditPassword) {
      const { newPassword, oldPassword, reNewPassword } = this.state;
      return (
        <Profile>
          <Button onClick={() => this.goBackToDashboard()}>Go back to dashboard</Button>
          <h2>Edit Password</h2>
          <Form>
            <InputIcon
              placeholder="old password"
              name="oldPassword"
              label="Old Password"
              value={oldPassword}
              onChange={e => this.handleInputChange(e)}
            />
            <InputIcon
              placeholder="new password"
              name="newPassword"
              label="New Password"
              value={newPassword}
              onChange={e => this.handleInputChange(e)}
            />
            <InputIcon
              placeholder="re-enter new password"
              name="reNewPassword"
              label="Re-enter New Password"
              value={reNewPassword}
              onChange={e => this.handleInputChange(e)}
            />
            <Button onClick={() => this.submitEditPassword()} disabled={loading}>
              {!loading && 'Save'}
              {loading && <LoadingButtonComponent />}
            </Button>
          </Form>
        </Profile>
      );
    }
    return (
      <Profile>
        <h2>Welcome,</h2>
        <div className="name">
          {`${user && user.id} - ${user && user.first_name} ${user && user.last_name}`}
        </div>
        <div className="institution">
          {user && user.institution}
        </div>
        <div className="email">
          {user && user.email}
        </div>
        <ButtonsContainer>
          <Button onClick={() => this.toggleEditProfile()}>Edit Profile</Button>
          <Button onClick={() => this.toggleEditPassword()}>Edit Password</Button>
        </ButtonsContainer>
      </Profile>
    );
  }
}

const Profile = styled.div`
  background: ${props => props.theme.linearGradient.sunnyMorning};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: ${props => props.theme.font.helvetica};
  .name {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  button {
    margin-right: 1rem;
  }
  ${media('mobile')} {
    flex-direction: column;
  }
`;
