import React from "react";
import { nanoid } from "nanoid";

import SvgIcon from "../../shared/SvgIcon";

import styles from "./index.module.scss";

function Hero() {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

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

        <SvgIcon type="arrow" className={styles.arrow} onClick={handleScroll} />
      </div>

      {Array(4)
        .fill(true)
        .map((el) => (
          <SvgIcon key={`${el}_${nanoid()}`} type="plus" className={styles.plus} />
        ))}
    </div>
  );
}

export default Hero;
