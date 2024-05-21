import React, {useState} from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import RightSideBar from "./RightSidebar";

// Importing the images
import Logo from '../assets/images/Pawa-logo.png'
import LogoSm from '../assets/images/Pawa-logo-sm.png'
import Ghana from '../assets/images/ghana.jpg'
import France from '../assets/images/french.jpg'
import Avatar from '../assets/images/avatar-2.jpg'


export default function Navbar() {
  
  const Flag = [France,Ghana]

  // State management for sidebar
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);

  };
  // UseState Statements
  const [language, setLanguage] = useState('English')
  const [flag, setFlag] = useState(Flag[1])
  

    

  return (
    <React.Fragment>
    <div className="navbar-custom topnav-navbar topnav-navbar-pawa-color">
        <div className="container-fluid">
          {/* LOGO */}
          <a href="index.html" className="topnav-logo">
            <span className="topnav-logo-lg">
              <img src={Logo} alt height={40} />
            </span>
            <span className="topnav-logo-sm">
              <img src={LogoSm} alt height={40} />
            </span>
          </a>
          <ul className="list-unstyled topbar-menu float-end mb-0">
            <li className="dropdown notification-list d-xl-none">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="dripicons-search noti-icon" />
              </a>
              <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                  <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                </form>
              </div>
            </li>
            <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" id="topbar-languagedrop" role="button" aria-haspopup="true" aria-expanded="false" 
              onClick={() => {setLanguage(language === 'English' ? 'French' : 'English')
                             setFlag(flag=== Flag[1] ? Flag[0] : Flag[1])
                    }
              }
              >
              <img src={flag} alt="user-image" className="me-1" height={12} /> <span className="align-middle">{language}</span>{/* <i className="mdi mdi-chevron-down" / > */ }
              </a>
              {/* <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop"> */}
                {/* item*/}
                {/* <a href="" className="dropdown-item notify-item"> */}
                  {/* <img src={France} alt="user-image" className="me-1" height={12} /> <span className="align-middle">Français</span> */}
                {/* </a> */}
              {/* </div> */}
            </li>
            <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-bell noti-icon" />
                <span className="noti-icon-badge" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">
                {/* item*/}
                <div className="dropdown-item noti-title px-3">
                  <h5 className="m-0">
                    <span className="float-end">
                      <a href="" className="text-dark">
                        <small>Clear All</small>
                      </a>
                    </span>Notification
                  </h5>
                </div>
                <div className="px-3" style={{maxHeight: 300}} data-simplebar>
                  <h5 className="text-muted font-13 fw-normal mt-0">Today</h5>
                  {/* item*/}
                  <a href="" className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>   
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon bg-primary-pawa">
                            <i className="mdi mdi-comment-account-outline" />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                          <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* item*/}
                  <a href="" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>   
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon bg-info">
                            <i className="mdi mdi-account-plus" />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">Admin <small className="fw-normal text-muted ms-1">1 hours ago</small></h5>
                          <small className="noti-item-subtitle text-muted">New user registered</small>
                        </div>
                      </div>
                    </div>
                  </a>
                  <h5 className="text-muted font-13 fw-normal mt-0">Yesterday</h5>
                  {/* item*/}
                  <a href="" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>   
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon">
                            <img src={Avatar} className="img-fluid rounded-circle" alt />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">Cristina Pride <small className="fw-normal text-muted ms-1">1 day ago</small></h5>
                          <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                        </div>
                      </div>
                    </div>
                  </a>
                  <h5 className="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>
                  {/* item*/}
                  <a href="" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>   
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon bg-primary-pawa">
                            <i className="mdi mdi-comment-account-outline" />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">Datacorp</h5>
                          <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* item*/}
                  <a href="" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                    <div className="card-body">
                      <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>   
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="notify-icon">
                            <img src={Avatar} className="img-fluid rounded-circle" alt />
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-2">
                          <h5 className="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                          <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="text-center">
                    <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0" />
                  </div>
                </div>
                {/* All*/}
                <a href="" className="dropdown-item text-center text-primary notify-item border-top border-light py-2">
                  View All
                </a>
              </div>
            </li>
            <li className="dropdown notification-list d-none d-sm-inline-block">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="mdi mdi-apps noti-icon" />
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                <div className="p-2">
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/github.png" alt="Github" />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                        <span>G Suite</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="notification-list"onClick={toggleRightSidebar}>
              <a className="nav-link end-bar-toggle" href="">
                <i className="mdi mdi-cog-outline noti-icon" />
                  {/* Activating sidear show */}
                  {isRightSidebarOpen && <RightSideBar onClose={toggleRightSidebar} />}
              </a>
            </li>
            <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle nav-user arrow-none me-0 user-pawa-color" data-bs-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="account-user-avatar"> 
                  <img src={Avatar} alt="user-image" className="rounded-circle" />
                </span>
                <span>
                  <span className="account-user-name">Dominic Keller</span>
                  <span className="account-position">Founder</span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                {/* item*/}
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <i className="mdi mdi-account-circle me-1" />
                  <span>My Account</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <i className="mdi mdi-account-edit me-1" />
                  <span>Settings</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <i className="mdi mdi-lifebuoy me-1" />
                  <span>Support</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <i className="mdi mdi-lock-outline me-1" />
                  <span>Lock Screen</span>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <i className="mdi mdi-logout me-1" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
          <a className="button-menu-mobile disable-btn">
            <div className="lines">
              <span />
              <span />
              <span />
            </div>
          </a>
          <div className="app-search dropdown">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." id="top-search" />
                <span className="mdi mdi-magnify search-icon" />
                <button className="input-group-text btn search-button " type="submit">Search</button>
              </div>
            </form>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
              {/* item*/}
              <div className="dropdown-header noti-title">
                <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
              </div>
              {/* item*/}
              <a href="" className="dropdown-item notify-item">
                <i className="uil-notes font-16 me-1" />
                <span>Analytics Report</span>
              </a>
              {/* item*/}
              <a href="" className="dropdown-item notify-item">
                <i className="uil-life-ring font-16 me-1" />
                <span>How can I help you?</span>
              </a>
              {/* item*/}
              <a href="" className="dropdown-item notify-item">
                <i className="uil-cog font-16 me-1" />
                <span>User profile settings</span>
              </a>
              {/* item*/}
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
              </div>
              <div className="notification-list">
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <div className="d-flex">
                    <img className="d-flex me-2 rounded-circle" src={Avatar} alt="Generic placeholder image" height={32} />
                    <div className="w-100">
                      <h5 className="m-0 font-14">Erwin Brown</h5>
                      <span className="font-12 mb-0">UI Designer</span>
                    </div>
                  </div>
                </a>
                {/* item*/}
                <a href="" className="dropdown-item notify-item">
                  <div className="d-flex">
                    <img className="d-flex me-2 rounded-circle" src={Avatar} alt="Generic placeholder image" height={32} />
                    <div className="w-100">
                      <h5 className="m-0 font-14">Jacob Deo</h5>
                      <span className="font-12 mb-0">Developer</span>
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
