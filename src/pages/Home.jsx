import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

// Importing the css
import '../assets/css/jquery-jvectormap-1.2.2.css'
import '../stylesheets/icons.min.css'
import '../stylesheets/app.modern.min.css'
import '../assets/css/additional.css'

// importing fonts and components
import Navbar from '../components/Navbar'
import RightSideBar from "../components/RightSidebar";
import LeftSideBar from "../components/Sidebar";



export default function Home() {
  return (
    <React.Fragment>
    
    <div
      className="loading"
      data-layout-color="light"
      data-layout="detached"
      data-rightbar-onstart="true"
    >
      {/* Topbar Start */}
        <Navbar/>
      {/* end Topbar */}
      {/* Start Content*/}
      <div className="container-fluid">
        {/* Begin page */}
        <div className="wrapper">
          {/* ========== Left Sidebar Start ========== */}
          <LeftSideBar/>
          {/* Left Sidebar End */}
          <div className="content-page">
            <div className="content">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <form className="d-flex">
                        <div className="input-group">
                          <input type="text" className="form-control form-control-light" id="dash-daterange" />
                          <span className="input-group-text bg-primary-pawa border-primary text-white">
                            <i className="mdi mdi-calendar-range font-13" />
                          </span>
                        </div>
                        <a href="" className="btn btn-primary ms-2">
                          <i className="mdi mdi-autorenew" />
                        </a>
                        <a href="" className="btn btn-primary ms-1">
                          <i className="mdi mdi-filter-variant" />
                        </a>
                      </form>
                    </div>
                    <h4 className="page-title">Dashboard</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card widget-flat">
                        <div className="card-body">
                          <div className="float-end">
                            <i className="mdi mdi-currency-usd widget-icon bg-success-lighten text-success" />
                          </div>
                          <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                          <h3 className="mt-3 mb-3">$6,254</h3>
                          <p className="mb-0 text-muted">
                            <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 7.00%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div> {/* end card-body*/}
                      </div> {/* end card*/}
                    </div> {/* end col*/}
                    <div className="col-sm-6">
                      <div className="card widget-flat">
                        <div className="card-body">
                          <div className="float-end">
                            <i className="mdi mdi-pulse widget-icon" />
                          </div>
                          <h5 className="text-muted fw-normal mt-0" title="Growth">Growth</h5>
                          <h3 className="mt-3 mb-3">+ 30.56%</h3>
                          <p className="mb-0 text-muted">
                            <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 4.87%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div> {/* end card-body*/}
                      </div> {/* end card*/}
                    </div> {/* end col*/}
                    <div className="col-sm-6">
                      <div className="card widget-flat">
                        <div className="card-body">
                          <div className="float-end">
                            <i className="mdi mdi-currency-usd widget-icon bg-success-lighten text-success" />
                          </div>
                          <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                          <h3 className="mt-3 mb-3">$6,254</h3>
                          <p className="mb-0 text-muted">
                            <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 7.00%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div> {/* end card-body*/}
                      </div> {/* end card*/}
                    </div> {/* end col*/}
                    <div className="col-sm-6">
                      <div className="card widget-flat">
                        <div className="card-body">
                          <div className="float-end">
                            <i className="mdi mdi-pulse widget-icon" />
                          </div>
                          <h5 className="text-muted fw-normal mt-0" title="Growth">Growth</h5>
                          <h3 className="mt-3 mb-3">+ 30.56%</h3>
                          <p className="mb-0 text-muted">
                            <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 4.87%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div> {/* end card-body*/}
                      </div> {/* end card*/}
                    </div> {/* end col*/}
                  </div> {/* end row */}
                </div> {/* end col */}
                <div className="col-xl-7 col-lg-6">
                  <div className="card card-h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h4 className="header-title">Projections Vs Actuals</h4>
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-dots-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            {/* item*/}
                            <a href="" className="dropdown-item">Sales Report</a>
                            {/* item*/}
                            <a href="" className="dropdown-item">Export Report</a>
                            {/* item*/}
                            <a href="" className="dropdown-item">Profit</a>
                            {/* item*/}
                            <a href="" className="dropdown-item">Action</a>
                          </div>
                        </div>
                      </div>
                      <div dir="ltr">
                        <div id="high-performing-product" className="apex-charts" data-colors="#536de6,#e3eaef" />
                      </div>
                    </div> {/* end card-body*/}
                  </div> {/* end card*/}
                </div> {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* Footer Start */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    © Hyper - Coderthemes.com
                  </div>
                  <div className="col-md-6">
                    <div className="text-md-end footer-links d-none d-md-block">
                      <a href="">About</a>
                      <a href="">Support</a>
                      <a href="">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* end Footer */}
          </div> 
          {/* content-page */}
        </div> {/* end wrapper*/}
      </div>
      {/* END Container */}
      {/* Right Sidebar */}
        {/* <RightSideBar/> */}
      {/* /End-bar */}
    </div>

    </React.Fragment>
  );
}
