import React from "react";
import { Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function CustomText(props) {
  var dataTestId = props.testId;
  if (!dataTestId) {
    dataTestId = "custom-text";
  } else {
    dataTestId = "custom-text" + props.testId;
  }
  return (
    <Text
      id={props.id}
      data-testid={dataTestId}
      fontSize={props.fontSize}
      color={props.color}
      as={props.type}
    >
      {props.content}
    </Text>
  );
}

CustomText.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.any,
};

export default CustomText;
