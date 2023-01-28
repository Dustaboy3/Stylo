import React from "react";
import styles from "../../css/molecules/footer.module.css";
import CustomText from "../atoms/text";

function Footer() {
  return (
    <footer className={styles.footer} data-testid="footer">
      <CustomText
        id="footerTitle"
        testId="_footerTitle"
        fontSize="15px"
        color="#FFF"
        type="b"
        content="Stylo @2023"
      />
    </footer>
  );
}

export default Footer;
