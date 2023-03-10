import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

function CustomButton(props) {
  var dataTestId = props.testId;
  if (!dataTestId) {
    dataTestId = "custom-button";
  } else {
    dataTestId = "custom-button" + props.testId;
  }
  return (
    <Button
      id={props.id}
      data-testid={dataTestId}
      colorScheme={props.color}
      size={props.size}
      variant={props.variant}
      leftIcon={props.lIcon}
      rightIcon={props.rIcon}
      _hover={{ bg: props.hover }}
      _active={{
        bg: props.activeBg,
        transform: "scale(0.90)",
        borderColor: props.activeBorder,
      }}
      height={props.height}
      width={props.width}
      border={props.border}
      borderColor={props.borderColor}
      fontSize={props.fontSize}
      zIndex={props.zIndex}
    >
      {props.content}
    </Button>
  );
}

CustomButton.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  lIcon: PropTypes.any,
  rIcon: PropTypes.any,
  hover: PropTypes.string,
  activeBg: PropTypes.string,
  activeBorder: PropTypes.string,
  content: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  zIndex: PropTypes.string,
};

export default CustomButton;
