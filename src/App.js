import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
