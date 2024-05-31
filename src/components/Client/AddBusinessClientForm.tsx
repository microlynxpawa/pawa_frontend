import React from "react";
import Form from "../Forms/Form";
import { RequestModel, BusinessClientModel } from "../../utils/RequestModel"; 

export default class AddBusinessClientForm extends Form {
  state: RequestModel.FormState<BusinessClientModel.TNewBusinessClient, String> = {
    data: {
        clientName: '',
        registeredAddress: '',
        officeAddress: '',
        officePhone1: '',
        officePhone2: '',
        emailId1: '',
        emailId2: '',
        registrationDate: '',
        registrationNumber: '',
        tinNumber: '',
        operatorId: '',
    },
    loading: false,
    isChecked: false,
    // dropdownValues: ["Abuja", "Tabara", "Lagos", "Ogun"],
    error: {},
  };

  doSubmit = async () => {
    //api
  };

  render() {
    return (
      <React.Fragment>
        <div className="row bg-white p-2">
          <h4>Please Fill this form carefully to create a New Business Client.</h4>
          <br />
          <br />
          <br />
          <form>
              {this.renderInput(
                "text",
                "clentName",
                "Enter Client Name",
                "Client Name",
                "mb-3"
              )}
            <div className="row g-2">
              {this.renderInput(
                "text",
                "registeredAddress",
                "Enter Address",
                "Registered Address",
                "mb-3 col-md-6"
              )}
            {this.renderInput(
              "text",
              "officeAddress",
              "Enter Your Address",
              "Office Address",
              "mb-3 col-md-6"
            )}
            </div>
            <div className="row g-2">
            {this.renderInput(
              "text",
              "officePhone1",
              "Enter Office Phone 1(Optional)",
              "Office Phone 1",
              "mb-3 col-md-6"
            )}
            {this.renderInput(
              "text",
              "officePhone2",
              "Enter Office Phone 2(Optional)",
              "Office Phone 2",
              "mb-3 col-md-6"
            )}
            </div>
             <div className="row g-2">
              {this.renderInput(
                "text",
                "emailId1",
                "Enter Email ID 1",
                "Email ID 1",
                "mb-3 col-md-6"
              )}
              {this.renderInput(
                "text",
                "emailId2",
                "Enter Email ID 2",
                "Email ID 2",
                "mb-3 col-md-6"
              )}
            </div>
            <div className="row g-2">
            {this.renderInput(
              "text",
              "registrationDate",
              "Enter Office Registration Date",
              "Registration Date",
              "mb-3 col-md-6"
            )}
            {this.renderInput(
              "text",
              "registrationNumber",
              "Enter Office Enter Registration Number",
              "Registration Number",
              "mb-3 col-md-6"
            )}
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
               "operatorID",
               "Enter Operator ID",
               "Operator ID",
               "mb-3 col-md-6"
             )}
           </div>
            {/* <div className="mb-2">{this.renderCheckbox("Check here")}</div> */}
            {this.renderButton("Create Business Client")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
