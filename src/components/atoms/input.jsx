import { Input } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

function CustomInput(props) {
  var dataTestId = props.testId;
  if (!dataTestId) {
    dataTestId = "custom-input";
  } else {
    dataTestId = "custom-input" + props.testId;
  }
  return (
    <Input
      id={props.id}
      data-testid={dataTestId}
      placeholder={props.placeholder}
      size={props.size}
      variant={props.variant}
      focusBorderColor={props.focusBorderColor}
      color={props.color}
    />
  );
}

CustomInput.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  focusBorderColor: PropTypes.string,
  color: PropTypes.string,
};

export default CustomInput;
