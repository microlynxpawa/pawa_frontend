import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import AddBusinessClientForm from "../components/Client/AddBusinessClientForm";
import Footer from "../components/Footer";

export default function AddBusinessClient() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Add Business Client"} />
              <AddBusinessClientForm />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
