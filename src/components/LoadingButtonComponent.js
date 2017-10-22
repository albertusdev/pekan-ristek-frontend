import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > &:last-child {
    margin-left: 1rem;
  }
`;

export default function LoadingButtonComponent({ children, ...props }) {
  return (
    <Container {...props}>
      <Spinner name="circle" fadeIn="none" />
      {children}
    </Container>
  );
}

LoadingButtonComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

LoadingButtonComponent.defaultProps = {
  className: null,
  children: 'Loading',
};
