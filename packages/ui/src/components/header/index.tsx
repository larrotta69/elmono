import React from "react";
import PropTypes from "prop-types";

import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header data-testid="header" className={styles.header}>
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

Header.propTypes = {
  theme: PropTypes.string
};

export default Header;
