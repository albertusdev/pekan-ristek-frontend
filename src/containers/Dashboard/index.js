import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import UserProfile from './UserProfile';
import Card from '../../components/Card';
import Navigation from '../../components/Navigation';
import { media } from '../../common/theme';
import { DASHBOARD_EDIT_PROFILE_PATH } from '../../common/routing';

@connect(
  state => ({
    auth: state.auth,
  }),
)
export default class Dashboard extends Component {
  componentWillReceiveProps(nextProps) {
    const user = nextProps.auth.user;
    if (user && !user.email && !user.phone) {
      this.props.history.push(DASHBOARD_EDIT_PROFILE_PATH);
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <Container>
        <UserProfile history={this.props.history} />
        {user &&
          user.phone &&
          user.email &&
          <div className="playground-point-container">
            <div className="playground-point">
              <span className="title">YOUR POINT:</span>
              <span className="point">
                {user && user.curr_point}
              </span>
            </div>
            <Line />
          </div>}
        {user && user.is_internal && user.phone && user.email && <Competitions />}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: spcae-between;
  background: ${props => props.theme.color.white};
  .playground-point-container {
    width: 100%;
  }
  .playground-point {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.font.jaapokki};
    .title {
      font-size: ${props => props.theme.size.font.medium};
    }
    .point {
      font-size: ${props => props.theme.size.font.jumbo};
    }
    padding: 1rem 0;
  }
`;

const Line = styled.div`
  border-bottom: solid 1px ${props => props.theme.color.black};
  width: 100%;
`;
