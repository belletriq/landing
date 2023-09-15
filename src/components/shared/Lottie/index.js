import React from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";

function LottiePlayer({ animationData, options, className }) {
  return <Lottie animationData={animationData} className={className} {...options} />;
}

LottiePlayer.propTypes = {
  animationData: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({}),
  className: PropTypes.string,
};

LottiePlayer.defaultProps = {
  options: {},
  className: "",
};

export default LottiePlayer;
