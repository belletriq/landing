import React from "react";

import Background from "./molecules/Background";

import styles from "./index.module.scss";

function MainLayout({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>{children}</div>

      <Background />
    </main>
  );
}

export default MainLayout;
