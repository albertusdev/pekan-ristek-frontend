import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { createTeam, loadTeam, joinTeam } from '../../redux_modules/competition';
import { media } from '../../common/theme';
import Card from '../../components/Card';
import InputIcon from '../../components/InputIcon';
import LoadingButtonComponent from '../../components/LoadingButtonComponent';
import LoadingIndicator from '../../components/LoadingIndicator';

// Assets
import logoCITD from '../../assets/logo-citd.png';
import logoIPSC from '../../assets/logo-ipsc.png';
import logoCTF from '../../assets/logo-ctf.png';
import logoUIUX from '../../assets/logo-uiux.png';

const IPSC_RULEBOOK_URL = 'https://drive.google.com/ipsc';
const CITD_RULEBOOK_URL = 'https://drive.google.com/ipsc';
const UIUX_RULEBOOK_URL = 'https://drive.google.com/ipsc';
const CTF_RULEBOOK_URL = 'https://drive.google.com/ipsc';

@connect(
  state => ({
    auth: state.auth,
    competition: state.competition,
  }),
  { createTeam, loadTeam, joinTeam }
)
export default class Competitions extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    competition: PropTypes.object.isRequired,
    // Redux Thunks
    createTeam: PropTypes.object.isRequired,
    loadTeam: PropTypes.object.isRequired,
    joinTeam: PropTypes.object.isRequired,
  };

  static COMPETITIONS = {
    IPSC: {
      code: 'ipsc',
      title: 'Internal Problem Solving Competition',
      logo: logoIPSC,
      rulebookURL: IPSC_RULEBOOK_URL,
    },
    CTF: {
      code: 'ctf',
      title: 'Capture the Flag with Dewaweb',
      logo: logoCTF,
      rulebookURL: CTF_RULEBOOK_URL,
    },
    CITD: {
      code: 'citd',
      title: 'Code in the Dark',
      logo: logoCITD,
      rulebookURL: CITD_RULEBOOK_URL,
    },
    UIUX: {
      code: 'uiux',
      title: 'UI/UX',
      logo: logoUIUX,
      rulebookURL: UIUX_RULEBOOK_URL,
    },
  };

  static INITIAL_STATE = {
    hasFocus: false,
    active: {
      code: null,
      title: null,
    },
    name: '',
    token: '',
    // Button Flags
    isJoinTeamButtonClicked: false,
    isCreateTeamButtonClicked: false,
  };

  constructor() {
    super();
    this.state = Object.assign({}, Competitions.INITIAL_STATE);
  }

  async setAsActive(competition) {
    this.setState({ active: competition, hasFocus: true });
    await this.props.loadTeam({ code: competition.code });
  }

  clearActive() {
    this.setState({
      ...Competitions.INITIAL_STATE,
    });
  }

  handleInputChange(event) {
    const { name: field, value } = event.target;
    this.setState({ [field]: value });
  }

  async submitJoinTeam(event) {
    event.preventDefault();
    this.setState({ isJoinTeamButtonClicked: true });
    await this.props.joinTeam({ token: this.state.token });
    this.setState({ isJoinTeamButtonClicked: false });
  }

  async submitCreateTeam(event) {
    event.preventDefault();
    this.setState({ isCreateTeamButtonClicked: true });
    await this.props.createTeam({ competition: this.state.active.code, name: this.state.name });
    this.setState({ isCreateTeamButtonClicked: false });
  }

  clickCreateTeam() {
    this.setState({ isCreateTeamButtonClicked: true });
  }

  clickJoinTeam() {
    this.setState({ isJoinTeamButtonClicked: true });
  }

  render() {
    const competition = Competitions.COMPETITIONS;
    const { hasFocus, isCreateTeamButtonClicked, isJoinTeamButtonClicked } = this.state;
    const { hasRegistered, loading } = this.props.competition;
    return (
      <Container>
        {!hasFocus &&
          Object.keys(competition).map(key =>
            <Card key={competition[key].title} width="25%">
              <div className="top">
                <img src={competition[key].logo} alt={`logo ${competition[key].title}`} />
                <span className="title">
                  {competition[key].title}
                </span>
              </div>
              <div className="bottom">
                <button
                  onClick={() => this.setAsActive({ ...competition[key] })}
                  disabled={loading}
                >
                  Join now
                </button>
                <a href={competition[key].rulebookURL} target="_blank">
                  <span>Download Rulebook</span>
                </a>
              </div>
            </Card>
          )}
        {hasFocus &&
          <Card className="solo" width="100%">
            <BackButton onClick={() => this.clearActive()}>
              <Glyphicon glyph="arrow-left" />
              <span>Back</span>
            </BackButton>
            <span className="title">
              {this.state.active.title}
            </span>
            {loading && <LoadingIndicator />}
            {hasRegistered &&
              !loading &&
              <div>
                <div className="alert-message">You have joined this competition</div>
                <div className="team-name">
                  {this.props.competition.name}
                </div>
                <div className="team-token">
                  Your token is: {this.props.competition.token}
                </div>
                <div className="team-members">
                  Team members:
                  {this.props.competition.members &&
                    this.props.competition.members.map(member =>
                    <div className="team-member">
                      {`${member.first_name} ${member.last_name}`}
                    </div>
                  )}
                </div>
              </div>}
            {!hasRegistered &&
              !loading &&
              !isCreateTeamButtonClicked &&
              !isJoinTeamButtonClicked &&
              <ButtonsContainer>
                <CreateTeamButton onClick={() => this.clickCreateTeam()}>Create Team</CreateTeamButton>
                <JoinTeamButton onClick={() => this.clickJoinTeam()}>Join Team</JoinTeamButton>
              </ButtonsContainer>}
            {!hasRegistered &&
              !loading &&
              isCreateTeamButtonClicked &&
              <Form>
                <StyledFormGroup>
                  <FormTitle>Create a team</FormTitle>
                  <Flex>
                    <FormControl
                      name="name"
                      onChange={e => this.handleInputChange(e)}
                      placeholder="enter team name here"
                      value={this.state.name}
                    />
                    <Button disabled={loading} onClick={e => this.submitCreateTeam(e)}>
                      {loading && <LoadingButtonComponent />}
                      {!loading && 'Submit'}
                    </Button>
                  </Flex>
                </StyledFormGroup>
              </Form>}
            {!hasRegistered &&
              !loading &&
              isJoinTeamButtonClicked &&
              <Form>
                <StyledFormGroup>
                  <FormTitle>Join a team</FormTitle>
                  <Flex>
                    <FormControl
                      name="token"
                      onChange={e => this.handleInputChange(e)}
                      placeholder="enter token team here"
                      value={this.state.token}
                    />
                    <Button disabled={loading} onClick={e => this.submitJoinTeam(e)}>
                      {loading && <LoadingButtonComponent />}
                      {!loading && 'Submit'}
                    </Button>
                  </Flex>
                </StyledFormGroup>
              </Form>}
          </Card>}
      </Container>
    );
  }
}

const BackButton = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.color.gray};
  display: flex;
  font-family: ${props => props.theme.font.jaapokki};
  font-size: ${props => props.theme.size.font.medium};
  margin: 1rem;
  > * {
    margin-right: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

const Container = styled(({ column, ...props }) => <div {...props} />)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  position: relative;
  ${props => props.column && 'flex-direction: column;'}
  ${media('mobile')} {
    flex-direction: column;
  }
  ${Card} {
    align-items: center;
    align-self: center;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    text-align: center;
    position: relative;
    .title {
      text-transform: uppercase;
      font-family: ${props => props.theme.font.jaapokki};
      align-self: center;
      font-size: ${props => props.theme.size.font.medium};
    }
    .top {
      display: flex;
      flex-direction: column;
      img {
        height: 5rem;
        align-self: center;
        object-fit: scale-down;
        margin: 2rem 0 1rem 0;
      }
      .title {
        align-self: stretch;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      button {
        border: none;
        background-color: ${props => props.theme.color.black};
        color: ${props => props.theme.color.white};
        padding: 0.5rem 0;
      }
      a {
        text-decoration: none;
        border: solid 1px ${props => props.theme.color.black};
        background-color: ${props => props.theme.color.white};
        color: ${props => props.theme.color.black};
        padding: 0.5rem;
        display: flex;
        align-items: center;
        span {
          flex-grow: 0;
        }
      }
    }
    @media screen and (min-width: ${props => props.theme.breakpoint.mobile}) {
      min-height: 24rem;      
    }
    ${media('mobile')} {
      width: 100%;
      border-radius: 0;
      margin-top: 1rem;
      align-items: flex-start;
      height: auto;
      .top {
        display: flex;
        flex-direction: row;
        align-self: flex-start;
        justify-content: flex-start;
        img {
          height: 2rem;
          align-self: center;
          object-fit: scale-down;
          margin: 0 1rem 0 0;
        }
        .title {
          flex-grow: 0;
          max-width: 100%;
          font-size: 1.25rem;
          text-align: left;
        }
      }
      .bottom {
        align-self: flex-end;
        min-height: auto;
        height: auto;
        margin-bottom: 1rem;
      }
    }
  }
  .solo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 3rem;
    width: 100%;
    border: none;
    .title {
      text-decoration: underline;
    }
  }
`;

const Flex = styled.div`display: flex;`;

const FormTitle = styled.div`
  align-self: flex-start;
  text-align: left;
  font-family: ${props => props.theme.font.jaapokki};
  font-size: ${props => props.theme.size.font.medium};
`;

const StyledFormGroup = styled(FormGroup)`
  color: ${props => props.theme.color.black};
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CreateTeamButton = styled.button`
  border: solid 1px ${props => props.theme.color.black};
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  &:focus {
    outline: none;
  }
  padding: 1rem 0;
  width: 100%;
`;

const JoinTeamButton = styled.button`
  border: none;
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  &:focus {
    outline: none;
  }
  padding: 1rem 0;
  width: 100%;
`;
