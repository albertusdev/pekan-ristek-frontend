import React from 'react';
import styled from 'styled-components';

const Button = styled(({ isActive, ...props }) => <button {...props} />)`
  background: ${props => props.theme.color.yellowUI};
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.color.black};
  display: flex;
  display: ${props => !props.isActive && 'none'};
  font-family: ${props => props.theme.font.helvetica};
  margin: 1rem 0;
  padding: 1rem 0;
  width: 50%;
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
    <span>Sign in with SSO</span>
  </Button>;

export default ButtonSSO;
