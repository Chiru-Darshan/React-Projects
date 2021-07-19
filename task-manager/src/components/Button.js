import PropTypes from "prop-types";

const Button = ({ color, text, onAdd }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {" "}
      {text}{" "}
    </button>
  );
};

Button.defaultPropTypes = {
  color: "black",
};

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
