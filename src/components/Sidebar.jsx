import React, { useState } from "react";
import Wave from "../assets/images/waves.png";
import { IconHome } from "./icons.components/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isBusinessActive, setIsBusinessActive] = useState(false);
  const [isProductActive, setIsProductActive] = useState(false);

  const handleSidebarClick = () => {
    setIsActive(!isActive);
  };

  const handleBusinessClick = () => {
    setIsBusinessActive(!isBusinessActive);
  };

  const handleProductClick = () => {
    setIsProductActive(!isProductActive);
  };

  return (
    <React.Fragment>
      <div class="leftside-menu leftside-menu-detached">
        <div class="leftbar-user" style={{ backgroundImage: `url(${Wave})` }}>
          <div class="img-container">
            <img src="/assets/images/Pawa-logo-removebg.png" alt="" />
          </div>
        </div>
        <ul class="side-nav">
          <li class="side-nav-title side-nav-item">Navigation</li>

          <li class="side-nav-item">
            <a
              data-bs-toggle="collapse"
              //href="#sidebarDashboards"
              aria-expanded="false"
              aria-controls="sidebarDashboards"
              class="side-nav-link"
            >
              <IconHome />
              <span class="badge bg-info rounded-pill float-end">4</span>
              <span>
                {" "}
                <NavLink to="/home">Dashboard</NavLink>{" "}
              </span>
            </a>
          </li>

          <li class="side-nav-title side-nav-item">Modules</li>

          <li class="side-nav-item">
            <a
              href="#"
              class="side-nav-link"
              onClick={() => (window.location = "/all-clients")}
            >
              <i class="mdi mdi-account"></i>
              <span> Clients </span>
            </a>
          </li>

          <li class="side-nav-item">
            <a
              href="#"
              class="side-nav-link"
              onClick={() => (window.location = "/all-gl-settings")}
            >
              <i class="mdi mdi-content-paste"></i>
              <span> GL Settings </span>
            </a>
          </li>

          <li class="side-nav-item">
            <a
              href="#"
              class="side-nav-link"
              onClick={() => (window.location = "/all-gl-accounts")}
            >
              <i class="mdi mdi-layers"></i>
              <span> GL Account </span>
            </a>
          </li>

          <li class="side-nav-item">
            <a
              href="#"
              class="side-nav-link"
              onClick={() => (window.location = "/all-products")}
            >
              <i class="mdi mdi-arrange-send-backward"></i>
              <span> Products </span>
            </a>
          </li>

          <li class="side-nav-item">
            <a
              href="#"
              class="side-nav-link"
              onClick={() => (window.location = "/all-accounts")}
            >
              <i class="mdi mdi-account-key"></i>
              <span> Accounts </span>
            </a>
          </li>

          <li class="side-nav-item">
            <a href="apps-file-manager.html" class="side-nav-link">
              <i class="uil-folder-plus"></i>
              <span> Close Day </span>
            </a>
          </li>

          <li class="side-nav-title side-nav-item">Custom</li>

          <li class="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarPages"
              aria-expanded="false"
              aria-controls="sidebarPages"
              class="side-nav-link"
            >
              <i class="uil-copy-alt"></i>
              <span> Pages </span>
              <span class="menu-arrow"></span>
            </a>
            <div class="collapse" id="sidebarPages">
              <ul class="side-nav-second-level">
                <li>
                  <a href="pages-profile.html">Profile</a>
                </li>
                <li>
                  <a href="pages-profile-2.html">Profile 2</a>
                </li>
                <li>
                  <a href="pages-invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="pages-faq.html">FAQ</a>
                </li>
                <li>
                  <a href="pages-pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="pages-maintenance.html">Maintenance</a>
                </li>
                <li class="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#sidebarPagesAuth"
                    aria-expanded="false"
                    aria-controls="sidebarPagesAuth"
                  >
                    <span> Authentication </span>
                    <span class="menu-arrow"></span>
                  </a>
                  <div class="collapse" id="sidebarPagesAuth">
                    <ul class="side-nav-third-level">
                      <li>
                        <a href="pages-login.html">Login</a>
                      </li>
                      <li>
                        <a href="pages-login-2.html">Login 2</a>
                      </li>
                      <li>
                        <a href="pages-register.html">Register</a>
                      </li>
                      <li>
                        <a href="pages-register-2.html">Register 2</a>
                      </li>
                      <li>
                        <a href="pages-logout.html">Logout</a>
                      </li>
                      <li>
                        <a href="pages-logout-2.html">Logout 2</a>
                      </li>
                      <li>
                        <a href="pages-recoverpw.html">Recover Password</a>
                      </li>
                      <li>
                        <a href="pages-recoverpw-2.html">Recover Password 2</a>
                      </li>
                      <li>
                        <a href="pages-lock-screen.html">Lock Screen</a>
                      </li>
                      <li>
                        <a href="pages-lock-screen-2.html">Lock Screen 2</a>
                      </li>
                      <li>
                        <a href="pages-confirm-mail.html">Confirm Mail</a>
                      </li>
                      <li>
                        <a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="side-nav-item">
                  <a
                    data-bs-toggle="collapse"
                    href="#sidebarPagesError"
                    aria-expanded="false"
                    aria-controls="sidebarPagesError"
                  >
                    <span> Error </span>
                    <span class="menu-arrow"></span>
                  </a>
                  <div class="collapse" id="sidebarPagesError">
                    <ul class="side-nav-third-level">
                      <li>
                        <a href="pages-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="pages-404-alt.html">Error 404-alt</a>
                      </li>
                      <li>
                        <a href="pages-500.html">Error 500</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="pages-starter.html">Starter Page</a>
                </li>
                <li>
                  <a href="pages-preloader.html">With Preloader</a>
                </li>
                <li>
                  <a href="pages-timeline.html">Timeline</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="side-nav-item">
            <a href="landing.html" target="_blank" class="side-nav-link">
              <i class="uil-globe"></i>
              <span class="badge bg-secondary text-light float-end">New</span>
              <span> Landing </span>
            </a>
          </li>

          <li class="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarLayouts"
              aria-expanded="false"
              aria-controls="sidebarLayouts"
              class="side-nav-link"
            >
              <i class="uil-window"></i>
              <span> Layouts </span>
              <span class="menu-arrow"></span>
            </a>
            <div class="collapse" id="sidebarLayouts">
              <ul class="side-nav-second-level">
                <li>
                  <a href="layouts-horizontal.html">Horizontal</a>
                </li>
                <li>
                  <a href="layouts-vertical.html">Vertical</a>
                </li>
                <li>
                  <a href="layouts-full.html">Full</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* <!-- End Sidebar --> */}

        <div class="clearfix"></div>
        {/* <!-- Sidebar -left --> */}
      </div>
    </React.Fragment>
  );
}
