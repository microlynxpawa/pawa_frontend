import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import PageTitle from "../components/PageTitle";
import ClientsTable from "../components/ClientsTable";
import Footer from "../components/Footer";

export default function AllClients() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              {/* <PageTitle title={"All Clients"} /> */}
              <ClientsTable />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
