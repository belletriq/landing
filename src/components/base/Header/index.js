import React from "react";

import HEADER_NAV_ITEMS from "../../../utils/constants/header";

import NavLink from "../../shared/NavLink";

import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <p className={styles.desktopTitle}>belletriq</p>

        <div className={styles.navContainer}>
          <div className={styles.buttonCorner} />

          <nav className={styles.nav}>
            {Object.values(HEADER_NAV_ITEMS).map(({ path, title, type }) => (
              <NavLink key={path} path={path} type={type} text={title} />
            ))}
          </nav>

          <div className={styles.buttonCorner} />
        </div>

        <p className={styles.mobileTitle}>music</p>

        <p className={styles.desktopTitle}>btq music</p>
      </div>

      <div className={styles.rightBorder} />
    </header>
  );
}

export default Header;
