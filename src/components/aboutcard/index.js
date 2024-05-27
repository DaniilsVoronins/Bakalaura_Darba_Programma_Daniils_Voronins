import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import { CameraOutlined } from "@ant-design/icons";

function AboutCard({ heading, text }) {
  return (
    <div>
      <Col lg={9}>
        <div className="whiteboxa">
          <div className="green">
            <CameraOutlined className="camera" />{" "}
          </div>
          <h4 className="sample">{heading}</h4>
          <p className="text">
            Sample text. Click to select <br />
            the text box. Click again or
            <br />
            double click to start editing <br />
            the text.
          </p>
        </div>
      </Col>
    </div>
  );
}

export default AboutCard;
