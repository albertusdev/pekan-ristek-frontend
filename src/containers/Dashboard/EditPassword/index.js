import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';
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
    updateProfile: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      // Edit Password
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
    };
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

  toggleEditProfile() {
    this.setState({ isEditProfile: !this.state.isEditProfile });
  }

  toggleEditPassword() {
    this.setState({ isEditPassword: !this.state.isEditPassword });
  }

  render() {
    const { user, loading } = this.props.auth;
    const { firstName, lastName, email, phone, institution } = this.state;
    const { newPassword, oldPassword, reNewPassword } = this.state;
    return (
      <Container>
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
