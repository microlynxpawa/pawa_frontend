import React from 'react';

const Modal = () => {
  return (
    <div id="signup-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center mt-2 mb-4">
              <a href="index.html" className="text-success">
                <span><img src="assets/images/logo-dark.png" alt="" height="18" /></span>
              </a>
            </div>
            <form className="ps-3 pe-3" action="#">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Name</label>
                <input className="form-control" type="text" id="username" required placeholder="Michael Zenaty" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">Email address</label>
                <input className="form-control" type="email" id="emailaddress" required placeholder="john@deo.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type="password" required id="password" placeholder="Enter your password" />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="customCheck1" />
                  <label className="form-check-label" htmlFor="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-primary" type="submit">Sign Up Free</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
