import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import HEADER_NAV_ITEMS from "../../../utils/constants/header";

import styles from "./index.module.scss";

function Header() {
  const { hash } = useLocation();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.navContainer}>
          <div className={styles.menuButton} />

          <nav className={styles.nav}>
            {Object.values(HEADER_NAV_ITEMS).map(({ path, title }) => (
              <NavLink
                key={path}
                to={path}
                className={classNames(styles.link, { [styles.link_active]: path === hash })}
              >
                {title}
              </NavLink>
            ))}
          </nav>

          <div className={styles.menuButton} />
        </div>

        <p className={styles.title}>music</p>
      </div>
    </header>
  );
}

export default Header;
