import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const data = [
  {
    title: "Business solution ",
    text: "Business solution text"
  },
  {
    title: "Business solution 1",
    text: "Business solution text"
  },
  {
    title: "Business solution 2",
    text: "Business solution text"
  }
];

const Footer = () => (
  <div className={styles.box}>
    {data.map(({ title, text }) => {
      return (
        <div key={title} className={styles.card}>
          <p>{title}</p>
          <span>{text}</span>
        </div>
      );
    })}
  </div>
);

export default Footer;
