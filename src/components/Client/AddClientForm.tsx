import React from "react";
import Form from "../Forms/Form";
import PhoneInput from "../Forms/PhoneInput";
import { RequestModel, ClientModel } from "../../utils/RequestModel"; 

export default class AddClientForm extends Form {
  state: RequestModel.FormState<ClientModel.TNewClient, String> = {
    data: {
      title: "",
      clientName: "",
      gender: "",
      homeAddress: "",
      businessAddress: "",
      mobileNumber: "",
      officePhone: "",
      emailId: "",
      dateOfBirth: "",
      nationality: "",
      typeOfId: "",
      idNumber: "",
      tinNumber: "",
      operatorId: "",
    },
    loading: false,
    isChecked: false,
    dropdownValues: ["Type Of ID", "National ID", "Driver License", "passport","male","female"],
    error: {},
  };

  doSubmit = async () => {
    //api
  };

  render() {
    return (
      <React.Fragment>
        <div className="row bg-white p-2">
          <h4>Please Fill this form carefully to create a New Client.</h4>
          <br />
          <br />
          <br />
          <form>


              <div className="row g-2">
              <div className="col-md-2">
              {this.renderSelect(
                  "Title",
                  this.state.dropdownValues?.slice(-2),
                  "Select Title",
                  "mb-3"
                )}
              </div>
              {this.renderInput(
                "text",
                "clientName",
                "Enter Client Name",
                "Client Name",
                "mb-3 col-md-5"
              )}
            
            <div className="col-md-5">
                {this.renderSelect(
                  "Gender",
                  this.state.dropdownValues?.slice(-2),
                  "Select Gender",
                  "mb-3"
                )}
              </div>
              </div>
            <div className="row g-2">
            {this.renderInput(
              "text",
              "homeAddress",
              "Enter Your Home Address",
              "Home Address",
              "mb-3 col-md-6"
            )}
              {this.renderInput(
                "text",
                "businessAddress",
                "Enter Your Business Address",
                "Business Address",
                "mb-3 col-md-6"
              )}
            </div>
            <div className="row g-2">
            {this.renderInput(
                "text",
                "mobileNumber",
                "Enter Your Mobile Number",
                "Mobile Number",
                "mb-3 col-md-6"
              )}
            {this.renderInput(
                "text",
                "officePhone",
                "Enter Your Office phone Number",
                "Office Phone Number",
                "mb-3 col-md-6"
              )}
              </div>
              {this.renderInput(
                "text",
                "emailId",
                "Enter EmailId",
                "Email Id",
                "mb-3"
              )}
              <div className="row g-2">
              {this.renderInput(
                "text",
                "dateOfBirth",
                "Enter Your Date Of Birth",
                "Date Of Birth (YY-MM-DD)",
                "mb-3 col-md-6"
              )}
              {this.renderInput(
                "text",
                "nationality",
                "Enter Your Nationality",
                "Nationality",
                "mb-3 col-md-6"
              )}
              </div>
              <div className="row g-2">
                {this.renderSelect(
                  "typeOfID",
                  this.state.dropdownValues?.slice(0,4),
                  "Select ID Type ",
                  "mb-3 col-md-6"
                )}
                <div className="mb-3 col-md-6">
                  {this.renderInput(
                    "text",
                    "idNumber",
                    "Enter ID Number",
                    "ID Number ",
                  )}
                </div>
              </div>
              <div className="row g-2">
              {this.renderInput(
                "text",
                "tinNumber",
                "Enter Tin Number",
                "Tin Number",
                "mb-3 col-md-6"
              )}
              {this.renderInput(
                "text",
                "operatorId",
                "Enter Operator Id",
                "Operato Id",
                "mb-3 col-md-6"
              )}
              </div>
            {/* <div className="mb-2">{this.renderCheckbox("Check here")}</div> */}
            {this.renderButton("Create Client")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
