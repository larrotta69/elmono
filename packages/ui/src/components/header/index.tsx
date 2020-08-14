import React from "react";

import { HeaderProps, propTypes } from "./header.types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = props => {
  const { text, imgUrl, imgAlt } = props;

  return (
    <header data-testid="Header" className={styles.header}>
      <p className={styles.header__text}>{text}</p>
      <img className={styles.header__image} src={imgUrl} alt={imgAlt || text} />
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
