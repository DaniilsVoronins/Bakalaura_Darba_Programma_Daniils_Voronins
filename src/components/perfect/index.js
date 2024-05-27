import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";

function Perfect() {
  return (
    <div className="padding">
      <div>
        <h2 className="perfect">OUR PERFECT TEAM</h2>

        <div className="bar2"> </div>

        <div className="container">
          <Row justify="center" className="bg-clr">
            <Col lg={10} md={24}>
              <div className="center-col">
                <div className="card2">
                  <div className="whitemain">
                    <div>
                      <img
                        className="img-fluid man"
                        src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/59dcf6a4957250909977cbcc/5.jpg"
                      />
                    </div>
                    <div>
                      <h4 className="brown">Jeffrey Brown</h4>
                      <h5 className="lead">creative leader</h5>
                      <p className="text">
                        Sample text. Click to select the text <br />
                        box. Click again or double click to <br />
                        start editing the text.
                      </p>
                      <div className="icons">
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <InstagramOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={24}>
              <div className="center-col">
                <div className="card2">
                  <div className="whitemain">
                    <div>
                      <img
                        className="img-fluid man"
                        src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/6332c300cc035cb793f6339e/7.jpg"
                      />
                    </div>
                    <div>
                      <h4 className="brown">Jeffrey Brown</h4>
                      <h5 className="lead">Manager</h5>
                      <p className="text">
                        Sample text. Click to select the text <br />
                        box. Click again or double click to <br />
                        start editing the text.
                      </p>
                      <div className="icons">
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <InstagramOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={10} md={24}>
              <div className="center-col">
                <div className="card2">
                  <div className="whitemain">
                    <div>
                      <img
                        className="img-fluid man"
                        src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/a6e04cd1015f574cb38cc7d4/4.jpg"
                      />
                    </div>
                    <div>
                      <h4 className="brown">Jeffrey Brown</h4>
                      <h5 className="lead">Programing guru</h5>
                      <p className="text">
                        Sample text. Click to select the text <br />
                        box. Click again or double click to <br />
                        start editing the text.
                      </p>
                      <div className="icons">
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <InstagramOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10} md={24}>
              <div className="center-col">
                <div className="card2">
                  <div className="whitemain">
                    <div>
                      <img
                        className="img-fluid man"
                        src="https://images02.nicepage.com/c461c07a441a5d220e8feb1a/d57be81579335a85bee38a63/zzz.jpg"
                      />
                    </div>
                    <div>
                      <h4 className="brown">Jeffrey Brown</h4>
                      <h5 className="lead">Sales manager</h5>
                      <p className="text">
                        Sample text. Click to select the text <br />
                        box. Click again or double click to <br />
                        start editing the text.
                      </p>
                      <div className="icons">
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <InstagramOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="lastbutton">
        <button className=" btn button-2"> Learn More</button>
      </div>

      {/* end */}
    </div>
  );
}

export default Perfect;
