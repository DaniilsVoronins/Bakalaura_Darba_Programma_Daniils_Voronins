import React from "react";
import "./style.css";
import { Col, Row } from "antd";

function Web() {
  return (
    <div className="body">
      <Row>
        <Col lg={10} md={10}>
          <div className="web">
            <h1 className="devel">
              Web Development & <br />
              Design
            </h1>
          </div>
          <div className="yelowbar">
            <div className="quik1">
              <p className="quik">
                {" "}
                Quickly incentivize impactful action items before <br />
                tactical collaboration and idea-sharing. Monotonically <br />
                engage market-driven intellectual capitalv
                <br />
                wireless opportunities. Progressively network
                <br />
                performance based services for functionalized <br />
                testing procedures.
              </p>
              <button className="learn">
                <h6>Learn More</h6>
              </button>
            </div>
          </div>
        </Col>
        <Col lg={10} md={10}>
          <div className="circle2"></div>
          <div className="girlpic">
            <img
              className="img-fluid girl"
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/a8c8f13d8d3f514fbd2432f3/-min1.jpg"
            ></img>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Web;
