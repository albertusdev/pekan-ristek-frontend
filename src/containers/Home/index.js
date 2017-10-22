import React, { Component } from 'react';
import styled from 'styled-components';
import squares from '../../assets/squares.png';
import Footer from '../../components/Footer';
import { LOGIN_PATH } from '../../common/routing';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Overlay />
        <Container>
          <Body>
            <Title>
              <img src={squares} className="squares" alt="square logo" />
              <span>Pekan Ristek 2017</span>
            </Title>
            <Subtitle>IT Strikes Back</Subtitle>
            <Button onClick={() => this.props.history.push(LOGIN_PATH)}>Login</Button>
          </Body>
          <Footer />
        </Container>
      </Wrapper>
    );
  }
}

export default Home;

const Wrapper = styled.div`
  max-width: 100%;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
`;

const Overlay = styled.div`
  @keyframes fadeOpacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  width: 100%;
  height: 100vh;
  background-image: ${props => props.theme.linearGradient.sunnyMorning};
  position: absolute;
  z-index: 0;
  animation: fadeOpacity 10s infinite;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
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