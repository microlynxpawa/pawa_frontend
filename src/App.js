import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AddClient from "./pages/AddClient";
import AddBusinessClient from "./pages/AddBusinessClient";
import AddGlAccount from "./pages/AddGlAccount";
import AddProduct from "./pages/AddProduct";
import CreateAccount from "./pages/CreateAccount";
import VerificationCode from "./pages/VerificationCode";
import { Routes, Route, Navigate } from "react-router-dom";
import AddGLSettings from "./pages/AddGLSettings";
import AllClients from "./pages/AllClients";
import AllProducts from "./pages/AllProducts";
import AllGLSettings from "./pages/AllGLSettings";
import AllGLAccount from "./pages/AllGLAccount";

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
        <Route path="/add-business-client" element={<AddBusinessClient />} />
        <Route path="/add-gl-account" element={<AddGlAccount />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/validate" element={<VerificationCode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-clients" element={<AllClients />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/all-gl-accounts" element={<AllGLAccount />} />
        <Route path="/all-gl-settings" element={<AllGLSettings />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/add-gl-settings" element={<AddGLSettings />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
