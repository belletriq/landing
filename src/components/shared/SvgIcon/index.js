import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";

function SvgIcon({ type, className, onClick }) {
  const SVG_BY_TYPE = {
    arrow: Arrow,
    plus: Plus,
  };

  const SvgComponent = SVG_BY_TYPE[type] || "svg";

  return <SvgComponent className={className} onClick={onClick} />;
}

SvgIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SvgIcon.defaultProps = {
  className: "",
  onClick: () => {},
};

export default SvgIcon;
