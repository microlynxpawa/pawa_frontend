import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "../components/Loader";
import Form from "../components/Forms/Form";
import Background from "../assets/images/bg-pattern-light.svg";
import Logo from "../assets/images/Pawa-logo-removebg.png";
import { login } from "../services/api.calls/auth.service";
import AuthFooter from "../components/AuthFooter";
import  { RequestModel, LoginModel } from "../utils/RequestModel";

import "../stylesheets/app.modern.min.css";
import "../stylesheets/icons.min.css";

export default class Login extends Form {
  state: RequestModel.FormState<LoginModel.TLogin, undefined> = {
    data: {
      emailAddress: "",
      password: "",
    },
    loading: false,
    error: {},
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await login(this.state.data);
      //RETURN A TOKEN AFTER LOGIN IN THE DATA AND DECIDE HOW TO STORE IT. [TOKEN CONTAINS USER INFO LIKE BANKID]
      toast.success("Logged in with success | Redirecting...");
      setTimeout(() => {
        window.location.href = "/home";
      }, 3000);
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.detail)
        toast.error(error.response.data.detail);
      else toast.error(error.response.data.message);
    } finally {
      this.setState({ loading: false });
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
                    <a>
                      <span>
                        <img src={Logo} alt="" height="60" />
                      </span>
                    </a>
                  </div>

                  <div className="card-body p-4">
                    <div className="text-center w-75 m-auto">
                      <h3 className="text-dark-50 text-center mt-0 fw-bold">
                        Sign In
                      </h3>
                    </div>

                    <form
                      onSubmit={this.handleSubmit}
                      className="pt-4"
                      id="logInForm"
                    >
                      {this.renderInput(
                        "text",
                        "emailAddress",
                        "Enter your email address",
                        "Email Address",
                        "mb-3"
                      )}
                      {this.renderInput(
                        "password",
                        "password",
                        "Enter your password",
                        "Password",
                        "mb-3",
                        "icon"
                      )}

                      <div className="mb-3 mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox-signin"
                            checked
                          />
                          <label className="form-check-label" htmlFor="checkbox-signin">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="mb-3 mb-0 text-center">
                        {this.renderButton("Log In")}
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-muted ms-1">
                        <b>Sign Up</b>
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
