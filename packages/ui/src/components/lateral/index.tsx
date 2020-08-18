import React from "react";
import { FaBeer } from "react-icons/fa";

// import { HeroProps, propTypes } from "./hero.types";
import Button from "../button";

import styles from "./lateral.module.scss";

const Lateral: React.FC<any> = props => {
  const { text } = props;

  return (
    <div data-testid="Lateral" className={styles.hero}>
      <Button Icon={FaBeer} />
    </div>
  );
};

// Lateral.propTypes = propTypes;

export default Lateral;
