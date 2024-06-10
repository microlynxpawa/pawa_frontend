import React from "react";
import Form from "../Forms/Form";
import { toast } from 'react-toastify';
import errorToaster from "../../utils/ErrorToaster";
import { RequestModel, GlAccountModel } from "../../utils/RequestModel"; 
import { getBankBranches } from "../../services/api.calls/banks.service";
import { addNewGLSetting } from "../../services/api.calls/glaccount.service";

const initialState: GlAccountModel.TGlAccount = GlAccountModel.getDefaulGLAccountData(); 

const bankId: string = 'B001'; //THIS WILL BE GOTTEN FROM LOGGED IN USER 

export default class AddGlAccountForm extends Form {
  state: RequestModel.FormState<GlAccountModel.TGlAccount, String> = {
    data: initialState,
    loading: false,
    dropdownValues: [],
    boolArray: ['Yes', 'No'],
    error: {},
  };

  async componentDidMount()  { 
    const { data } = await getBankBranches({ bankId })
    const branchIds = data.map((branch: any) => branch.ourBranchId);
    this.setState({ dropdownValues: ['', ...branchIds] })
   }

  doSubmit = async () => {
    try {
       this.setState({ loading: true });
       const { data } = await addNewGLSetting({ ...this.state.data, bankId});
       toast(`${data.message} | ${data.code}`);
    } catch (error: any) {
        errorToaster(toast, error);
    } finally {
       this.setState({ loading: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row bg-white p-2">
          <h4>Please Fill this form carefully to create a New General Ledger Account.</h4>
          <br />
          <br />
          <br />
          <form onSubmit={this.handleSubmit}>

          <div className="row g-2">
              <div className="col-md-2">
                {this.renderSelect(
                    "ourBranchId",
                    this.state.dropdownValues,
                    "Branch ID",
                    "mb-3"
                )}
                </div>
                {this.renderInput(
                  'text',
                "accountId",
                "Select Account ID",
                "Account ID",
                "mb-3 col-md-5"
                )}
                <div className="col-md-5">
                 {this.renderInput(
                "text",
                "accountName",
                "Enter Account Name",
                "Account Name",
                "mb-3"
              )}
            </div></div>
      
              <div className="row g-2">
                  {this.renderInput(
                    "text",
                    "accountDescription",
                    "Enter Account Description (Optional)",
                    "Account Description",
                    "mb-3 col-md-6"
                  )}
                {this.renderInput(
                  "text",
                  "accountType",
                  "Enter Account Type (Optional)",
                  "Account Type",
                  "mb-3 col-md-6"
                )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                    "text",
                    "operatorId",
                    "Enter Operator ID",
                    "Operator ID",
                    "mb-3 col-md-6"
                    )}
                {this.renderInput(
                "text",
                "currencyId",
                "Enter Currency ID (Optional)",
                "Currency ID",
                "mb-3 col-md-6"
                )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                      "number",
                      "openingBalance",
                      "Enter Opening Balance (Optional)" ,
                      "Opening Balance",
                      "mb-3 col-md-6"
                    )}
                  {this.renderInput(
                    "number",
                    "currentBalance",
                    "Enter current Balance (Optional)" ,
                    "Current Balance",
                    "mb-3 col-md-6"
                  )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                        "number",
                        "unSupervisedCredit",
                        "Enter Unsupervised Credit (Optional)" ,
                        "Unsupervised Credit",
                        "mb-3 col-md-6"
                    )}
                    {this.renderInput(
                    "number",
                    "unSupervisedDebit",
                    "Enter Unsupervised Debit (Optional)",
                    "Unsupervised Debit",
                    "mb-3 col-md-6"
                    )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                        "number",
                        "creditTurnOver",
                        "Enter Credit Turn Over (Optional)",
                        "Credit Turn Over",
                        "mb-3 col-md-6"
                    )}
                    {this.renderInput(
                    "number",
                    "debitTurnOver",
                    "Enter Debit Turn Over (Optional)",
                    "Debit Turn Over",
                    "mb-3 col-md-6"
                    )}
                </div>
                <div className="row g-2">
                    {this.renderSelect(
                        "doNotAllowCredit",
                        [{doNotAllowCredit: 'Yes'},{ doNotAllowCredit: 'No'}],
                        "Do Not Allow Credit (Optional)",
                        "mb-3 col-md-4"
                    )}
                    {this.renderSelect(
                        "doNotAllowDebit",
                        this.state.boolArray,
                        "Do Not Allow Debit (Optional)",
                        "mb-3 col-md-4"
                    )}
                    {this.renderSelect(
                        "isReconcilable",
                        this.state.boolArray,
                        "Is Reconcilable ? (Optional)",
                        "mb-3 col-md-4"
                    )}  
                </div>
           
            {/* <div className="mb-2">{this.renderCheckbox("Check here")}</div> */}
            {this.renderButton("Create G/L Account")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
