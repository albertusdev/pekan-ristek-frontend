import React, { Component } from 'react';
import styled from 'styled-components';
import squares from '../../assets/squares.png';
import squaresParticle from '../../assets/squares-particel.svg';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import {LOGIN_PATH} from '../../common/routing';
import showcaseLogo from '../../assets/logo-showcase.png';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
          <Body>
            <div className="header-image">
              <div className="background-logo">
                <img src={squaresParticle} alt="" />
              </div>
            </div>
            <div className="header-text">
              <span>Pekan Ristek 2017</span>
              <div className="text">
                merupakan ajang tahunan yang diselenggarakan oleh Ristek Fasilkom UI, bertujuan untuk meningkatkan minat dan ketertarikan terhadap dunia IT. Tahun ini, Pekan Ristek membawakan tema "IT Strikes Back"
              </div>
            </div>
           <div className="showcase-section">
           <div className="showcase-header-logo">
            {/* @TODO change to svg and fix the dimension */}
              <img src={squares} />
            </div>
            <div className="showcase-title">
              <span>Showcase</span>
            </div>
            <div className="showcase-text">
            </div>
           </div>
          </Body>
      </Wrapper>
    );
  }
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.color.white};
`;

const Body = styled.div`
  display: flex;
  margin: 5rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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
  .header-image {
    width: 100%;
    height: 60vh;
    position: relative;
    .background-logo {
      position: absolute;
      width: 100%;
      height: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 25rem;
        width: 25rem;
        object-fit: contain;
      }
    }
  }
  .header-text {
    width: 100%;
    height: 60vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: 1.8rem;
      font-family: ${props => props.theme.font.pekanRistek};
      padding-right: 14rem;
    }
    .text {
      width: 35%;
      font-size: 1rem;
      padding: 0 2rem 0 2rem;
      margin: 4rem 4.5rem 0 0;
      font-family: ${props => props.theme.font.jaapokki};
    }
  }
  .showcase-section {
    margin-top: 10rem;
    .showcase-header {
      width: 100%;
      height: 60vh;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
  
      .showcase-header-logo {
        width: 100%;
        height: inherit;
        position: absolute;
        display: flex;
        align-items: flex-start;
  
        img {
          height: 5rem;
          width: 3rem;
          object-fit: contain;
        }
      }
    }
    .showcase-title {
      width: 100%;
      height: 60vh;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      span {
        font-family: ${props => props.theme.font.jaapokki};
        font-size: 2.5rem;
      }
    }
    .showcase-text {
      display: flex;
      align-items: flex-start;
      width: 100%%;
      font-size: 1rem;
      font-family: ${props => props.theme.font.jaapokki};
    }
  }
`;