import React from "react";
import "./style.css";
import { Col, Row } from "antd";

function Picture() {
  return (
    <div className="body">
      <Row>
        <Col lg={10} md={10} className="section1">
          <img
            className="img-fluid studio"
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2c040634612f5cc6b530c322/orange-elegant-corporate-card_1435-1220.jpg?version="
          ></img>
        </Col>

        <Col lg={14} md={14} className="section2">
          <div className="mainbox">
            <div className="dui">
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in <br />
                voluptate velit esse cillum dolore eu fugiat
                <br />
                nulla . Excepteur sint occaecat cupidatat
                <br />
                non proident, sunt in culpa qui officia
                <br />
                deserunt mollit anim id est laborum.
              </p>
              <div className="btn12">
                <button className="button">
                  <h6 className="read">Read More</h6>
                </button>
              </div>
            </div>
            <div className="box2"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Picture;
