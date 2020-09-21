import React from "react";

import { HeaderProps, propTypes, defaultProps } from "./header.types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = props => {
  const { text, imgUrl, imgAlt } = props;

  return (
    <header data-testid="Header" className={styles.header}>
      {text && <p className={styles.header__text}>{text}</p>}
      <img className={styles.header__image} src={imgUrl} alt={imgAlt || text} />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
