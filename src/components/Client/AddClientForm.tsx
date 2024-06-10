import React from "react";
import Form from "../Forms/Form";
import { toast } from "react-toastify";
import { RequestModel, ClientModel } from "../../utils/RequestModel"; 
import { addNewClient } from "../../services/api.calls/clients.service";
import errorToaster from "../../utils/ErrorToaster";
import Loader from "../Loader";

const initialState: ClientModel.TNewClient = ClientModel.getDefaultClientData();

export default class AddClientForm extends Form {
  state: RequestModel.FormState<ClientModel.TNewClient, String> = {
    data: initialState,
    loading: false,
    isChecked: false,
    title: ["", "Mr", "Mrs", "Dr"],
    gender: ["", "Male", "Female"],
    typeOfId: ["Type Of ID", "National ID", "Driver License", "passport","male","female"],
    error: {},
  };

  doSubmit = async () => {
    try {
      const bankId = 'B001'; //SHOULD BE GOTTEN FROM THE AUTHENTICATED USER
      const operatorId = 'A001'; //SHOULD BE GOTTEN FROM THE AUTHENTICATED USER
       this.setState({ loading: true });
       const { data } = await addNewClient({ ...this.state.data, bankId, operatorId });
       toast(`${data.message} | ${data.code}`);
    } catch (error: any) {
        errorToaster(toast, error);
    } finally {
       this.setState({ loading: false });
    }
  };

  render() {
    return this.state.loading ? <Loader message={undefined} width={undefined} height={undefined}/> : (
      <React.Fragment>
        <div className="row bg-white p-2">
          <span>Dummy text goes here</span>
          <br />
          <br />
          <br />
          <form  onSubmit={this.handleSubmit} >
              <div className="row g-2">
              <div className="col-md-2">
              {this.renderSelect(
                  "title",
                  this.state.title,
                  "Title",
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
                  "gender",
                  this.state.gender,
                  "Gender",
                  "mb-3"
                )}
              </div>
              </div>
              <div className="row g-2">
              {this.renderInput(
                "date",
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
                  "typeOfId",
                  this.state.typeOfId,
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
                "number",
                "mobileNumber",
                "Enter Your Mobile Number",
                "Mobile Number",
                "mb-3 col-md-6"
              )}
            {this.renderInput(
                "number",
                "officePhone",
                "Enter Your Office phone Number (Optional)",
                "Office Phone Number",
                "mb-3 col-md-6"
              )}
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
                "emailId",
                "Enter Email Address",
                "Email Address",
                "mb-3 col-md-6"
              )}
            
            </div>
              <div className="row g-2">
             {this.renderInput(
                "text",
                "businessAddress",
                "Enter Your Business Address (Optional)",
                "Business Address",
                "mb-3 col-md-6"
              )}
          
            
              {this.renderInput(
                "text",
                "tinNumber",
                "Enter Tin Number (Optional)",
                "Tin Number",
                "mb-3 col-md-6"
              )}
              </div>
            {this.renderButton("Save Client Details")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
