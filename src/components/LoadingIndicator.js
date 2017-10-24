import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  animation: fadein 1s;
  background: ${props => props.theme.color.blackTransparent(0.25)};
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function LoadingIndicator(props) {
  return (
    <Container className={props.className}>
      <Spinner name="folding-cube" fadeIn="none" />
    </Container>
  );
}

LoadingIndicator.propTypes = {
  className: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  className: null,
};
