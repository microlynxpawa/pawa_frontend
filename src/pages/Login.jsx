import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

import Form from "../components/Forms/Form";
import Background from '../assets/images/bg-pattern-light.svg'
import Logo from '../assets/images/Pawa-logo-removebg.png'

import '../stylesheets/app.modern.min.css'
import '../stylesheets/icons.min.css'

class Login extends Form {
  state = {
    data: {
      emailAddress: "",
      password: "",
    },
    error: {},
    showPassword: false,
  };
  schema = {
    emailAddress: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };
  render() {
    return (
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
                        Log In
                      </h4>
                    </div>

                    <form onSubmit={this.handleSubmit} id="signUpForm">
                      {this.renderInput(
                        "text",
                        "emailAddress",
                        "Enter your email address",
                        "Email Address *"
                      )}
                      
                      {this.renderInput(
                        "text",
                        "password",
                        "Enter your password",
                        "Password *"
                      )}
                      <div class="mb-3 text-center">
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

      <footer class="footer footer-alt">
          {new Date().getFullYear()} © PAWA Limited - pawa.com
        </footer>
      </React.Fragment>
    )
  }
}
export default Login;