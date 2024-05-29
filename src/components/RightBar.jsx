import React from "react";

export default function Rightbar() {
  return(
    <React.Fragment>
<div>
  <div className="end-bar end-bar-enabled">
    <div className="rightbar-title">
      <a href="javascript:void(0);" className="end-bar-toggle float-end">
        <i className="dripicons-cross noti-icon" />
      </a>
      <h5 className="m-0">Settings</h5>
    </div>
    <div className="rightbar-content h-100" data-simplebar>
      <div className="p-3">
        <div className="alert alert-warning" role="alert">
          <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
        </div>
        {/* Settings */}
        <h5 className="mt-3">Color Scheme</h5>
        <hr className="mt-1" />
        <div className="form-check form-switch mb-1">
          <input type="checkbox" className="form-check-input" name="color-scheme-mode" defaultValue="light" id="light-mode-check" defaultChecked />
          <label className="form-check-label" htmlFor="light-mode-check">Light Mode</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input type="checkbox" className="form-check-input" name="color-scheme-mode" defaultValue="dark" id="dark-mode-check" />
          <label className="form-check-label" htmlFor="dark-mode-check">Dark Mode</label>
        </div>
        {/* Left Sidebar*/}
        <h5 className="mt-4">Left Sidebar</h5>
        <hr className="mt-1" />
        <div className="form-check form-switch mb-1">
          <input type="checkbox" className="form-check-input" name="compact" defaultValue="fixed" id="fixed-check" defaultChecked />
          <label className="form-check-label" htmlFor="fixed-check">Scrollable</label>
        </div>
        <div className="form-check form-switch mb-1">
          <input type="checkbox" className="form-check-input" name="compact" defaultValue="condensed" id="condensed-check" />
          <label className="form-check-label" htmlFor="condensed-check">Condensed</label>
        </div>
        <div className="d-grid mt-4">
          <button className="btn btn-primary" id="resetBtn">Reset to Default</button>
          <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/" className="btn btn-danger mt-3" target="_blank"><i className="mdi mdi-basket me-1" /> Purchase
            Now</a>
        </div>
      </div> {/* end padding*/}
    </div>
  </div>
  <div className="rightbar-overlay" />
</div>
    </React.Fragment>
  );
}
