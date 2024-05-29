import React, { Component } from "react";

import Input from "./Input";
import PhoneInput from "./PhoneInput";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  handleCheckbox = (e) => {
    this.doToggle();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderInput(type, name, placeholder, label, classe, icon) {
    const { data, error } = this.state;
    return (
      <Input
        name={name}
        type={data["showPassword"] ? "text" : type}
        classe={classe}
        label={label}
        icon={icon}
        value={data[name]}
        error={error[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }

  renderPhoneInput(type, name, placeholder, label) {
    const { error } = this.state;
    return (
      <PhoneInput
        name={name}
        type={type}
        label={label}
        error={error[name]}
        placeholder={placeholder}
      />
    );
  }

  renderSelect(name, options, label, classe) {
    const { data, error } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
        value={data[name]}
        classe={classe}
        error={error[name]}
      />
    );
  }

  renderCheckbox(label) {
    return (
      <div class="form-check">
        <input
          type="checkbox"
          onChange={this.handleCheckbox}
          class="form-check-input"
          id="checkbox-signup"
        />
        {label ? (
          <label class="form-check-label" for="checkbox-signup">
            {label}
          </label>
        ) : (
          <label class="form-check-label" for="checkbox-signup">
            I accept{" "}
            <a href="#" class="text-muted">
              Terms and Conditions
            </a>
          </label>
        )}
      </div>
    );
  }

  renderButton(label) {
    return (
      <button className={`btn btn-primary`} type="submit">
        {" "}
        {label}
      </button>
    );
  }

  render() {
    return;
  }
}

export default Form;
