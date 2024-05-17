import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./Input";
import PhoneInput from "./PhoneInput";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    error: {},
    showPassword: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };

  handleCheckbox = (e) => {
    this.doToggle();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateInput(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ error, data });
  };

  validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  renderInput(type, name, placeholder, label, icon) {
    const { data, error, showPassword } = this.state;
    return (
      <Input
        name={name}
        type={showPassword ? "text" : type}
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

  renderSelect(name, options, label) {
    const { data, error } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
        value={data[name]}
        error={error[name]}
      />
    );
  }

  renderCheckbox() {
    return (
      <div class="form-check">
        <input
          type="checkbox"
          onChange={this.handleCheckbox}
          class="form-check-input"
          id="checkbox-signup"
        />
        <label class="form-check-label" for="checkbox-signup">
          I accept{" "}
          <a href="#" class="text-muted">
            Terms and Conditions
          </a>
        </label>
      </div>
    );
  }

  renderButton(label) {
    return (
      <button
        className={`btn btn-primary ${this.validate() && "disabled"}`}
        type="submit"
      >
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
