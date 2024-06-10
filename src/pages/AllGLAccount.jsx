import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import AllGLAccountListing from "../components/products/AllGLAccountListing";

export default function AllGLAccount() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"GL Settings Listing"} />
              <AllGLAccountListing />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
