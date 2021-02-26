import PropTypes from "prop-types";

const Button = ({ text }) => {
  return <button className="btn">{text}</button>;
};

Button.defaultProps = {
  text: "Button",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
