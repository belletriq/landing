import React from "react";
import PropTypes from "prop-types";
import { NavLink as Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import styles from "./index.module.scss";

function NavLink({ path, type, text }) {
  const { hash } = useLocation();

  const getIsActive = () => {
    switch (type) {
      case "hash": {
        return path === hash;
      }

      default: {
        return false;
      }
    }
  };

  return (
    <Link to={path} className={classNames(styles.link, { [styles.link_active]: getIsActive() })}>
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
};

NavLink.defaultProps = {
  type: "",
  text: "",
};

export default NavLink;
