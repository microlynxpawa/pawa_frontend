import React, { Component } from 'react';
import Form from "../Forms/Form";
import {toast} from "react-toastify";
import { RequestModel, GLSettingsModel } from "../../utils/RequestModel"; 
import { addNewGLSetting } from '../../services/api.calls/product.service';
import errorToaster from "../../utils/ErrorToaster";
import Loader from "../Loader";

const initialState: GLSettingsModel.TNewGLSettings = GLSettingsModel.getDefaulGLSettingsData();


export default class AddGLSettingsForm extends Form {
    state: RequestModel.FormState<GLSettingsModel.TNewGLSettings, String> = {
    data: {
        productId: "",
      ourBranchId: "",
      settingId: 0,
      gLAccountId: "",
      createdBy: "",
    },
    loading: false,
    error: {},
  };

    doSubmit = async () => {
        try {
      const bankId = 'B001'; //SHOULD BE GOTTEN FROM THE AUTHENTICATED USER
      const createdBy = 'user'; //SHOULD BE GOTTEN FROM THE AUTHENTICATED USER
       this.setState({ loading: true });
       const { data } = await addNewGLSetting({ ...this.state.data, bankId, createdBy});
       toast(`${data.message} | ${data.code}`);
    } catch (error: any) {
        errorToaster(toast, error);
    } finally {
       this.setState({ loading: false });
    }
    }

  render() {
    return (
      this.state.loading ? <Loader message={undefined} width={undefined} height={undefined}/> : 
      <React.Fragment>
        <div className="row bg-white p-2">
          <h4>New GL Setting creation.</h4>
          <br />
          <br />
          <br />
          <form onSubmit={this.handleSubmit}>
          <div className="row g-2">
              {this.renderInput(
                "text",
                "productId",
                "Enter Product ID",
                "Product ID",
                "mb-3 col-md-2"
                )}
                {this.renderInput(
                "text",
                "ourBranchId",
                "Enter Branch ID",
                "Branch ID",
                "mb-3 col-md-5"
                )}
                {this.renderInput(
                "number",
                "settingId",
                "Enter Setting ID",
                "Setting ID",
                "mb-3 col-md-5"
                )}
            </div>
            <div className="row g-2">
                   {this.renderInput(
                "text",
                "gLAccountId",
                "Enter GL Account ID",
                "GL Account ID",
                "mb-3 col-md-5"
                )}
            </div><br/>
             { this.renderButton('Add GL Setting') }
            </form>
            </div>
      </React.Fragment>
    )
  }
}
