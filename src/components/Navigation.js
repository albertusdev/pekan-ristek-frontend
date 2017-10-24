import React from 'react';
import styled from 'styled-components';
import { LOGIN_PATH } from '../common/routing';

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 1rem;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.font.helvetica};
  font-weight: bold;
  border-bottom: 1px solid ${props => props.theme.color.black};

  .logo {
    width: 3rem;
    height: 1rem;
    background: ${props => props.theme.color.yellowUI};
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

const Navigation = props =>
  <Container>
    <div className="logo" />
    <div className="navigation">
      <button>Competition</button>
      <button>Playground</button>
      <button onClick={() => this.props.history.push(LOGIN_PATH)}>Login / Signup</button>
    </div>
  </Container>;

export default Navigation;
