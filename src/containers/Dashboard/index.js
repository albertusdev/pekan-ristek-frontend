import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Competitions from './Competitions';
import Seminars from './Seminars';
import UserProfile from './UserProfile';
import LoadingIndicator from '../../components/LoadingIndicator';
import {
  COMPETITIONS,
  createDashboardPath,
  DASHBOARD_EDIT_PROFILE_PATH,
  SEMINARS,
} from '../../common/routing';

@connect(state => ({ auth: state.auth }))
export default class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  static INITIAL_STATE = {
    isCompetitionsActive: true,
    isSeminarsActive: false,
  };

  constructor() {
    super();
    this.state = { ...Dashboard.INITIAL_STATE };
  }

  componentDidMount() {
    this.setCategoryParamsAsActive(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setCategoryParamsAsActive(nextProps);
  }

  setCategoryParamsAsActive(props) {
    const user = props.auth.user;
    if (user && !user.email && !user.phone) {
      props.history.push(DASHBOARD_EDIT_PROFILE_PATH);
    }
    if (!('category' in props.match.params)) {
      if (user && user.is_internal) {
        props.history.push(createDashboardPath(COMPETITIONS));
      } else {
        props.history.push(createDashboardPath(SEMINARS));
      }
    } else if (props.match.params.category === SEMINARS) {
      this.setSeminarsActive();
    } else if (props.match.params.category === COMPETITIONS) {
      this.setCompetitionsActive();
      if (user && !user.is_internal) props.history.push(createDashboardPath(SEMINARS));
    }
  }

  setCompetitionsActive() {
    this.setState({ isCompetitionsActive: true, isSeminarsActive: false });
  }

  setSeminarsActive() {
    this.setState({ isCompetitionsActive: false, isSeminarsActive: true });
  }

  setActive(category) {
    if (category === COMPETITIONS) {
      this.setCompetitionsActive();
      this.props.history.push(createDashboardPath(COMPETITIONS));
    } else if (category === SEMINARS) {
      this.setSeminarsActive();
      this.props.history.push(createDashboardPath(SEMINARS));
    }
  }

  render() {
    const { user, loading } = this.props.auth;
    const { isCompetitionsActive, isSeminarsActive } = this.state;
    if (loading || !user) {
      return (
        <Container>
          <LoadingIndicator />
        </Container>
      );
    }
    return (
      <Container>
        <UserProfile history={this.props.history} />
        {user &&
          user.phone &&
          user.email && (
            <div className="playground-point-container">
              <div className="playground-point">
                <span className="title">YOUR POINT:</span>
                <span className="point">{user && user.curr_point}</span>
              </div>
              <Line />
            </div>
          )}
        <Nav>
          {user &&
            user.is_internal && (
              <NavItem
                onClick={() => this.setActive(COMPETITIONS)}
                exact
                to={createDashboardPath(COMPETITIONS)}
              >
                Competitions
              </NavItem>
            )}
          <NavItem
            onClick={() => this.setActive(SEMINARS)}
            exact
            to={createDashboardPath(SEMINARS)}
          >
            Seminars
          </NavItem>
        </Nav>
        {user &&
          user.is_internal &&
          user.phone &&
          user.email &&
          isCompetitionsActive && <Competitions />}
        {user && user.phone && user.email && isSeminarsActive && <Seminars />}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: spcae-between;
  background: ${props => props.theme.color.white};
  .playground-point-container {
    width: 100%;
  }
  .playground-point {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.font.jaapokki};
    .title {
      font-size: ${props => props.theme.size.font.medium};
    }
    .point {
      font-size: ${props => props.theme.size.font.jumbo};
    }
    padding: 1rem 0;
  }
`;

const Line = styled.div`
  border-bottom: solid 1px ${props => props.theme.color.black};
  width: 100%;
`;

const NavItem = styled(NavLink)`
  align-items: center;
  border-left: 0.4rem solid transparent;
  color: ${props => props.theme.color.black};
  display: flex;
  flex: 1 1 100%;
  font-family: ${props => props.theme.font.jaapokki};
  justify-content: center;
  letter-spacing: 0.08rem;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s;

  &.active {
    border-bottom: 0.3rem solid ${props => props.theme.color.yellowPR};
    color: ${props => props.theme.color.black};
    font-weight: bold;
  }

  &:hover,
  &:active {
    background-color: ${props => props.theme.color.yellowPR};
    color: ${props => props.theme.color.black};
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Nav = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 1rem 0;
`;
