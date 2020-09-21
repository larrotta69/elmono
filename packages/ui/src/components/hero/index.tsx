import React from "react";

import { HeroProps, propTypes } from "./hero.types";

import styles from "./hero.module.scss";

const Hero: React.FC<HeroProps> = props => {
  const { text, title } = props;

  return (
    <div data-testid="Hero" className={styles.hero}>
      <p className={styles.hero__text}>{text}</p>
      <h1 className={styles.hero__title}>{title}</h1>
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
