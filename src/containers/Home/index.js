import React, { Component } from 'react';
import styled from 'styled-components';
import squares from '../../assets/squares.png';
import squaresParticle from '../../assets/squares-particel.svg';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import {LOGIN_PATH} from '../../common/routing';
import showcaseLogo from '../../assets/logo-showcase.svg';

class Home extends Component {
  render() {
    return (
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
          <div className="showcase-title">
              <span>Showcase</span>
            </div>
          <div className="showcase-header-logo">
          {/* @TODO change to svg and fix the dimension */}
            <img src={showcaseLogo} />
          </div>
          <div className="showcase-text">
            Ajang bagi para exhibitor untuk menunjukkan karya-karya mereka, baik yang masih dalam tahap pengembangan ataupun yang sudah jadi. Karya-karya mereka merupakan karya-karya yang kreatif, inovatif, dan terkini.
          </div>
        </div>
        <div className="photo-slider">IMAGE HERE</div>
        <div className="competition-section">
          <div className="competition-title">
            <span>competition</span>
          </div>
          <div className="competition-text">
            Ajang bagi para pejuang IT untuk menunjukkan kemampuan mereka di bidang IT. Pekan Ristek 2017 kali ini menyelenggarakan 4 kompetisi, yaitu Code In The Dark, UI/UX, Internal Problem Solving Competition, dan Capture The Flag
          </div>
          <div className="competition-card-container">
            <div className="competition-card">
              <h1>Title</h1>
              <div className="competition-logo">
                <img src={showcaseLogo} alt="" />
              </div>
              <button>Join</button>
            </div>
            <div className="competition-card">
              <h1>Title</h1>
              <div className="competition-logo">
                <img src={showcaseLogo} alt="" />
              </div>
              <button>Join</button>
            </div>
            <div className="competition-card">
              <h1>Title</h1>
              <div className="competition-logo">
                <img src={showcaseLogo} alt="" />
              </div>
              <button>Join</button>
            </div>
            <div className="competition-card">
              <h1>Title</h1>
              <div className="competition-logo">
                <img src={showcaseLogo} alt="" />
              </div>
              <button>Join</button>
            </div>
          </div>
        </div>
        <div className="seminar-section">
          <div className="seminar-title">
            <span>seminar</span>
          </div>
          <div className="seminar-header-logo">
            <img src={showcaseLogo} alt="" />
          </div>
          <div className="seminar-text">
            Ajang bagi para peminat IT untuk mendapatkan ilmu dari figur-figur yang memiliki pengaruh di bidang IT. Selain mendapatkan ilmu baru, kamu memiliki kesempatan untuk bertukar ide dan pikiran dengan figur-figur tersebut
          </div>
        </div>
        <div className="photo-slider">IMAGE HERE</div>
        <div className="playground-section">
          <div className="playground-title">
            <span>playground</span>
          </div>
          <div className="playground-header-logo">
            <img src={showcaseLogo} alt="" />
          </div>
          <div className="playground-text">
            [GANTI PLAYGROUND]Ajang bagi para peminat IT untuk mendapatkan ilmu dari figur-figur yang memiliki pengaruh di bidang IT. Selain mendapatkan ilmu baru, kamu memiliki kesempatan untuk bertukar ide dan pikiran dengan figur-figur tersebut
          </div>
        </div>
      </Body>
    );
  }
}

export default Home;

const Body = styled.div`
  display: flex;
  display: -webkit-flex;
  margin: 5rem 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: ${props => props.theme.font.jaapokki};
  .photo-slider {
    width: 100%;
    height: 50vh;
    margin: 2rem 0 2rem 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: solid 1rem;
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
      display: -webkit-flex;
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
    display: -webkit-flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: 1.8rem;
      padding-right: 14rem;
      font-family: ${props => props.theme.font.pekanRistek};
    }
    .text {
      width: 35%;
      font-size: 1rem;
      padding: 0 3.5rem 0 2rem;
      margin: 4rem 4.5rem 0 0;
    }
  }
  .showcase-section {
    margin: 5rem 0 2rem 0;
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: flex-start;
    .showcase-header-logo {
      width: 100%;
      height: inherit;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      align-items: flex-start;
      z-index: -1;
      img {
        height: 10rem;
        width: 10rem;
        object-fit: contain;
      }
    }
    .showcase-title {
      width: 100%;
      height: 60vh;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      align-items: flex-start;
      span {
        font-size: 3.5rem;
        padding-left: 3rem;
        text-transform: uppercase;
      }
    }
    .showcase-text {
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      width: 90%;
      padding: 5rem 0 0 20rem;
      position: relative;
      font-size: 1rem;
    }
  }
  .competition-section {
    margin: 5rem 0 5rem 0;
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 100%;
    height: 28rem;
    .competition-title {
      width: inherit;
      heigth: inherit;
      position: relative;
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      align-items: flex-start;
      span {
        font-size: 3.5rem;
        text-transform: uppercase;
        padding-left: 5rem;
      }
    }
    .competition-text {
      display: flex;
      display: -webkit-flex;
      position: relative;
      width: 100%;
      padding-left: 25rem;
      margin: 2rem 0 2rem 0;
    }
    .competition-card-container {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
      height: 28rem;
      .competition-card {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        position: relative;
        width: 10rem;
        height; inherit;
        align-items: center;
        border-top: solid 0.5rem ${props => props.theme.color.orange};
        border-bottom: solid 0.5rem ${props => props.theme.color.orange};
        // border-image: linear-gradient(to bottom, ${props => props.theme.color.orange} 10%, ${props => props.theme.color.yellowPR} 100%);
        padding: 0;
        h1 {
          margin: 0.5rem 0 0 0;
          position: relative;
          text-transform: uppercase;
        }
        .competition-logo {
          display: flex;
          display: -webkit-flex;
          align-items: center;
          position: relative;
          margin: 3rem 0 3rem 0;
          img {
            height: 5rem;
            width: 5rem;
            object-fit: contain;
          }
        }
        button {
          position: relative;
          background: 0;
          border: 0;
          text-transform: uppercase;
          font-size: 1.2rem;
        }
      }
    }
  }
  .seminar-section {
    margin: 2rem 0 0 0;
    width: 100%;
    height: 25vh;
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: flex-start;
    .seminar-header-logo {
      width: 100%;
      height: inherit;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      align-items: flex-start;
      justify-content: flex-end;
      z-index: -1;
      padding-right: 15rem;
      img {
        height: 8rem;
        width: 8rem;
        object-fit: contain;
      }
    }
    .seminar-title {
      width: 100%;
      height: auto;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      flex-direction: flex-start;
      padding: 1.2rem 0 0 0;
      span {
        font-size: 3.5rem;
        text-transform: uppercase;
      }
    }
    .seminar-text {
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      width: 90%;
      padding: 5rem 0 0 20rem;
      position: relative;
      font-size: 1rem;
    }
  }
  .playground-section {
    margin: 5rem 0 5rem 0;
    width: 100%;
    height: 35vh;
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: flex-start;
    .playground-header-logo {
      width: 100%;
      height: inherit;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      justify-content: flex-start;
      z-index: -1;
      img {
        height: 10rem;
        width: 10rem;
        object-fit: contain;
      }
    }
    .playground-title {
      width: 100%;
      height: auto;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      flex-direction: flex-start;
      padding: 1.2rem 0 0 0;
      span {
        font-size: 3.5rem;
        text-transform: uppercase;
      }
    }
    .playground-text {
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      justify-content: flex-start;
      width: 100%;
      padding: 6rem 0 0 20rem;
      position: relative;
      font-size: 1rem;
    }
  }
`;