import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import AllGLSettingListing from "../components/products/AllGLSettingListing";

export default function AllGLSettings() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"GL Settings Listing"} />
              <AllGLSettingListing />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
