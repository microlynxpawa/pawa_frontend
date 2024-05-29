import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "../components/Loader";
import Form from "../components/Forms/Form";
import Background from "../assets/images/bg-pattern-light.svg";
import Logo from "../assets/images/Pawa-logo-removebg.png";
import { login } from "../services/api.calls/auth.service";
import AuthFooter from "../components/AuthFooter";

import "../stylesheets/app.modern.min.css";
import "../stylesheets/icons.min.css";

export default class Login extends Form {
  state = {
    data: {
      emailAddress: "",
      password: "",
    },
    loading: false,
    error: {},
  };

  schema = {
    emailAddress: Joi.string().email().required().label("Email"),
    password: Joi.string().max(30).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await login(this.state.data);
      //RETURN A TOKEN AFTER LOGIN IN THE DATA AND DECIDE HOW TO STORE IT. [TOKEN CONTAINS USER INFO LIKE BANKID]
      toast.success("Logged in with success | Redirecting...");
      setTimeout(() => {
        window.location = "/home";
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail)
        toast.error(error.response.data.detail);
      else toast.error(error.response.data.message);
    } finally {
      this.setState({ loading: false });
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
                    <a>
                      <span>
                        <img src={Logo} alt="" height="60" />
                      </span>
                    </a>
                  </div>

                  <div class="card-body p-4">
                    <div class="text-center w-75 m-auto">
                      <h3 class="text-dark-50 text-center mt-0 fw-bold">
                        Sign In
                      </h3>
                    </div>

                    <form
                      onSubmit={this.handleSubmit}
                      class="pt-4"
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

                      <div class="mb-3 mb-3">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox-signin"
                            checked
                          />
                          <label class="form-check-label" for="checkbox-signin">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div class="mb-3 mb-0 text-center">
                        {this.renderButton("Log In")}
                      </div>
                    </form>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-12 text-center">
                    <p class="text-muted">
                      Don't have an account?{" "}
                      <Link to="/signup" class="text-muted ms-1">
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
