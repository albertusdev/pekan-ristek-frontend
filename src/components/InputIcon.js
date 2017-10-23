import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import styled from 'styled-components';

function InputIcon(props) {
  return (
    <StyledFormGroup validationState={props.validationState}>
      <Label>
        {props.label}
      </Label>
      <InputGroup>
        <FormControl
          {...props.name && { name: props.name }}
          {...props}
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
        />
      </InputGroup>
      {!!props.help &&
        <HelpBlock>
          {props.help}
        </HelpBlock>}
    </StyledFormGroup>
  );
}

const StyledFormGroup = styled(FormGroup)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  input {
    height: 2.5rem;
  }

  .input-group-addon .glyphicon {
    font-size: 1.25rem;
    color: ${props => props.theme.color.lightGray};
  }
  .input-group .form-control {
    z-index: 0;
  }
`;

const Label = styled(ControlLabel)`
  color: ${props => props.theme.color.lightGray};
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
`;

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
