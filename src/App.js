import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AddClient from "./pages/AddClient";
import VerificationCode from "./pages/VerificationCode";
import { Routes, Route, Navigate } from "react-router-dom";

import "./stylesheets/app.modern.min.css";
import "./stylesheets/icons.min.css";
import "./stylesheets/additional.css";

import "./stylesheets/style.css";
import "react-phone-input-2/lib/style.css";
//import "react-phone-number-input/style.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/add-client" element={<AddClient />} />
        <Route path="/validate" element={<VerificationCode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
