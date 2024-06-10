import React, { useState } from "react";
import Logo from "../assets/images/Pawa-logo.png";
import French from "../assets/images/french.jpg";
import Ghana from "../assets/images/ghana.jpg";
import { FaRegBell } from "react-icons/fa";
import { MdViewCompact } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import User1 from "../assets/images/avatar-1.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isBellActive, setIsBellActive] = useState(false);
  const [isLanguageActive, setIslanguageActive] = useState(false);

  const handleUserDropClick = () => {
    setIsActive(!isActive);
  };

  const handleBellDropClick = () => {
    setIsBellActive(!isBellActive);
  };

  const handleLanguageClick = () => {
    setIslanguageActive(!isLanguageActive);
  };

  return (
    <React.Fragment>
      <div class="navbar-custom topnav-navbar topnav-navbar-pawa-color stikyNav">
        <div class="container-fluid">
          <a class="topnav-logo">
            <span class="topnav-logo-lg">
              <NavLink to="/home">
                <img src={Logo} alt="" height="40" />
              </NavLink>
            </span>
            <span class="topnav-logo-sm">
              <NavLink to="/home">
                <img src={Logo} alt="" height="40" />
              </NavLink>
            </span>
          </a>

          <ul class="list-unstyled topbar-menu float-end mb-0">
            <li class="dropdown notification-list d-xl-none">
              <a
                class="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="dripicons-search noti-icon"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form class="p-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>

            <li class="dropdown notification-list topbar-dropdown d-none d-lg-block">
              <a
                onClick={handleLanguageClick}
                class="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                id="topbar-languagedrop"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={Ghana} alt="user-image" class="me-1" height="12" />
                <span class="align-middle">English</span>
                <i class="mdi mdi-chevron-down"></i>
              </a>
              <div
                class={`dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu ${
                  isLanguageActive ? "show" : ""
                }`}
                aria-labelledby="topbar-languagedrop"
              >
                <a href="#" class="dropdown-item notify-item">
                  <img src={French} alt="user-image" class="me-1" height="12" />
                  <span class="align-middle">Français</span>
                </a>
              </div>
            </li>

            <li
              class="dropdown notification-list"
              onClick={handleBellDropClick}
            >
              <a
                class="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                id="topbar-notifydrop"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaRegBell style={{ marginTop: 26 }} size={20} />
                <span class="noti-icon-badge"></span>
              </a>
              <div
                class={`dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg ${
                  isBellActive ? "show" : ""
                }`}
                style={{
                  position: "absolute",
                  margin: "0px",
                  marginTop: "22px",
                }}
                aria-labelledby="topbar-notifydrop"
              >
                <div class="dropdown-item noti-title px-3">
                  <h5 class="m-0">
                    <span class="float-end">
                      <a href="#" class="text-dark">
                        <small>Clear All</small>
                      </a>{" "}
                    </span>
                    Notification
                  </h5>
                </div>

                <div class="px-3" style={{ maxHeight: "300px" }} data-simplebar>
                  <h5 class="text-muted font-13 fw-normal mt-0">Today</h5>

                  <a
                    href="javascript:void(0);"
                    class="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2"
                  >
                    <div class="card-body">
                      <span class="float-end noti-close-btn text-muted">
                        <i class="mdi mdi-close"></i>
                      </span>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <div class="notify-icon bg-primary-pawa">
                            <i class="mdi mdi-comment-account-outline"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 text-truncate ms-2">
                          <h5 class="noti-item-title fw-semibold font-14">
                            Datacorp
                            <small class="fw-normal text-muted ms-1">
                              1 min ago
                            </small>
                          </h5>
                          <small class="noti-item-subtitle text-muted">
                            Caleb Flakelar commented on Admin
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0);"
                    class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                  >
                    <div class="card-body">
                      <span class="float-end noti-close-btn text-muted">
                        <i class="mdi mdi-close"></i>
                      </span>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <div class="notify-icon bg-info">
                            <i class="mdi mdi-account-plus"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 text-truncate ms-2">
                          <h5 class="noti-item-title fw-semibold font-14">
                            Admin
                            <small class="fw-normal text-muted ms-1">
                              1 hours ago
                            </small>
                          </h5>
                          <small class="noti-item-subtitle text-muted">
                            New user registered
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <h5 class="text-muted font-13 fw-normal mt-0">Yesterday</h5>

                  <a
                    href="javascript:void(0);"
                    class="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                  >
                    <div class="card-body">
                      <span class="float-end noti-close-btn text-muted">
                        <i class="mdi mdi-close"></i>
                      </span>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <div class="notify-icon">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              class="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="flex-grow-1 text-truncate ms-2">
                          <h5 class="noti-item-title fw-semibold font-14">
                            Cristina Pride
                            <small class="fw-normal text-muted ms-1">
                              1 day ago
                            </small>
                          </h5>
                          <small class="noti-item-subtitle text-muted">
                            Hi, How are you? What about our next meeting
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div class="text-center">
                    <i class="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                  </div>
                </div>

                <a
                  href="javascript:void(0);"
                  class="dropdown-item text-center text-primary notify-item border-top border-light py-2"
                >
                  View All
                </a>
              </div>
            </li>

            <li class="dropdown notification-list d-none d-sm-inline-block">
              <a
                class="nav-link dropdown-toggle arrow-none"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <MdViewCompact style={{ marginTop: 20 }} size={28} />
              </a>
              <div
                class={`dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0`}
              >
                <div class="p-2">
                  <div class="row g-0">
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/github.png"
                          alt="Github"
                        />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/dribbble.png"
                          alt="dribbble"
                        />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div class="row g-0">
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/bitbucket.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/dropbox.png"
                          alt="dropbox"
                        />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/g-suite.png"
                          alt="G Suite"
                        />
                        <span>G Suite</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="notification-list">
              <a class="nav-link end-bar-toggle" href="javascript: void(0);">
                <IoSettingsOutline style={{ marginTop: 20 }} size={24} />
              </a>
            </li>

            <li class="dropdown notification-list">
              <a
                onClick={handleUserDropClick}
                class="nav-link dropdown-toggle nav-user arrow-none me-0 user-pawa-color"
                data-bs-toggle="dropdown"
                id="topbar-userdrop"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="account-user-avatar">
                  <img src={User1} alt="user-image" class="rounded-circle" />
                </span>
                <span>
                  <span class="account-user-name">Dominic Keller</span>
                  <span class="account-position">Founder</span>
                </span>
              </a>
              <div
                className={`dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown ${
                  isActive ? "show" : ""
                }`}
                aria-labelledby="topbar-userdrop"
              >
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome !</h6>
                </div>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="mdi mdi-account-circle me-1"></i>
                  <span>My Account</span>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="mdi mdi-account-edit me-1"></i>
                  <span>Settings</span>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="mdi mdi-lifebuoy me-1"></i>
                  <span>Support</span>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="mdi mdi-lock-outline me-1"></i>
                  <span>Lock Screen</span>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <i class="mdi mdi-logout me-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
          <a class="button-menu-mobile disable-btn">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <div class="app-search dropdown">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  id="top-search"
                />
                <span class="mdi mdi-magnify search-icon"></span>
                <button
                  class="input-group-text btn search-button"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
            <div
              class="dropdown-menu dropdown-menu-animated dropdown-lg"
              id="search-dropdown"
            >
              <div class="dropdown-header noti-title">
                <h5 class="text-overflow mb-2">
                  Found <span class="text-danger">17</span> results
                </h5>
              </div>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="uil-notes font-16 me-1"></i>
                <span>Analytics Report</span>
              </a>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="uil-life-ring font-16 me-1"></i>
                <span>How can I help you?</span>
              </a>

              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="uil-cog font-16 me-1"></i>
                <span>User profile settings</span>
              </a>

              <div class="dropdown-header noti-title">
                <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
              </div>

              <div class="notification-list">
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="d-flex">
                    <img
                      class="d-flex me-2 rounded-circle"
                      src="assets/images/users/avatar-2.jpg"
                      alt="Generic placeholder image"
                      height="32"
                    />
                    <div class="w-100">
                      <h5 class="m-0 font-14">Erwin Brown</h5>
                      <span class="font-12 mb-0">UI Designer</span>
                    </div>
                  </div>
                </a>

                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="d-flex">
                    <img
                      class="d-flex me-2 rounded-circle"
                      src="assets/images/users/avatar-5.jpg"
                      alt="Generic placeholder image"
                      height="32"
                    />
                    <div class="w-100">
                      <h5 class="m-0 font-14">Jacob Deo</h5>
                      <span class="font-12 mb-0">Developer</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
