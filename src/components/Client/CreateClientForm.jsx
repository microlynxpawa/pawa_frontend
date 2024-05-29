import React from "react";
import Joi from "joi-browser";
// import { toast } from "react-toastify";

// import Loader from "../components/Loader";
import Form from "../Forms/Form";

export default class CreateClientForm extends Form {
    // The variables in the state object are used to hold variables that will be used for state management or specific parameters for function
    //  that need initial values
    state = {
        data: {
            firstName: "",
            lastName: "",
            middleName: "",
            emailAddress: "",
        },
        error: {},
        loading: false
    }

    schema = {
        firstName: Joi.string().min().max().required().label("First Name"),
        lastName: Joi.string().min().max().required().label("lastName"),
        middleName: Joi.string().min().max().label("Middlename"),
        emailAddress: Joi.string().min().email().label("Email Address")
      };
    
    //   doSubmit = async () => {
    //     try {
    //       this.setState({ loading: true });
        //   const { data } = await login(this.state.data);
          //RETURN A TOKEN AFTER LOGIN IN THE DATA AND DECIDE HOW TO STORE IT. [TOKEN CONTAINS USER INFO LIKE BANKID]
    //       toast.success("Client created successfully ...");
    //       setTimeout(() => {
    //         window.location = "/home";
    //       }, 3000);
    //     } catch (error) {
    //       if (error.response && error.response.data && error.response.data.detail)
    //         toast.error(error.response.data.detail);
    //       else toast.error(error.response.data.message);
    //     } finally {
    //       this.setState({ loading: false });
    //     }
    //   };

    render() {
        // return this.state.loading ?
        // <Loader /> : (
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
                this.state.state,
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
        // )
}

};