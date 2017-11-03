import React from 'react';
import styled from 'styled-components';

const Button = styled(({ isActive, ...props }) => <button {...props} />)`
  background: ${props => props.theme.color.yellowPR};
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.color.white};
  display: flex;
  display: ${props => !props.isActive && 'none'};
  font-family: ${props => props.theme.font.jaapokki};
  font-size: 1.25rem;
  margin: 1rem 0;
  padding: 1rem;
  min-width: 5rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  transition: 0.3s;
`;

const ButtonSSO = props =>
  <Button {...props}>
    <span>Login With SSO</span>
  </Button>;

export default ButtonSSO;
