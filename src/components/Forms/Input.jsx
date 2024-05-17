import React, { useState } from "react";

function Input({ error, label, name, onChange, placeholder, type }) {
  const [showPassword] = useState(false);

  return (
    <div class="mb-3">
      <label for="" class="form-label">
        {label}&nbsp;
        {error && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {" "}
            {name !== "password_confirm" && error}
          </span>
        )}
      </label>
      <input
        class="form-control"
        type={showPassword ? "text" : type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
