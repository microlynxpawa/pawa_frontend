import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import AddClientForm from "../components/Client/AddClientForm";
import Footer from "../components/Footer";

export default function AddClient() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Add Client"} />
              <AddClientForm />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
