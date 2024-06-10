import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({
  error,
  label,
  name,
  onChange,
  placeholder,
  type,
  classe,
  icon,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handlePswdDisplay = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div class={classe}>
      <label for={name} class="form-label">
        {label}&nbsp;
        {error && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {" "}
            {name !== "password_confirm" && error}
          </span>
        )}
      </label>
      {icon ? (
        <div class="input-group input-group-merge">
          <input
            class="form-control"
            type={showPassword ? "text" : type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />

          <div
            class="input-group-text"
            onClick={handlePswdDisplay}
            data-password="false"
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </div>
        </div>
      ) : (
        <input
          class="form-control"
          type={showPassword ? "text" : type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default Input;
