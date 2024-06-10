import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid sidebarBody">
        <div class="wrapper">
          <Sidebar />
          <div class="content-page">
            <div class="content">
              <PageTitle title={"Dasboard"} />
              <h1>Hello Pawa Team</h1>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
