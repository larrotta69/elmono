import React from "react";
import PropTypes from "prop-types";

import Hand from "../drawings/hand";
import styles from "./styles.module.css";

const data = {
  name: "Biomedical",
  text: "Oscar"
};

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerCol}>
      <div className={styles.headerName}>{data.name}</div>
      <h1 className={styles.headerText}>{data.text}</h1>
    </div>
    <div className={styles.headerCol}>
      <Hand />
    </div>
  </header>
);

export default Header;
