import React from "react";
import Form from "../Forms/Form";
import { RequestModel, GlAccountModel } from "../../utils/RequestModel"; 

export default class AddGlAccountForm extends Form {
  state: RequestModel.FormState<GlAccountModel.TGlAccount, String> = {
    data: {
        ourBranchId: "",
        accountId: "",
        accountName: "",
        accountDescription: "",
        accountType: "",
        currencyId: "",
        openingBalance: "",
        currentBalance: "",
        unSupervisedCredit: "",
        unSupervisedDebit: "",
        creditTurnOver: "",
        debitTurnOver: "",
        doNotAllowCredit: "",
        doNotAllowDebit: "",
        isReconcilable: "",
        operatorId: "",
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
          <h4>Please Fill this form carefully to create a New General Ledger Account.</h4>
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
                    "accountDescription",
                    "Enter Account Description",
                    "Account Description",
                    "mb-3 col-md-6"
                  )}
                {this.renderInput(
                  "text",
                  "accountType",
                  "Enter Account Type",
                  "Account Type",
                  "mb-3 col-md-6"
                )}
                </div>
                <div className="row g-2">
                {this.renderInput(
                    "text",
                    "currencyType",
                    "Enter Currency Type",
                    "Currency Type",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                "text",
                "currencyId",
                "Enter Currency ID",
                "Currency ID",
                "mb-3 col-md-6"
                )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                      "text",
                      "openingBalance",
                      "Enter Opening Balance",
                      "Opening Balance",
                      "mb-3 col-md-6"
                    )}
                  {this.renderInput(
                    "text",
                    "currentBalance",
                    "Enter current Balance",
                    "Current Balance",
                    "mb-3 col-md-6"
                  )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                        "text",
                        "unSupervisedCredit",
                        "Enter Unsupervised Credit",
                        "Unsupervised Credit",
                        "mb-3 col-md-6"
                    )}
                    {this.renderInput(
                    "text",
                    "unSupervisedDebit",
                    "Enter Unsupervised Debit",
                    "Unsupervised Debit",
                    "mb-3 col-md-6"
                    )}
                </div>
                <div className="row g-2">
                    {this.renderInput(
                        "text",
                        "creditTurnOver",
                        "Enter Credit Turn Over",
                        "Credit Turn Over",
                        "mb-3 col-md-6"
                    )}
                    {this.renderInput(
                    "text",
                    "debitTurnOver",
                    "Enter Debit Turn Over",
                    "Debit Turn Over",
                    "mb-3 col-md-6"
                    )}
                </div>
                <div className="row g-2">
                    {this.renderSelect(
                        "doNotAllowCredit",
                        this.state.dropdownValues,
                        "Allow Credit ?",
                        "mb-3 col-md-4"
                    )}
                    {this.renderSelect(
                        "doNotAllowDebit",
                        this.state.dropdownValues,
                        "Allow Debit ?",
                        "mb-3 col-md-4"
                    )}
                    {this.renderSelect(
                        "isReconciliable",
                        this.state.dropdownValues,
                        "Reconcilable ?",
                        "mb-3 col-md-4"
                    )}  
                </div>
                {this.renderInput(
                    "text",
                    "operatorId",
                    "Enter Operator ID",
                    "Operator ID",
                    "mb-3"
                    )}
            {/* <div className="mb-2">{this.renderCheckbox("Check here")}</div> */}
            {this.renderButton("Create G/L Account")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
