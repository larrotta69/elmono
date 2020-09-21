import React from "react";

import styles from "./hand.module.css";

const Finger = () => (
  <div className={styles.finger}>
    <div className={styles.fingerUp} />
    <div className={styles.fingerDown} />
  </div>
);

const Hand = () => (
  <div className={styles.hand}>
    <div className={styles.fingers}>
      <Finger />
      <Finger />
      <Finger />
      <Finger />
    </div>
    <div className={styles.palm}>
      <div className={styles.palmL} />
      <div className={styles.palmC} />
      <div className={styles.palmR} />
      <div className={styles.palmTop} />
      <div className={styles.palmBase} />
    </div>
    <div className={styles.base}>
      <div className={styles.baseRot}></div>
      <div className={styles.baseRotBase}></div>
      <div className={styles.baseTrunkL}></div>
      <div className={styles.baseTrunkR}></div>
      <div className={styles.baseBase}></div>
    </div>
  </div>
);

export default Hand;
