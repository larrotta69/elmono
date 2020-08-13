import React from "react";

import HeaderProps from "./header.types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = props => {
  return (
    <header data-testid="header" className={`${styles.header}`}>
      <h1 className="heading">I'm the test component</h1>
      <ul className="title-area right">
        <li className="name">
          <hgroup>
            <h1 className="site-title">
              <a href="#">
                <strong>Daniel Larrotta</strong>
                <span> Web Engineer </span>
                <small>Front End developer</small>
              </a>
            </h1>
          </hgroup>
        </li>
      </ul>
    </header>
  );
};

export default Header;
