import React from "react";
import Form from "../Forms/Form";
import { RequestModel, ClientModel } from "../../utils/RequestModel"; 

export default class AddClientForm extends Form {
  state: RequestModel.FormState<ClientModel.TNewClient, String> = {
    data: {
      email: "",
      password: "",
      address: "",
      address2: "",
      city: "",
      zip: "",
      state: "",
    },
    loading: false,
    isChecked: false,
    dropdownValues: ["Abuja", "Tabara", "Lagos", "Ogun"],
    error: {},
  };

  doSubmit = async () => {
    //api
  };

  render() {
    return (
      <React.Fragment>
        <div className="row bg-white p-2">
          <h4>Any dummy text comes here.</h4>
          <br />
          <br />
          <br />
          <form>
            <div className="row g-2">
              {this.renderInput(
                "email",
                "email",
                "Enter Your Email",
                "Email",
                "mb-3 col-md-6"
              )}
              {this.renderInput(
                "password",
                "password",
                "Enter your password",
                "Password",
                "mb-3 col-md-6"
              )}
            </div>
            {this.renderInput(
              "text",
              "address",
              "Enter Your Address",
              "Address",
              "mb-3"
            )}
            {this.renderInput(
              "text",
              "address2",
              "Enter Your Other Address (Optional)",
              "Other Address",
              "mb-3"
            )}
            <div className="row g-2">
              {this.renderInput(
                "text",
                "city",
                "Enter Your City",
                "City",
                "mb-3 col-md-6"
              )}
              {this.renderSelect(
                "state",
                this.state.dropdownValues,
                "Select state",
                "mb-3 col-md-4"
              )}
              {this.renderInput(
                "text",
                "zip",
                "Enter Your Zip Code (Optional)",
                "Zip Code",
                "mb-3 col-md-2"
              )}
            </div>
            <div className="mb-2">{this.renderCheckbox("Check here")}</div>
            {this.renderButton("Submit Client")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
