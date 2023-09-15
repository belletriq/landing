import React from "react";

import LottiePlayer from "../../../../shared/Lottie";

import styles from "./index.module.scss";

import animationData from "../../../../../assets/lottie/hero-background.json";

function Background() {
  return (
    <div className={styles.container}>
      <LottiePlayer
        animationData={animationData}
        className={styles.animation}
        options={{ rendererSettings: { preserveAspectRatio: "xMidYMid slice" } }}
      />

      <div className={styles.blur} />
    </div>
  );
}

export default Background;
