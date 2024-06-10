import React from "react";

export default function Select({
  name,
  label,
  options,
  onChange,
  value,
  classe,
  error,
}) {
  return (
    <div class={classe}>
      <label for="inputState" class="form-label">
        {label}{" "}
        {error && (
          <span
            classNameName="input-instruction"
            style={{ color: "red", fontSize: "12px" }}
          >
            {name !== "password_confirm" && error}
          </span>
        )}
      </label>
      <select
        name={name}
        options={options}
        onChange={onChange}
        value={value}
        className="form-select"
      >
        {options.map((option) =>
          option[name] ? (
            <option key={option[name]} value={option[name]}>
              {option[name]}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );
}
