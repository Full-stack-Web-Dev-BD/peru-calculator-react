import React, { useState } from "react";
import "./style.css";
import Basic from "./Components/Basic";
import Advanced from "./Components/Advanced";
const Index = () => {
  return (
    <div>
      <div className="container top_content">
        <div className="header">
          <h3>IGV PERU</h3>
        </div>
        <Basic/>
      </div>
      <div className="container">
        <Advanced/>
      </div>
    </div>
  );
};

export default Index;
