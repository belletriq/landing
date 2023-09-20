import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

function BlockLayout({ variant, children }) {
  return (
    <section className={classNames(styles.container, styles[`container_${variant}`])}>
      <div className={classNames(styles.content, styles[variant])}>{children}</div>
    </section>
  );
}

BlockLayout.propTypes = {
  variant: PropTypes.string,
};

BlockLayout.defaultProps = {
  variant: "fullscreen",
};

export default BlockLayout;
