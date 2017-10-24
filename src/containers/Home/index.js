import React, { Component } from 'react';
import styled from 'styled-components';
import squares from '../../assets/squares.png';
import squaresParticle from '../../assets/squares-particel.svg';
import Footer from '../../components/Footer';
<<<<<<< e894fa3827a994ed7350da8969dcf08b1972078b
import Navigation from '../../components/Navigation';
=======
import Content from './Content';
>>>>>>> change home index
import { LOGIN_PATH } from '../../common/routing';

class Home extends Component {
  render() {
    return (
<<<<<<< e894fa3827a994ed7350da8969dcf08b1972078b
      <Body>
        <Title>
          <img src={squares} className="squares" alt="square logo" />
          <span>Pekan Ristek 2017</span>
        </Title>
        <Subtitle>IT Strikes Back</Subtitle>
        <Button onClick={() => this.props.history.push(LOGIN_PATH)}>Login</Button>
      </Body>
=======
      <Wrapper>
        <Container>
          <Body>
            <Section>
              <Group>
                <Section>
                  <Layer>
                    <Level01>
                      <span className="title">Pekan Ristek 2017</span>
                      <p className="p-about">merupakan ajang tahunan yang diselenggarakan oleh Ristek Fasilkom UI, bertujuan untuk meningkatkan minat dan ketertarikan terhadap dunia IT. Tahun ini, Pekan Ristek membawakan tema "IT Strikes Back"</p>
                    </Level01>
                    <Level02>
                    </Level02>
                  </Layer>
                </Section>
              </Group>
            </Section>
            <Content />
          </Body>
          <Footer />
        </Container>
      </Wrapper>
>>>>>>> change home index
    );
  }
}

export default Home;

<<<<<<< e894fa3827a994ed7350da8969dcf08b1972078b
=======
const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(-20deg, #fff 0%, #f5f5f5 100%);

  img {
    user-select: none;
  }
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

>>>>>>> change home index
const Body = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
  flex-direction: column;
  align-items: center;
<<<<<<< e894fa3827a994ed7350da8969dcf08b1972078b
  justify-content: center;
=======
  min-height: 90vh;
  margin-bottom: 4.5rem;
  width: 100%;
>>>>>>> change home index
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Group = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  -webkit-transform-origin-x: 100%;
  transform-origin-x: 100%;
`;

const Level01 = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
  font-family: ${props => props.theme.font.pekanRistek};
  font-size: 2.5rem;
  height: 100vh;
  background-image: url(${squaresParticle});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 75% 75%;
  background-attachment: ;
  .title {
    text-align: right;
    padding-right: 5rem;
    margin-top: 8rem;
    padding-left: 2rem;
  }
  p,
  p-about,
  p-showcase {
    font-family: ${props => props.theme.font.jaapokki};
    font-size: 1rem;
    word-break: break-all;
  }
  p-about {
    padding-left: 10rem;
  }
`;

const Level02 = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateZ(-1) scale(0.6);
  .logo-particle {
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;

const Level03 = styled.div`
  transform: translateZ(-2) scale(0.6);
  display: flex;
  flex-direction: column;
`;

const Level04 = styled.div`
  transform: translateZ(-3) scale(0.6);
`;

// const Subtitle = styled.span`
//   font-family: ${props => props.theme.font.jaapokki};
//   font-size: 2rem;
// `;

// const Button = styled.button`
//   background: #3498db;
//   border: none;
//   border-radius: 1rem;
//   color: ${props => props.theme.color.white};
//   padding: 1rem 2rem;
//   text-decoration: none;
//   &:hover {
//     cursor: pointer;
//   }
// `;
