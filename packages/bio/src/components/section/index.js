import React from "react";
import PropTypes from "prop-types";

import styles from "./section.module.css";

const Section = ({ title, children }) => (
  <section className={styles.section}>
    {title && <p>{title}</p>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Section;
