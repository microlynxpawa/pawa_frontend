import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import VerificationCode from "./pages/VerificationCode";
import CreateCustomer from "./pages/CreateCustomer";
import CreateClient from "./pages/CreateClient";
import AllClients from "./pages/AllClients";
import "./stylesheets/style.css";
import "react-phone-input-2/lib/style.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Routes without the layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/validate" element={<VerificationCode />} />
        <Route path="/all-clients" element={<AllClients />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />

        {/* Routes with the layout */}
        <Route path="/" element={<Layout />}>
        <Route index element={<CreateCustomer />} />
        <Route path="createclient" element={<CreateClient />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
