import React, { Component } from 'react';
import styled from 'styled-components';
import squares from '../../assets/squares.png';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { LOGIN_PATH } from '../../common/routing';

class Home extends Component {
  render() {
    return (
      <Body>
        <Title>
          <img src={squares} className="squares" alt="square logo" />
          <span>Pekan Ristek 2017</span>
        </Title>
        <Subtitle>IT Strikes Back</Subtitle>
        <Button onClick={() => this.props.history.push(LOGIN_PATH)}>Login</Button>
      </Body>
    );
  }
}

export default Home;

const Body = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logoContainer {
    width: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .logoRistek {
      height: 5rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.font.pekanRistek};
  font-size: 2.5rem;
  img {
    height: 2.5rem;
    margin-right: 1rem;
  }
`;

const Subtitle = styled.span`
  font-family: ${props => props.theme.font.jaapokki};
  font-size: 2rem;
`;

const Button = styled.button`
  background: #3498db;
  border: none;
  border-radius: 1rem;
  color: ${props => props.theme.color.white};
  padding: 1rem 2rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
