import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';
import { updateProfile, updatePassword } from '../../redux_modules/auth';

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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      institution: '',
    };
  }

  handleInputChange(e) {
    const { name: field, value } = e.target;
    this.setState({ [field]: value });
  }

  goBackToDashboard() {
    this.setState({ isEditPassword: false, isEditProfile: false });
  }

  submitEditProfile() {
    const { firstName, lastName, email, phone, institution } = this.state;
    const { user } = this.props.auth;
    if (user) {
      const { id, is_internal } = user;
      const update = { id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        institution,
      };
      // eslint-disable-next-line
      if (is_internal) delete update[institution];
      this.props.updateProfile(update);
    }
  }

  toggleEditProfile() {
    this.setState({ isEditProfile: true });
  }

  render() {
    const { user } = this.props.auth;
    const { isEditPassword, isEditProfile } = this.state;
    const { firstName, lastName, email, phone, institution } = this.state;
    if (isEditProfile) {
      return (
        <Profile>
          <Button onClick={() => this.goBackToDashboard()}>Go back to dashboard</Button>
          <h2>Edit Profile</h2>
          <Form>
            <FormControl
              placeholder="first name"
              name="firstName"
              value={firstName}
              onChange={e => this.handleInputChange(e)}
            />
            <FormControl
              placeholder="last name"
              name="lastName"
              value={lastName}
              onChange={e => this.handleInputChange(e)}
            />
            <FormControl
              placeholder="email"
              name="email"
              value={email}
              onChange={e => this.handleInputChange(e)}
            />
            <FormControl
              placeholder="phone"
              name="phone"
              value={phone}
              onChange={e => this.handleInputChange(e)}
            />
            <FormControl
              placeholder="institution"
              name="institution"
              value={institution}
              onChange={e => this.handleInputChange(e)}
              disabled={user && user.is_internal}
            />
            <Button onClick={() => this.submitEditProfile()}>Save</Button>
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
        <Button onClick={() => this.toggleEditProfile()}>Edit Profile</Button>
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
