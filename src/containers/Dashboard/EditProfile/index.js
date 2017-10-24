import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';
import { updateProfile } from '../../../redux_modules/auth';
import { media } from '../../../common/theme';
import { validateEmail } from '../../../common/utils';
import { DASHBOARD_PATH } from '../../../common/routing';
import InputIcon from '../../../components/InputIcon';
import LoadingButtonComponent from '../../../components/LoadingButtonComponent';

@connect(
  state => ({
    auth: state.auth,
  }),
  { updateProfile },
)
export default class UserProfile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    updateProfile: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      // Edit Profile
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      institution: '',
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
    this.props.history.push(DASHBOARD_PATH);
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

  render() {
    const { user, loading } = this.props.auth;
    const { firstName, lastName, email, phone, institution } = this.state;
    return (
      <Container>
        <Button onClick={() => this.goBackToDashboard()}>Go back to dashboard</Button>
        <h2>Edit Profile</h2>
        <Form>
          <InputIcon
            disabled={user && user.is_internal}
            placeholder="first name"
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={e => this.handleInputChange(e)}
          />
          <InputIcon
            disabled={user && user.is_internal}
            placeholder="last name"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={e => this.handleInputChange(e)}
          />
          <InputIcon
            placeholder="email"
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={e => this.handleInputChange(e)}
          />
          <InputIcon
            placeholder="phone"
            label="Phone"
            name="phone"
            value={phone}
            onChange={e => this.handleInputChange(e)}
          />
          <InputIcon
            placeholder="institution"
            label="Institution"
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
      </Container>
    );
  }
}

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
