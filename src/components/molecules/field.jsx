import React from "react";
import styles from "../../css/molecules/field.module.css";
import Custombutton from "../atoms/button";
import PropTypes from "prop-types";

function Field(props) {
  var dataTestId = props.testId;
  if (!dataTestId) {
    dataTestId = "custom-field";
  } else {
    dataTestId = "custom-field" + props.testId;
  }
  return (
    <div id={props.id} data-testid={dataTestId} className={styles.field}>
      <Custombutton
        id={props.id + "-button"}
        testId={dataTestId}
        color={props.color}
        size={props.size}
        variant={props.variant}
        activeBg={props.activeBg}
        activeBorder={props.activeBorder}
        content={props.content}
        height={props.height}
        width={props.width}
        border={props.border}
        borderColor={props.borderColor}
        fontSize={props.fontSize}
      />
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  activeBg: PropTypes.string,
  activeBorder: PropTypes.string,
  content: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Field;
