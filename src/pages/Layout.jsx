import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Rightbar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

import "../stylesheets/app.modern.min.css";
import "../stylesheets/icons.min.css";
import "../stylesheets/additional.css";

export default function Layout() {
  const [isRightBar, setIsRightBar] = useState(false);

  const toggleRightbar = () => {
    setIsRightBar(!isRightBar);
  };

  return (
    <React.Fragment>
      <Navbar toggleRightbar={toggleRightbar} isRightBar={isRightBar} />
      {isRightBar && <Rightbar />}
      <Sidebar />
      {/* <main className="row bg-white p-2"><Outlet /></main> */}
      <Footer/>
    </React.Fragment>
  );
}
