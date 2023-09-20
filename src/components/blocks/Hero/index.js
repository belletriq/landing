import React from "react";

import styles from "./index.module.scss";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>belletriq</h1>

          <p className={styles.description}>
            We are the Ukrainian based artistic community which unites likeminded people from all
            over the world. Belletriq produce, release music and high-quality sound FX.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
