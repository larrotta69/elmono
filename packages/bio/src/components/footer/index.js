import React from "react";

import styles from "./section.module.css";

const data = {
  phone: "+57 ",
  name: "Oscar",
  email: "oskar@gmail.com"
};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerDivider}>Contact</div>
    <ul className={styles.footerData}>
      <li>{data.phone}</li>
      <li>{data.name}</li>
      <li>{data.email}</li>
    </ul>
  </footer>
);

export default Footer;
