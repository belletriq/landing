import React from "react";

import styles from "./index.module.scss";

function MainLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.content} />
    </div>
  );
}

export default MainLayout;
