import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { media } from '../../common/theme';

import Seminar from './Seminar';
import squares from '../../assets/squares.png';
import logoStoqo from '../../assets/logo-stoqo.png';
import logoDewaweb from '../../assets/logo-dewa-web.png';
import logoTraveloka from '../../assets/logo-traveloka.png';



const IPSC_RULEBOOK_URL = 'https://docs.google.com/document/d/1OqYcydn7CdQKQ-SLE1ERgwaYDiPehKwKYbCKi97f6qo/edit?usp=sharing';

export default class Seminars extends Component {
  async setAsActive(competition) {
    this.setState({ active: competition, hasFocus: true });
    await this.props.loadTeam({ code: competition.code });
  }

  clearActive() {
    this.setState({
      ...Seminars.INITIAL_STATE,
    });
  }

  handleInputChange(event) {
    const { name: field, value } = event.target;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <Container>
        <Seminar
          date="Monday, November 6th 2017"
          time="15.30 - 17.00"
          place="Aula Gedung B Fasilkom UI"
          title="The Amazon and McKinsey Way of Startup"
          speakers={[
            { name: 'Angky William', role: 'CTO' },
            { name: 'Natasha Benita', role: 'Head of Activation and Services' },
          ]}
          detail="Seminar that is presented by a first hand experienced in making a startup from their background as a worker in Amazon and Mckinsey & Company. To learn from them you can come on November 6, 2017 at 4:00 pm on Aula Gedung B, Fasilkom UI."
          rsvp="http://bit.ly/SeminarPR1"
          image={logoStoqo}
        />
        <Seminar
          date="Wednesday, November 8th 2017"
          time="15.30 - 17.00"
          place="Aula Gedung B Fasilkom UI"
          title="Utilizing Web To The Fullest"
          speakers={[{ name: 'Yohannes Affandy Siregar', role: 'Head of Business Development' }]}
          detail=""
          rsvp="http://bit.ly/SeminarPR2"
          image={logoDewaweb}
        />
        <Seminar
          date="Friday, November 10th 2017"
          time="15.30 - 17.00"
          place="Aula Gedung B Fasilkom UI"
          title="Marketing Through Technology"
          speakers={[
            { name: 'Aurora Marsye', role: 'Lead of Marketing Technology' },
            { name: 'Mohammad Awwaab Abdul Malik', role: 'Marketing Technology Analyst' },
          ]}
          detail=""
          rsvp="http://bit.ly/SeminarPR3"
          image={logoTraveloka}
        />
      </Container>
    );
  }
}
const Container = styled(({ column, ...props }) => <div {...props} />)`
  display: flex;
  margin-top: 1rem;
  position: relative;
  flex-direction: column;
  width: 100%;
  ${media('mobile')} {
    flex-direction: column;
  }
`;
