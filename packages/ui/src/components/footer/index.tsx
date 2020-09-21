import React from "react";

import { FooterProps, propTypes } from "./footer.types";

import styles from "./footer.module.scss";

const Footer: React.FC<FooterProps> = props => {
  const { imgUrl, imgAlt } = props;

  return (
    <footer data-testid="footer" className={styles.footer}>
      <img
        className={styles.footer__image}
        src={imgUrl}
        alt={imgAlt || "footer image"}
      />
    </footer>
  );
};

Footer.propTypes = propTypes;

export default Footer;
