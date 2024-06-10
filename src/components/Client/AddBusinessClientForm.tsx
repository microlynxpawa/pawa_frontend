import React from "react";
import Form from "../Forms/Form";
import {toast} from "react-toastify";
import { RequestModel, BusinessClientModel } from "../../utils/RequestModel"; 
import { addNewBusinessClient } from "../../services/api.calls/clients.service";
import errorToaster from "../../utils/ErrorToaster";
import Loader from "../Loader";

const initialState: BusinessClientModel.TNewBusinessClient = BusinessClientModel.getDefaultBusinessClientData();

export default class AddBusinessClientForm extends Form {
  state: RequestModel.FormState<BusinessClientModel.TNewBusinessClient, String> = {
    data: initialState,
    loading: false,
    isChecked: false,
    error: {},
  };

  doSubmit = async () => {
    try {
      const bankId = 'B001'; //SHOULD BE GOTTEN FROM THE AUTHENTICATED USER
      const operatorId = 'A001'; //SHOULD BE GOTTEN FROM THE AUTHENTICATED USER
       this.setState({ loading: true });
       const { data } = await addNewBusinessClient({ ...this.state.data, bankId, operatorId });
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
          <form onSubmit={this.handleSubmit}>
               <div className="row g-2">
              {this.renderInput(
                "text",
                "clientName",
                "Enter Client Name",
                "Client Name",
                "mb-3 col-md-6"
              )}
               {this.renderInput(
                "text",
                "emailId1",
                "Enter Email ID 1",
                "Email ID 1",
                "mb-3 col-md-6"
              )}
              </div>
                  <div className="row g-2">
              {this.renderInput(
                "text",
                "emailId2",
                "Enter Email ID 2 (Optional)",
                "Email ID 2",
                "mb-3 col-md-6"
              )}
               {this.renderInput(
              "date",
              "registrationDate",
              "Enter Office Registration Date",
              "Registration Date",
              "mb-3 col-md-6"
               )}
            </div>
             <div className="row g-2">
            {this.renderInput(
              "text",
              "registrationNumber",
              "Enter Office Enter Registration Number (Optional)",
              "Registration Number",
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
              "Enter Your Address (Optional)",
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
              "Enter Office Phone 2 (Optional)",
              "Office Phone 2",
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
