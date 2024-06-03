import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import CreateAccountForm from "../components/Accounts/CreateAccountForm";
import Footer from "../components/Footer";

export default function CreateAccount() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Create Account"} />
              <CreateAccountForm />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
