import React from "react";
// import { HeroProps, propTypes } from "./hero.types";

import styles from "./button.module.scss";
import classNames from "classnames";

const disabledHandler = event => {
  event.preventDefault();
  return false;
};

const Button: React.FC<any> = props => {
  const { text, Icon, disabled, onClick, type } = props;
  const clickHandler = disabled ? disabledHandler : onClick;
  const allClasses = classNames({
    [`${styles.button}`]: text,
    [`${styles.icon}`]: !text
  });
  return (
    <button
      data-testid="Button"
      className={allClasses}
      type={type}
      onClick={clickHandler}
    >
      {!!Icon && <Icon />}
      {!!text && <span className={styles.button__text}>{text}</span>}
    </button>
  );
};

// Button.propTypes = propTypes;

export default Button;
