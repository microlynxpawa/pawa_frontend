import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useEffect, useState, useRef } from "react";

import Background from "../assets/images/bg-pattern-light.svg";
import Logo from "../assets/images/Pawa-logo-removebg.png";
import Loader from "../components/Loader";
import { resendCode, verifyCode } from "../services/api.calls/auth.service";
import PreventBackNavigation from "../components/PreventBackNavigation";

import "../stylesheets/app.modern.min.css";
import "../stylesheets/icons.min.css";

export default function VerificationCode() {
  const [otpValue, setOtpValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState();

  const email = localStorage.getItem("email"); //WILL COOKIES ONLY LATER WITH RESTRICTED STORAGE TIME.

  const inputRef = useRef(null);

  const numOfFields = 6;

  const handleKeyDown = (e) => {
    if (e.keyCode === 8) {
      const { value, name } = e.target;
      const [, fieldIndex] = name.split("-");

      if (parseInt(fieldIndex, 10) > 0) {
        if (parseInt(fieldIndex, 10) >= numOfFields) {
          if (value) {
            const previousSibling = document.querySelector(`input[name=otp-6]`);
            if (previousSibling !== null) {
              previousSibling.focus();
            }
          } else {
            const previousSibling = document.querySelector(
              `input[name=otp-${parseInt(fieldIndex, 10) - 1}]`
            );
            if (previousSibling !== null) {
              previousSibling.focus();
            }
          }
        } else {
          const previousSibling = document.querySelector(
            `input[name=otp-${parseInt(fieldIndex, 10) - 1}]`
          );
          if (previousSibling !== null) {
            previousSibling.focus();
          }
        }
      }
      setOtpValue(otpValue.slice(0, -1));
    }
  };

  const handleChange = (e) => {
    const maxLength = 1;
    const { value, name } = e.target;
    const [, fieldIndex] = name.split("-");

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < numOfFields) {
        const nextSibling = document.querySelector(
          `input[name=otp-${parseInt(fieldIndex, 10) + 1}]`
        );
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
    setOtpValue(`${otpValue}${value}`);
  };

  const handleSubmit = async () => {
    const bodyData = {
      emailAddress: email,
      validationCode: otpValue,
    };
    try {
      setErrorMessage("");
      setLoaderMessage();
      setLoaderMessage("Runing code verification...");
      setIsLoading(true);
      await verifyCode(bodyData);
      setOtpValue("");
      window.location = "/login";
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail)
        toast.error(error.response.data.detail);
      else toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewCodeRequest = async () => {
    try {
      const userData = { emailAddress: email };
      setErrorMessage("");
      setLoaderMessage("Resending verification code");
      setIsLoading(true);
      await resendCode(userData);
      setIsLoading(false);
      setOtpValue("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail)
        toast.error(error.response.data.detail);
      else toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return isLoading ? (
    <Loader message={loaderMessage} />
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
        <PreventBackNavigation />
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

                <div class="card-body p-4 otpbody">
                  <div class="text-center w-75 m-auto">
                    <h4 class="text-dark-50 text-center mt-0 fw-bold">
                      Verification Code
                    </h4>
                    <p class="text-muted mb-4">
                      The verification code has been sent to{" "}
                      {email ?? "your email address"}, open it and enter it
                      bellow.
                    </p>
                  </div>

                  <div className="otp-bx">
                    <input
                      type="text"
                      maxLength="1"
                      name="otp-1"
                      ref={inputRef}
                      value={otpValue.charAt(0)}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <input
                      type="text"
                      maxLength="1"
                      name="otp-2"
                      value={otpValue.charAt(1)}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <input
                      type="text"
                      maxLength="1"
                      name="otp-3"
                      value={otpValue.charAt(2)}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <input
                      type="text"
                      maxLength="1"
                      name="otp-4"
                      value={otpValue.charAt(3)}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <input
                      type="text"
                      maxLength="1"
                      name="otp-5"
                      value={otpValue.charAt(4)}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <input
                      type="text"
                      maxLength="1"
                      name="otp-6"
                      value={otpValue.charAt(5)}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <br />
                  {errorMessage && <p className="otp-value">{errorMessage}</p>}
                  <br />
                  <div class="mb-0 text-center">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className={`btn btn-primary ${
                        otpValue.length < numOfFields ? "disabled" : ""
                      }`}
                    >
                      Confirm Code
                    </button>
                  </div>
                  <br />
                  <div class="col-12 text-center">
                    <p class="text-muted">
                      Did not receive validation code ?{" "}
                      <a class="text-muted ms-1">
                        <b
                          className="pointer_cursor app_color"
                          onClick={handleNewCodeRequest}
                        >
                          Resend
                        </b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-12 text-center">
                  <p class="text-muted">
                    Back to{" "}
                    <Link to="/signup" class="text-muted ms-1">
                      <b>Sign up</b>
                    </Link>
                  </p>
                </div>
              </div>
              <br />
              <footer class="footer footer-alt">
                {new Date().getFullYear()} © PAWA Limited - pawa.com
              </footer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
