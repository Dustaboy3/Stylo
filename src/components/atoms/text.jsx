import React from "react";
import { Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function CustomText(props) {
  return (
    <Text
      data-testid="custom-text"
      fontSize={props.fontSize}
      color={props.color}
      as={props.type}
    >
      {props.content}
    </Text>
  );
}

CustomText.propTypes = {
  fontSize: PropTypes.shape({
    colorfontSizeScheme: PropTypes.string,
  }),
  color: PropTypes.shape({
    color: PropTypes.string,
  }),
  type: PropTypes.shape({
    as: PropTypes.string,
  }),
  content: PropTypes.shape({
    content: PropTypes.any,
  }),
};

export default CustomText;
