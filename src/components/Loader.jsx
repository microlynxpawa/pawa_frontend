import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ message, width, height }) => {
  return (
    <div className="appLoader mySpinner">
      <Oval
        type="Oval"
        color="#526de5"
        height={height ?? 100}
        width={width ?? 100}
      />
      <p className="loader_text">{message ? message : ""}</p>
    </div>
  );
};

export default Loader;
