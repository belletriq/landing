import React from "react";

import Background from "./molecules/Background";
import Header from "../../base/Header";

import styles from "./index.module.scss";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.content}>{children}</div>

        <Background />
      </main>
    </>
  );
}

export default MainLayout;
