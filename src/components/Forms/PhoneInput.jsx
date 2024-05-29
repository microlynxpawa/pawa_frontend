import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

// The phone input was created here  because it has scecific styles
export default function ({ error, label, name, placeholder, type }) {
  const [value, setValue] = useState();
  localStorage.setItem("phone", value);

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
      <PhoneInput
        defaultCountry={localStorage.getItem("isocode").toUpperCase() ?? "GH"}
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        required="required"
        type={type}
        onChange={setValue}
      />
    </div>
  );
}
