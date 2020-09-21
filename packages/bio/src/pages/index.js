import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Box from "../components/box";
import styles from "./section.module.css";

const IndexPage = () => (
  <div className={styles.wrapper}>
    <Header />
    <section className={styles.section}>
      <h2>Our expert team</h2>
      <p>Texto dos</p>
    </section>
    <section className={styles.sectionSecondary}>
      <h3>Lorem ipsum</h3>
    </section>
    <Box />
    <Footer />
  </div>
);

export default IndexPage;
