import React from "react";
import styles from "../../css/molecules/header.module.css";
import CustomText from "../atoms/text";

function Header() {
  return (
    <header className={styles.header} data-testid="header">
      <CustomText
        id="headerTitle"
        testId="_headerTitle"
        className={styles.headerText}
        fontSize="40px"
        color="#FFF"
        type="b"
        content="Stylo"
      />
    </header>
  );
}

export default Header;
