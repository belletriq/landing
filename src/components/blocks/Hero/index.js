import React from "react";
import { nanoid } from "nanoid";

import SvgIcon from "../../shared/SvgIcon";

import styles from "./index.module.scss";
import HEADER_NAV_ITEMS from "../../../utils/constants/header";
import NavLink from "../../shared/NavLink";

function Hero() {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          {Object.values(HEADER_NAV_ITEMS).map(({ path, title, type }) => (
            <NavLink key={path} path={path} type={type} text={title} />
          ))}
        </nav>

        <div className={styles.text}>
          <h1 className={styles.title}>belletriq</h1>

          <p className={styles.description}>
            We are the Ukrainian based artistic community which unites likeminded people from all
            over the world. Belletriq produce, release music and high-quality sound FX.
          </p>

          <SvgIcon type="arrow" className={styles.arrow} onClick={handleScroll} />
        </div>
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
