import React from "react";
import Form from "../Forms/Form";
import { RequestModel, AccountModel } from "../../utils/RequestModel"; 

export default class CreateAccountForm extends Form {
  state: RequestModel.FormState<AccountModel.TAccount, String> = {
    data: {
        ourBranchId: "",
        accountId: "",
        accountName: "",
        clientId: "",
        productId: "",
        dateOpened: "",
        operatingMode: "",
        authenticationId: ""
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
          <h4>Please Fill this form carefully to create an Account.</h4>
          <br />
          <br />
          <br />
          <form>
            <div className="row g-2">
                {this.renderSelect(
                  "ourBranchId",
                  this.state.dropdownValues,
                  "Select Branch ID",
                  "mb-3 col-md-2"


                )}
                {this.renderInput(
                  "text",
                  "accountId",
                  "Enter Account ID",
                  "Account ID",
                  "mb-3 col-md-5"
                )}
                {this.renderInput(
                  "text",
                  "accountName",
                  "Enter Account Name",
                  "Account Name",
                  "mb-3 col-md-5"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "clientId",
                    "Enter Client ID",
                    "Client ID",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                "text",
                "productID",
                "Enter Product ID",
                "Product ID",
                "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "dateOpened",
                    "Enter Opening Date",
                    "Opening Date",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                "text",
                "operatingMode",
                "Enter Operating Mode",
                "Operating Mode",
                "mb-3 col-md-6"
                )}
            </div>
                {this.renderInput(
                    "text",
                    "authenticationId",
                    "Enter Authentication ID",
                    "Authentication ID",
                    "mb-3"
                )}
            {/* <div className="mb-2">{this.renderCheckbox("Check here")}</div> */}
            {this.renderButton("Create Account")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}