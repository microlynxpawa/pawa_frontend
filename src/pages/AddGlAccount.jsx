import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import AddGlAccountForm from "../components/Accounts/AddGlAccountForm";
import Footer from "../components/Footer";

export default function AddGlAccount() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Add General Ledger Account"} />
              <AddGlAccountForm />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
