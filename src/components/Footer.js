import React from 'react';
import styled from 'styled-components';
import logoTraveloka from '../assets/logo-traveloka.png';
import logoDewaweb from '../assets/logo-dewa-web.png';
import { media } from '../common/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  span {
    font-family: ${props => props.theme.font.jaapokki};
    font-weight: bold;
    text-transform: uppercase;
  }
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    .logo-Traveloka {
      margin: 1rem 0;
      height: ${props => props.theme.height.logo.large};
    }
    .logo-Dewaweb {
      margin: 1rem 0;
      height: ${props => props.theme.height.logo.large};
    }
  }
  ${media('mobile')} {
    .logo-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Footer = props =>
  <Container {...props}>
    <span>Sponsored By:</span>
    <div className="logo-container">
      <a href="https://www.traveloka.com">
        <img src={logoTraveloka} className="logo-Traveloka" alt="logo Traveloka" />
      </a>
      <a href="https://www.dewaweb.com">
        <img src={logoDewaweb} className="logo-Dewaweb" alt="logo Dewaweb" />
      </a>
    </div>
  </Container>;

export default Footer;
