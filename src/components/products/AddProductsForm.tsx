import React from "react";
import Form from "../Forms/Form";
import { ProductModel, RequestModel } from "../../utils/RequestModel"; 

export default class AddProductForm extends Form {
  state: RequestModel.FormState<ProductModel.TProduct, String> = {
    data: {
        productId: "",
        productName: "",
        productTypeId: "",
        accountIdPrefix: "",
        currencyId: "",
        creditInterestRate: "",
        debitInterestRate: "",
        creditInterestProcedure: "",
        debitInterestProcedure: "",
        debitInterestDays: "",
        creditInterestDays: "",
        creditInterestStart: "",
        debitInterestStart: "",
        creditInterestFrequency: "",
        debitInterestFrequency: "",
        minimumBalance: "",
        accountPerCustomer: "",
        isChequeBookAllowed: "",
        doNotAllowCredit: "",
        doNotAllowDebit: "",
        canGoInCredit: "",
        canGoInDebit: "",
        enforceBioAuthentication: "",
        dormantProductId: "",
        dormantDay: "",
        isBlocked: "",
        operatorId: "",
    },
    loading: false,
    isChecked: false,
    dropdownValues: ["YES", "NO"],
    error: {},
  };

  doSubmit = async () => {
    //api
  };

  render() {
    return (
      <React.Fragment>
        <div className="row bg-white p-2">
          <h4>Please Fill this form carefully to create a NewProduct.</h4>
          <br />
          <br />
          <br />
          <form>
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
                "productName",
                "Enter Product Name",
                "Product Name",
                "mb-3 col-md-5"
                )}
                {this.renderInput(
                "text",
                "productTypeId",
                "Enter Product Type ID",
                "Product Type ID",
                "mb-3 col-md-5"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                  "text",
                  "accountIdPrefix",
                  "Enter Account ID Prefix",
                  "Product Type ID",
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
                    "creditInterestRate",
                    "Enter Credit Interest Rate",
                    "Credit Interest Rate",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "debitInterestRate",
                    "Enter Debit Interest Rate",
                    "Debit Interest Rate",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "creditInterestProcedure",
                    "Enter Credit Interest Procedure",
                    "Credit Interest Procedure",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "debitInterestProcedure",
                    "Enter Debit Interest Procedure",
                    "Debit Interest Procedure",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "creditInterestDays",
                    "Enter Credit Interest Days",
                    "Credit Interest Days",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "debitInterestDays",
                    "Enter Debit Interest Days",
                    "Debit Interest Days",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "creditInterestStart",
                    "Enter Credit Interest Start",
                    "Credit Interest Start",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "debitInterestStart",
                    "Enter Debit Interest Start",
                    "Debit Interest Start",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "creditInterestFrequency",
                    "Enter Credit Interest Frequency",
                    "Credit Interest Frequency",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "debitInterestFrequency",
                    "Enter Debit Interest Frequency",
                    "Debit Interest Frequency",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "minimumBalance",
                    "Enter Minimum Balance",
                    "Minimum Balance",
                    "mb-3 col-md-5"
                )}
                {this.renderInput(
                    "text",
                    "accountPerCustomer",
                    "Enter Number of Account Per Customer",
                    "Account Per Customer",
                    "mb-3 col-md-5"
                )}
                {this.renderSelect(
                    "isChequeBookAllowed",
                    this.state.dropdownValues,
                    "Cheque Book ?",
                    "mb-3 col-md-2"
                )}
            </div>
            <div className="row g-2">
                {this.renderSelect(
                    "doNotAllowCredit",
                    this.state.dropdownValues,
                    "Allow Credit ?",
                    "mb-3 col-md-6"
                )}
                {this.renderSelect(
                    "doNotAllowDebit",
                    this.state.dropdownValues,
                    "Allow Debit ?",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderSelect(
                    "canGetInCredit",
                    this.state.dropdownValues,
                    "Can Go In Credit ?",
                    "mb-3 col-md-4"
                )}
                {this.renderSelect(
                    "canGetInDebit",
                    this.state.dropdownValues,
                    "Can Go In Debit ?",
                    "mb-3 col-md-4"
                )}
                {this.renderSelect(
                    "enforceBioAuthentication",
                    this.state.dropdownValues,
                    "Enforce Bio Authentication ?",
                    "mb-3 col-md-4"
                )}
            </div>
            <div className="row g-2">
                {this.renderInput(
                    "text",
                    "dormantProductId",
                    "Enter Dormant Product ID",
                    "Dormant Product ID",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "dormantDays",
                    "Enter Dormant Days",
                    "Dormant Days",
                    "mb-3 col-md-6"
                )}
            </div>
            <div className="row g-2">
                {this.renderSelect(
                    "isBlocked",
                    this.state.dropdownValues,
                    "Account Blocked ?",
                    "mb-3 col-md-6"
                )}
                {this.renderInput(
                    "text",
                    "operatorId",
                    "Enter Operator ID",
                    "Operator ID",
                    "mb-3 col-md-6"
                )}
            </div>
            {/* <div className="mb-2">{this.renderCheckbox("Check here")}</div> */}
            {this.renderButton("Create  Product")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
