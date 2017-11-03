import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { media } from '../../common/theme';
import Card from '../../components/Card';
import squares from '../../assets/squares.png';

export default class Seminar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    rsvp: PropTypes.string.isRequired,
    speakers: PropTypes.array.isRequired,
    image: PropTypes.string,
  };

  static defaultProps = {
    image: squares,
  };

  static INITIAL_STATE = {
    hasFocus: false,
  };

  constructor() {
    super();
    this.state = { ...Seminar.INITIAL_STATE };
  }

  render() {
    return (
      <Column>
        <Container>
          <Row className="date">{this.props.date}</Row>
          <Row>
            <div className="left">
              <img src={this.props.image} alt="seminar-image" />
            </div>
            <div className="right">
              <div className="title">{`"${this.props.title}"`}</div>
              <div className="speakers">
                {this.props.speakers.map(speaker =>
                  <div className="speaker" key={speaker.name}>
                    <strong>{speaker.name}</strong> - {speaker.role}
                  </div>)}
              </div>
              <ButtonsContainer>
                <Link href={this.props.rsvp} target="_blank">
                  REGISTER
                </Link>
                <Button onClick={() => this.setState({ hasFocus: true })}>MORE INFO</Button>
              </ButtonsContainer>
            </div>
          </Row>
        </Container>
        {this.state.hasFocus && (
          <Container>
            <Row className="time">{`${this.props.time}, ${this.props.place}`}</Row>
            <div className="detail">{this.props.detail}</div>
          </Container>)}
      </Column>
    );
  }
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${media('mobile')} {
    flex-direction: column;
  }
`;

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  .date,
  .time,
  .place {
    align-self: center;
    width: 100%;
    font-weight: 650;
    font-size: 1.25rem;
    background-color: ${props => props.theme.color.lightGray};
  }
  .detail {
    text-align: left;
    font-size: 1.25rem;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    img {
      width: 8rem;
      object-fit: scale-down;
    }
    ${media('mobile')} {
      margin: 1rem 0;
    }
  }
  .right {
    display: flex;
    flex: 2;
    flex-direction: column;
    .title {
      align-self: flex-start;
      font-weight: bold;
      font-size: ${props => props.theme.size.font.medium};
      font-family: ${props => props.theme.font.helvetica};
    }
    .date {
      text-transform: uppercase;
      font-size: 1rem;
    }
    .speakers {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${media('mobile')} {
        align-items: center;
        justify-content: center;
      }
    }
    .speaker {
      font-size: 1.1rem;
      font-family: ${props => props.theme.font.helvetica};
      color: ${props => props.theme.color.gray};
      .name {
        font-weight: bold;
      }
    }
  }
  ${media('mobile')} {
    flex-direction: column;
  }
  margin: 1rem 0;
`;

const Button = styled.button`
  background: ${props => props.theme.color.blue};
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.color.white};
  display: flex;
  font-family: ${props => props.theme.font.jaapokki};
  font-size: 1.25rem;
  padding: 1rem;
  min-width: 5rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }
  transition: 0.3s;
`;

const Link = styled.a`
  background: ${props => props.theme.color.yellowPR};
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme.color.white};
  display: flex;
  font-family: ${props => props.theme.font.jaapokki};
  font-size: 1.25rem;
  padding: 1rem;
  min-width: 5rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }
  transition: 0.3s;
`;

const ButtonsContainer = styled.div`
  display: flex;
  button {
    margin-left: 1rem;
  }
  margin: 1rem 0;
  ${media('mobile')} {
    flex-direction: column;
    align-items: center;
    button {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;
