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
    <div
      id={props.id}
      data-testid={dataTestId}
      className={styles.field + props.class}
    >
      <Custombutton
        id={props.id}
        testId={dataTestId}
        color={props.color}
        size={props.size}
        variant={props.variant}
        activeBg={props.activeBg}
        activeBorder={props.activeBorder}
        content={props.content}
      />
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  class: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  activeBg: PropTypes.string,
  activeBorder: PropTypes.string,
  content: PropTypes.string,
};

export default Field;
