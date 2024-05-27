import React from "react";
import "./style.css";
import { Row, Col } from "antd";

function Brand() {
  return (
    <div className="mainpic">
      <div className="abc">
        <div className="graybox">
          <div className="brand">
            <h1 className="br">Branding</h1>
            <p className="help">
              We help brands & businesses stand out <br />
              in the ever-changing digital landscape.
            </p>
            <button className="all">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
