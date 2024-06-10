import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import AddGLSettingsForm from "../components/products/AddGLSettingsForm";

export default function AddGLSettings() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Add New GL Settings"} />
              <AddGLSettingsForm />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
