import React from "react";

import HeaderProps from "./header.types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`${styles.component} ${styles.component}--${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default Header;
