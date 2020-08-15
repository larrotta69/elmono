import React from "react";
import Head from "next/head";

import { Header, Hero } from "@elmono/ui";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        text="Daniel Larrotta"
        imgUrl="https://larrotta69.github.io/app/img/tigre_50.png"
      />
      <Hero text="Heroo" />
      <main className={styles.main}></main>
    </div>
  );
}
