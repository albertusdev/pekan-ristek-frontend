import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import Card from '../../components/Card';
import { media } from '../../common/theme';

@connect(
  state => ({
    auth: state.auth,
  }),
)
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <UserProfile />
        {user && !user.phone && !user.email &&
          <h2>Please fill in your email and phone first to register</h2>
        }
        {user &&
          user.is_internal &&
          user.phone &&
          user.email &&
          <Competitions>
            <Card>
              <span>Capture The Flag</span>
            </Card>
            <Card>
              <span>Code In The Dark</span>
            </Card>
            <Card>
              <span>Internal Problem Solving Competition</span>
            </Card>
            <Card>
              <span>UI/UX</span>
            </Card>
          </Competitions>}
      </div>
    );
  }
}

const Competitions = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media('mobile')} {
    flex-direction: column;
  }
  ${Card} {
    border-radius: 0.5rem;
    flex-grow: 1;
    height: 5rem;
    width: 50%;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
