import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { media } from '../../common/theme';
import LoadingIndicator from '../../components/LoadingIndicator';
import LoadingButtonComponent from '../../components/LoadingButtonComponent';
import { DASHBOARD_EDIT_PASSWORD_PATH, DASHBOARD_EDIT_PROFILE_PATH } from '../../common/routing';

@connect(state => ({ auth: state.auth }))
export default class UserProfile extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { user, loading } = this.props.auth;
    return (
      <Container>
        {loading && <LoadingIndicator />}
        <div className="name">
          {`${user && user.first_name} ${user && user.last_name}`}
        </div>
        <div className="institution">
          {user && user.is_internal && `${user.id} - ${user.institution}`}
          {user && !user.is_internal && `${user.institution}`}
        </div>
        <div className="email">
          {user && user.email}
        </div>
        <ButtonsContainer>
          <Button onClick={() => this.props.history.push(DASHBOARD_EDIT_PROFILE_PATH)}>
            Edit Profile
          </Button>
          <Button onClick={() => this.props.history.push(DASHBOARD_EDIT_PASSWORD_PATH)}>
            Edit Password
          </Button>
        </ButtonsContainer>
        <Line />
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
