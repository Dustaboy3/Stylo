import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

function CustomButton(props) {
  return (
    <Button
      data-testid="custom-button"
      colorScheme={props.color}
      size={props.size}
      variant={props.variant}
      leftIcon={props.lIcon}
      rightIcon={props.rIcon}
      _hover={{ bg: props.hover }}
      _active={{
        bg: props.active_bg,
        transform: "scale(0.90)",
        borderColor: props.active_border,
      }}
    >
      {props.content}
    </Button>
  );
}

CustomButton.propTypes = {
  color: PropTypes.shape({
    colorScheme: PropTypes.string,
  }),
  size: PropTypes.shape({
    size: PropTypes.string,
  }),
  variant: PropTypes.shape({
    variant: PropTypes.string,
  }),
  lIcon: PropTypes.shape({
    leftIcon: PropTypes.any,
  }),
  rIcon: PropTypes.shape({
    rightIcon: PropTypes.any,
  }),
  hover: PropTypes.shape({
    _hover: PropTypes.string,
  }),
  active_bg: PropTypes.shape({
    _active_bg: PropTypes.string,
  }),
  active_border: PropTypes.shape({
    _active_border: PropTypes.string,
  }),
  content: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default CustomButton;
