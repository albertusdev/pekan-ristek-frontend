import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFormGroup = styled(FormGroup)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  input {
    height: 2.5rem;
  }

  .input-group-addon .glyphicon {
    font-size: 1.25rem;
    color: ${props => props.theme.color.black};
  }
  .input-group .form-control {
    z-index: 0;
  }
`;

const Label = styled(ControlLabel)`
  color: ${props => props.theme.color.black};
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
`;

function InputIcon(props) {
  return (
    <StyledFormGroup validationState={props.validationState}>
      <Label>{props.label}</Label>
      <FormControl
        {...props.name && { name: props.name }}
        {...props}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
      {!!props.help && <HelpBlock>{props.help}</HelpBlock>}
    </StyledFormGroup>
  );
}

InputIcon.defaultProps = {
  validationState: null,
  value: '',
  placeholder: null,
  name: null,
  help: null,
};

InputIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  validationState: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  help: PropTypes.string,
};

export default InputIcon;
