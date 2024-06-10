import React from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";

import Loader from "../components/Loader";
import AuthFooter from "../components/AuthFooter";
import Form from "../components/Forms/Form";
import Background from "../assets/images/bg-pattern-light.svg";
import Logo from "../assets/images/Pawa-logo-removebg.png";
import { signup } from "../services/api.calls/auth.service";
import { RequestModel, SignupModel } from "../utils/RequestModel"; 

import "../stylesheets/app.modern.min.css";
import "../stylesheets/icons.min.css";

const initialState: SignupModel.TSignup = SignupModel.getDefaultSignupData();

class Signup extends Form {
  state: RequestModel.FormState<SignupModel.TSignup, String> = {
    data: initialState,
    loading: false,
    isChecked: false,
    dropdownValues: ["Type Of ID", "National ID", "Driver License", "passport"],
    error: {},
  };

  doToggle = async () => {};

  toggleCheck = () => this.setState({ isChecked: !this.state.isChecked });

  doSubmit = async () => {
    const userData = { ...this.state.data };
    if (this.state.isChecked) {
      try {
        this.setState({ loading: true });
        await signup(userData);
        localStorage.setItem("email", this.state.data.emailAddress);
        window.location.href = "/validate";
      } catch (error: any) {
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
      <Loader message={undefined} width={undefined} height={undefined} />
    ) : (
      <React.Fragment>
        <div
          className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-lg-5">
                <div className="card">
                  <div className="card-header pt-2 pb-2 text-center bg-primary">
                    <a href="#">
                      <span>
                        <img src={Logo} alt="" height="60" />
                      </span>
                    </a>
                  </div>

                  <div className="card-body p-4">
                    <div className="text-center w-75 m-auto">
                      <h4 className="text-dark-50 text-center mt-0 fw-bold">
                        Sign Up
                      </h4>
                      <p className="text-muted mb-4">
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

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Phone Number
                        </label>
                        <PhoneInput
                          //className="number"
                          country={localStorage.getItem("isocode") ?? "gh"}
                          value={this.state.data.mobilePhone}
                          onChange={(mobilePhone) =>
                            this.setState({
                              data: { ...this.state.data, mobilePhone },
                            })
                          }
                          placeholder="Enter your phone number"
                          //required
                        />
                      </div>

                      <div className="row g-2">
                        {this.renderSelect(
                          "typeOfID",
                          this.state.dropdownValues,
                          "Select ID Type ",
                          "mb-3 col-md-5"
                        )}
                        <div className="mb-3 col-md-7">
                          {this.renderInput(
                            "text",
                            "idNumber",
                            "Enter ID Number",
                            "ID Number ",
                            "mb-3"
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            defaultChecked={this.state.isChecked}
                            onChange={this.toggleCheck}
                          />
                          <label className="form-check-label" htmlFor="checkbox-signup">
                            I accept{" "}
                            <a href="#" className="text-muted">
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="mb-3 text-center">
                        {this.renderButton("Sign Up")}
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Already have account?{" "}
                      <Link to="/login" className="text-muted ms-1">
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
