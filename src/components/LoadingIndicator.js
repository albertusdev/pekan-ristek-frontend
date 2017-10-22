import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.color.blackTransparent(0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadein 1s;

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
