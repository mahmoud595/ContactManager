import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
function TextInputGroup({
  type,
  name,
  placeholder,
  label,
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id=""
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        // required
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextInputGroup.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
TextInputGroup.defaultProps = {
  type: "text",
};
export default TextInputGroup;
