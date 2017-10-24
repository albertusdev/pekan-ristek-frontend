import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Competitions from './Competitions';
import UserProfile from './UserProfile';
import Card from '../../components/Card';
import { media } from '../../common/theme';
import { validateEmail } from '../../common/utils';

@connect(
  state => ({
    auth: state.auth,
  }),
)
export default class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <UserProfile />
        {user &&
          !user.phone &&
          !user.email &&
          <h2>Please fill in your email and phone first to register</h2>}
        {user && user.is_internal && user.phone && user.email && <Competitions />}
      </div>
    );
  }
}
