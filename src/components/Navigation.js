import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import squares from '../assets/squares.png';
import theme, { media } from '../common/theme';
import { BASE_URL, DASHBOARD_PATH, LOGIN_PATH, LOGOUT_PATH } from '../common/routing';
import closeButton from '../assets/close-button.svg';

const mediaQueryListener = window.matchMedia(`max-width: ${theme.breakpoint.mobile}`);

@connect(state => ({ auth: state.auth }))
export default class Navigation extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      mediaQuery: mediaQueryListener,
      isMenuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  redirectTo(path) {
    this.toggleMenu();
    this.props.history.push(path);
  }

  render() {
    const { login } = this.props.auth;
    const { isMenuOpen } = this.state;
    return (
      <Container>
        <MobileContainer>
          {!isMenuOpen &&
            <div className="flex">
              <button className="logo" onClick={() => this.props.history.push(BASE_URL)}>
                <img src={squares} alt="logo-pekan-ristek" />
                <div>Pekan Ristek</div>
              </button>
              <Glyphicon glyph="menu-hamburger" onClick={() => this.toggleMenu()} />
            </div>}
          {isMenuOpen &&
            <MobileMenu>
              <div className="flex">
                <button className="logo" onClick={() => this.redirectTo(BASE_URL)}>
                  <img src={squares} alt="logo-pekan-ristek" />
                  <div>Pekan Ristek</div>
                </button>
                <button className="close" onClick={() => this.toggleMenu()}>
                  <img src={closeButton} alt="close-button" />
                </button>
              </div>
              <MobileNavigation>
                <button onClick={() => this.redirectTo(BASE_URL)}>Home</button>
                <button onClick={() => this.redirectTo(DASHBOARD_PATH)}>Dashboard</button>
                {!login &&
                  <button onClick={() => this.redirectTo(LOGIN_PATH)}>Login / Signup</button>}
                {login && <button onClick={() => this.redirectTo(LOGOUT_PATH)}>Logout</button>}
              </MobileNavigation>
            </MobileMenu>}
        </MobileContainer>
        <DesktopContainer>
          <button className="logo" onClick={() => this.redirectTo(BASE_URL)}>
            <img src={squares} alt="logo-pekan-ristek" />
            <div>Pekan Ristek</div>
          </button>
          <div className="navigation">
            <button onClick={() => this.redirectTo(BASE_URL)}>Home</button>
            <button onClick={() => this.redirectTo(DASHBOARD_PATH)}>Dashboard</button>
            {!login && <button onClick={() => this.redirectTo(LOGIN_PATH)}>Login / Signup</button>}
            {login && <button onClick={() => this.redirectTo(LOGOUT_PATH)}>Logout</button>}
          </div>
        </DesktopContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  padding: 2.5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  font-family: ${props => props.theme.font.helvetica};
  font-weight: bold;
  z-index: 2;
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
      width: 2rem;
      cursor: pointer;
      align-self: center;
      object-fit: scale-down;
    }
    div {
      font-family: ${props => props.theme.font.jaapokki};
      font-size: ${props => props.theme.size.font.medium};
      text-transform: uppercase;
      margin-left: 1rem;
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

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.black};
  width: 80%;
  ${media('mobile')} {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  position: relative;
  ${media('mobile')} {
    display: flex;
    width: 100%;
    align-self: flex-end;
    justify-content: flex-end;
    font-size: 1.5rem;
    > * {
      margin-right: 1rem;
    }
    .flex {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: ${props => props.theme.color.white};
  .close {
    align-self: flex-end;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
    img {
      width: 1.5rem;
      object-fit: scale-down;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    span {
      margin-top: 1rem;
    }
  }
`;

const MobileNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${props => props.theme.font.jaapokki};
  font-size: ${props => props.theme.size.font.medium};
  background-color: ${props => props.theme.color.white};
  button {
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
    padding: 2rem 0;
    margin-left: 1rem;
  }
`;
