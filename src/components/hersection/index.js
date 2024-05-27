import { Col, Row } from "antd";
import React from "react";
import "./style.css";

function Pup() {
  return (
    <div className="body">
      <Row>
        <Col md={10}>
          <div className="circle">
            <h1 className="design">Design Studio</h1>
          </div>
          <p className="para">
            Duis aute irure dolor in reprehenderit in voluptate velit <br />
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
            occaecat cupidatat non proident.
          </p>
          <div className="btn11">
            <button className="button">
              <h6 className="read">Read More</h6>
            </button>
          </div>
        </Col>
        <Col md={14}>
          <div>
            <img
              className="img-fluid img11"
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/365abaea03b75b409ac35280/gyt-min1.jpg"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Pup;
