import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";

import Loader from "../components/Loader";
import AuthFooter from "../components/AuthFooter";
import Form from "../components/Forms/Form";
import Background from "../assets/images/bg-pattern-light.svg";
import Logo from "../assets/images/Pawa-logo-removebg.png";
import { signup } from "../services/api.calls/auth.service";

import "../stylesheets/app.modern.min.css";
import "../stylesheets/icons.min.css";

class Signup extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      middleName: "",
      emailAddress: "",
      typeOfID: "",
      idNumber: "",
    },
    phone: "",
    loading: false,
    isChecked: false,
    idTypes: ["Type Of ID", "National ID", "Driver License", "passport"],
    error: {},
  };

  schema = {
    firstName: Joi.string().min(2).max(30).required().label("First Name"),
    lastName: Joi.string().min(3).max(30).required().label("Last Name"),
    middleName: Joi.string().min(3).max(30).label("Middle Name").allow(""),
    emailAddress: Joi.string().email().required().label("Email"),
    typeOfID: Joi.string().max(15).required().label("ID Type"),
    idNumber: Joi.string().max(20).required().label("ID Number"),
  };

  doToggle = async () => {};

  toggleCheck = () => this.setState({ isChecked: !this.state.isChecked });

  doSubmit = async () => {
    const userData = { ...this.state.data, mobilePhone: this.state.phone };
    if (this.state.isChecked) {
      try {
        this.setState({ loading: true });
        await signup(userData);
        localStorage.setItem("email", this.state.data.emailAddress);
        window.location = "/validate";
      } catch (error) {
        if (error.response && error.response.data && error.response.data.detail)
          toast.error(error.response.data.detail);
        else toast.error(error.response.data.message);
      } finally {
        this.setState({ loading: false });
      }
    } else {
      toast.error("Agree to the Terms and Conditions to proceed.");
    }
  };

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <div
          class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xxl-4 col-lg-5">
                <div class="card">
                  <div class="card-header pt-2 pb-2 text-center bg-primary">
                    <a href="#">
                      <span>
                        <img src={Logo} alt="" height="60" />
                      </span>
                    </a>
                  </div>

                  <div class="card-body p-4">
                    <div class="text-center w-75 m-auto">
                      <h4 class="text-dark-50 text-center mt-0 fw-bold">
                        Sign Up
                      </h4>
                      <p class="text-muted mb-4">
                        Don't have an account? Create your account, it takes
                        less than a minute{" "}
                      </p>
                    </div>

                    <form onSubmit={this.handleSubmit} id="signUpForm">
                      {this.renderInput(
                        "text",
                        "firstName",
                        "Enter your first name",
                        "First Name",
                        "mb-3"
                      )}

                      {this.renderInput(
                        "text",
                        "middleName",
                        "Enter your middle name",
                        "Middle Name (Optional)",
                        "mb-3"
                      )}

                      {this.renderInput(
                        "text",
                        "lastName",
                        "Enter your last name",
                        "Last Name ",
                        "mb-3"
                      )}

                      {this.renderInput(
                        "text",
                        "emailAddress",
                        "Enter your email address",
                        "Email Address ",
                        "mb-3"
                      )}

                      <div class="mb-3">
                        <label for="" class="form-label">
                          Phone Number
                        </label>
                        <PhoneInput
                          className="number"
                          country={localStorage.getItem("isocode") ?? "gh"}
                          value={this.state.phone}
                          onChange={(phone) => this.setState({ phone })}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>

                      <div class="row g-2">
                        {this.renderSelect(
                          "typeOfID",
                          this.state.idTypes,
                          "Select ID Type ",
                          "mb-3 col-md-5"
                        )}
                        <div class="mb-3 col-md-7">
                          {this.renderInput(
                            "text",
                            "idNumber",
                            "Enter ID Number",
                            "ID Number ",
                            "mb-3"
                          )}
                        </div>
                      </div>

                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            defaultChecked={this.state.isChecked}
                            onChange={this.toggleCheck}
                          />
                          <label class="form-check-label" for="checkbox-signup">
                            I accept{" "}
                            <a href="#" class="text-muted">
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div class="mb-3 text-center">
                        {this.renderButton("Sign Up")}
                      </div>
                    </form>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-12 text-center">
                    <p class="text-muted">
                      Already have account?{" "}
                      <Link to="/login" class="text-muted ms-1">
                        <b>Log In</b>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AuthFooter />
      </React.Fragment>
    );
  }
}

export default Signup;
