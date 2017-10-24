import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import squares from '../assets/squares.png';
import { DASHBOARD_PATH, LOGIN_PATH, LOGOUT_PATH } from '../common/routing';

@connect(state => ({ auth: state.auth }))
export default class Navigation extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { login } = this.props.auth;
    return (
      <Container>
        <button className="logo" onClick={() => this.props.history.push('/')}>
          <img src={squares} alt="logo-pekan-ristek" />
        </button>
        <div className="navigation">
          <button onClick={() => this.props.history.push('/')}>Home</button>
          <button onClick={() => this.props.history.push(DASHBOARD_PATH)}>Dashboard</button>
          {!login &&
            <button onClick={() => this.props.history.push(LOGIN_PATH)}>Login / Signup</button>}
          {login && <button onClick={() => this.props.history.push(LOGOUT_PATH)}>Logout</button>}
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  padding: 2.5rem 0 1.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.font.helvetica};
  font-weight: bold;
  border-bottom: 1px solid ${props => props.theme.color.black};
  z-index: 1;
  background-color: ${props => props.theme.color.white};
  .logo {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
    img {
      width: 3rem;
      cursor: pointer;
      align-self: center;
      object-fit: scale-down;
    }
  }

  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      outline: 0;
      background: none;
      border: 0;
      font-size: 0.8rem;
      font-family: ${props => props.theme.font.jaapokki};
      margin: 0 0 0 1rem;
      font-weight: bold;
      text-transform: uppercase;
      color: ${props => props.theme.color.black};
    }
  }
`;
