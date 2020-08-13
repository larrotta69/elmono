import React from "react";

import { HeaderProps, propTypes } from "./header.types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = props => {
  const { text, imgUrl, imgAlt } = props;

  return (
    <header data-testid="header" className={styles.header}>
      <p>{text}</p>
      <img src={imgUrl} alt={imgAlt || text} />
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
