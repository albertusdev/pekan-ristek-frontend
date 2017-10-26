import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import squaresParticle from '../../assets/squares-particel.svg';
import { LOGIN_PATH } from '../../common/routing';
import Slider from './imgSlides';
// IMPORT FROM ASSETS LOGO
import logoIPSC from '../../assets/logo-ipsc.svg';
import logoCTF from '../../assets/logo-ctf.svg';
import logoUIUX from '../../assets/logo-uiux.svg';
import logoCITD from '../../assets/logo-citd.svg';
import logoPlayground from '../../assets/logo-playground.svg';
import logoSeminar from '../../assets/logo-seminar.svg';
import logoShowcase from '../../assets/logo-showcase.svg';
// // IMPORT PHOTO
// // Showcase
// import photoSC01 from '../../assets/photos/P1.JPG';
// import photoSC02 from '../../assets/photos/P16.JPG';
// import photoSC03 from '../../assets/photos/P8.JPG';
// import photoSC04 from '../../assets/photos/P6.JPG';
// // seminar
// import photoSeminar01 from '../../assets/photos/P17.JPG';
// import photoSeminar02 from '../../assets/photos/P7.JPG';
// import photoSeminar03 from '../../assets/photos/P3.JPG';
// import photoSeminar04 from '../../assets/photos/P2.JPG';
// // playground
// import photoPG01 from '../../assets/photos/P9.JPG';
// import photoPG02 from '../../assets/photos/P5.JPG';

const photoPG01 = null;
const photoPG02 = null;
const photoPG03 = null;
const photoPG04 = null;

const photoSC01 = null;
const photoSC02 = null;
const photoSC03 = null;
const photoSC04 = null;

const photoSeminar01 = null;
const photoSeminar02 = null;
const photoSeminar03 = null;
const photoSeminar04 = null;

class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

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
            Merupakan ajang tahunan yang diselenggarakan oleh Ristek Fasilkom UI, bertujuan untuk meningkatkan minat dan ketertarikan terhadap dunia IT. Tahun ini, Pekan Ristek membawakan tema "IT Strikes Back"
          </div>
        </div>
        <div className="showcase-section">
          <div className="showcase-title">
            <span>Showcase</span>
          </div>
          <div className="showcase-header-logo">
            <img src={logoShowcase} />
          </div>
          <div className="showcase-text">
            Ajang bagi para exhibitor untuk menunjukkan karya-karya mereka, baik yang masih dalam tahap pengembangan ataupun yang sudah jadi. Karya-karya mereka merupakan karya-karya yang kreatif, inovatif, dan terkini.
          </div>
        </div>
        <div className="photo-slider">
          <Slider useImages="true" slides={[photoSC01, photoSC02, photoSC03, photoSC04]} />
        </div>
        <div className="competition-section">
          <div className="competition-title">
            <span>competition</span>
          </div>
          <div className="competition-text">
            Ajang bagi para pejuang IT untuk menunjukkan kemampuan mereka di bidang IT. Pekan Ristek 2017 kali ini menyelenggarakan 4 kompetisi, yaitu Code In The Dark, UI/UX, Internal Problem Solving Competition, dan Capture The Flag
          </div>
          <div className="competition-card-container">
            <div className="competition-card">
              <h1>UI/UX</h1>
              <div className="competition-logo">
                <img src={logoUIUX} alt="" />
              </div>
              <button onClick={() => this.props.history.push(LOGIN_PATH)}>Join</button>
            </div>
            <div className="competition-card">
              <h1>CITD</h1>
              <div className="competition-logo">
                <img src={logoCITD} alt="" />
              </div>
              <button onClick={() => this.props.history.push(LOGIN_PATH)}>Join</button>
            </div>
            <div className="competition-card">
              <h1>IPSC</h1>
              <div className="competition-logo">
                <img src={logoIPSC} alt="" />
              </div>
              <button onClick={() => this.props.history.push(LOGIN_PATH)}>Join</button>
            </div>
            <div className="competition-card">
              <h1>CTF</h1>
              <div className="competition-logo">
                <img src={logoCTF} alt="" />
              </div>
              <button onClick={() => this.props.history.push(LOGIN_PATH)}>Join</button>
            </div>
          </div>
        </div>
        <div className="seminar-section">
          <div className="seminar-title">
            <span>seminar</span>
          </div>
          <div className="seminar-header-logo">
            <img src={logoSeminar} alt="" />
          </div>
          <div className="seminar-text">
            Ajang bagi para peminat IT untuk mendapatkan ilmu dari figur-figur yang memiliki pengaruh di bidang IT. Selain mendapatkan ilmu baru, kamu memiliki kesempatan untuk bertukar ide dan pikiran dengan figur-figur tersebut
          </div>
        </div>
        <div className="photo-slider">
          <Slider useImages="true"
            slides={[photoSeminar01, photoSeminar02, photoSeminar03, photoSeminar04]} />
        </div>
        <div className="playground-section">
          <div className="playground-title">
            <span>playground</span>
          </div>
          <div className="playground-header-logo">
            <img src={logoPlayground} alt="" />
          </div>
          <div className="playground-text">
            Arena permainan bagi seluruh mahasiswa yang datang ke Pekan Ristek. Banyak mainan seru yang bisa kamu mainkan bersama teman-temanmu. Selain itu, ada berbagai hadiah yang bisa kamu dapatkan dari bermain di Playground
          </div>
        </div>
        <div className="photo-slider">
          <Slider useImages="true" slides={[photoPG01, photoPG02, photoPG03, photoPG04]} />
        </div>
      </Body>
    );
  }
}

export default Home;

const Body = styled.div`
  display: flex;
  display: -webkit-flex;
  margin: 5rem 0 5rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: ${props => props.theme.font.jaapokki};
  .photo-slider {
    width: 100%;
    height: auto;
    margin: 2rem 0 2rem 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    display: none;
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
      opacity: 0.75;
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
      font-size: 1.1rem;
      padding: 0 3.5rem 0 2rem;
      margin: 4rem 4.5rem 0 0;
    }
  }
  .showcase-section {
    margin: 6.5rem 0 2rem 0;
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
      opacity: 0.35;
      z-index: -1;
      img {
        filter: blur(1px);
        height: 10rem;
        width: 10rem;
        object-fit: contain;
      }
    }
    .showcase-title {
      width: 100%;
      height: inherit;
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
      font-size: 1.1rem;
    }
  }
  .competition-section {
    margin: 2rem 0 2rem 0;
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    .competition-title {
      width: 100%;
      height: auto;
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
    .competition-text {
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      width: 90%;
      padding: 5rem 0 0 20rem;
      position: relative;
      font-size: 1.1rem;
    }
    .competition-card-container {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 2rem;
      height: 16rem;
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
          justify-content: center;
          position: relative;
          margin: 2.5rem 0 2.5rem 0;
          height: 6rem;
          width: 6rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
          -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          -ms-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          .ctf-logo {

          }
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
      .competition-card::after {
        .competition-logo {
          position: absolute;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          -moz-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          -ms-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: -1;
          opacity: 0;
        }
      }
      .competition-card:hover {
        .competition-logo {
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          -webkit-transform: scale(1.25, 1.25);
          -moz-transform: scale(1.25, 1.25);
          -ms-transform: scale(1.25, 1.25);
          transform: scale(1.25, 1.25);
        }
      }
      .competition-card:hover::after {
        .competition-logo {
          opacity: 1;
        }
      }
    }
  }
  .seminar-section {
    margin: 2rem 0 2rem 0;
    width: 100%;
    height: auto;
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
      opacity: 0.35;
      z-index: -1;
      img {
        filter: blur(1px);
        height: 10rem;
        width: 10rem;
        object-fit: contain;
      }
    }
    .seminar-title {
      width: 100%;
      height: auto;
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
    .seminar-text {
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      width: 90%;
      padding: 5rem 0 0 20rem;
      position: relative;
      font-size: 1.1rem;
    }
  }
  .playground-section {
    margin: 2rem 0 2rem 0;
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: flex-start;
    .playground-header-logo {
      width: 100%;
      padding: 0 0 0 4rem;
      height: inherit;
      position: absolute;
      display: flex;
      display: -webkit-flex;
      align-items: flex-start;
      justify-content: flex-start;
      opacity: 0.35;
      z-index: -1;
      img {
        filter: blur(1px);
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
      flex-direction: row;
      align-items: flex-start;
      span {
        font-size: 3.5rem;
        padding-left: 3rem;
        text-transform: uppercase;
      }
    }
    .playground-text {
      display: flex;
      display: -webkit-flex;
      align-items: flex-end;
      width: 90%;
      padding: 5rem 0 0 20rem;
      position: relative;
      font-size: 1.1rem;
    }
  }
  
  @media screen and (max-width:767px) {
    margin: auto;
    .header-text {
      align-items: center;
      padding: 2rem 0 0 0;
      span {
        padding: 0;
        font-size: 1.6rem;
      }
      .text {
        width: 100%;
        padding: 2rem 1rem 0 1rem;
        margin: 0;
        text-align: justify;
        text-justify: inter-word;
      }
    }
    .showcase-section {
      margin: 6.5rem 0 0 0;
      .showcase-header-logo {
        img {
          height: 7rem;
          width: 7rem;
        }
      }
      .showcase-title {
        span {
          font-size: 2.5rem;
        }
      }
      .showcase-text {
        width: 100%;
        padding: 5rem 1rem 0 7rem;
        text-align: justify;
        text-justify: inter-word;
      }
    }
    .competition-section {
      margin: 2rem 0 0rem 0;
      .competition-title {
        span {
          font-size: 2.3rem;
        }
      }
      .competition-text {
        width: 100%;
        padding: 5rem 1rem 0 7rem;
        text-align: justify;
        text-justify: inter-word;
      }
      .competition-card-container {
        flex-direction: column;
        height: auto;
        align-items: center;
        .competition-card {
          width: 90%;
          border-top: none;
          margin: 0 0 1rem 0;
        }
      }
    }
    .seminar-section {
      margin: 2rem 0 0rem 0;
      .seminar-header-logo {
        align-items: flex-start;
        justify-content: flex-start;
      }
      .seminar-title {
        span {
          font-size: 2.5rem;
        }
      }
      .seminar-text {
        width: 100%;
        padding: 5rem 1rem 0 7rem;
        text-align: justify;
        text-justify: inter-word;
      }
    }
    .playground-section {
      margin: 2rem 0 0 0;
      .playground-header-logo {
        padding: 0;
      }
      .playground-title {
        span {
          font-size: 2.3rem;
        }
      }
      .playground-text {
        width: 100%;
        padding: 5rem 1rem 0 7rem;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }
`;