import React from 'react';
import styled from 'styled-components';
import { media } from '../common/theme';

const Card = styled(({ width, mobileWidth, height, mobileHeight, ...props }) => <div {...props} />)`
  background-color: ${props => props.theme.color.white};
  > * {
    padding: 0.2rem 1rem;
  }
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '100%'};
  border-radius: 2rem; 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  ${media('mobile')} {
    width: ${props => props.mobileWidth || '50%'};
    height: ${props => props.mobileHeight || '50%'};
  }
`;

export default Card;
