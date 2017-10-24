import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { updateProfile, updatePassword } from '../../redux_modules/auth';
import { media } from '../../common/theme';
import Card from '../../components/Card';
import LoadingButtonComponent from '../../components/LoadingButtonComponent';
import { validateEmail } from '../../common/utils';
import { InputIcon } from '../../components/InputIcon';

const IPSC_RULEBOOK_URL = 'https://drive.google.com/ipsc';
const CITD_RULEBOOK_URL = 'https://drive.google.com/ipsc';
const UIUX_RULEBOOK_URL = 'https://drive.google.com/ipsc';
const CTF_RULEBOOK_URL = 'https://drive.google.com/ipsc';

@connect(
  state => ({
    auth: state.auth,
  }),
  { updateProfile },
)
export default class Competitions extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired,
  };

  static COMPETITIONS = {
    IPSC: {
      code: 'ipsc',
      title: 'Internal Problem Solving Competition',
    },
    CTF: {
      code: 'ctf',
      title: 'Capture the Flag',
    },
    CITD: {
      code: 'citd',
      title: 'Code in the Dark',
    },
    UIUX: {
      code: 'uiux',
      title: 'UI/UX',
    },
  };

  constructor() {
    super();
    this.state = {
      isClicked: false,
      active: {
        code: null,
        title: null,
      }
    };
  }

  setAsActive(competition) {
    this.setState({ active: competition, isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <Container>
          <Card width="100%">
            <span className="title">{this.state.active.title}</span>
          </Card>
        </Container>
      )
    }
    return (
      <Container>
        <Card>
          <span className="title">Capture The Flag</span>
          <button onClick={() => this.setAsActive(Competitions.COMPETITIONS.CTF)}>Join now</button>
          <a href={CTF_RULEBOOK_URL} target="_blank">
            Download Rulebook
          </a>
        </Card>
        <Card>
          <span className="title">Code In The Dark</span>
          <button onClick={() => this.setAsActive(Competitions.COMPETITIONS.CITD)}>Join now</button>
          <a href={CITD_RULEBOOK_URL} target="_blank">
            Download Rulebook
          </a>
        </Card>
        <Card>
          <span className="title">Internal Problem Solving Competition</span>
          <button onClick={() => this.setAsActive(Competitions.COMPETITIONS.IPSC)}>Join now</button>
          <a href={IPSC_RULEBOOK_URL} target="_blank">
            Download Rulebook
          </a>
        </Card>
        <Card>
          <span className="title">UI/UX</span>
          <button onClick={() => this.setAsActive(Competitions.COMPETITIONS.UIUX)}>Join now</button>
          <a href={UIUX_RULEBOOK_URL} target="_blank">
            Download Rulebook
          </a>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media('mobile')} {
    flex-direction: column;
  }
  ${Card} {
    border-radius: 0.5rem;
    flex-grow: 1;
    width: 40%;
    margin: 1rem 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    .title {
      text-transform: uppercase;
      font-family: ${props => props.theme.font.jaapokki};
      align-self: center;
      font-size: ${props => props.theme.size.font.medium};
    }
  }
`;
