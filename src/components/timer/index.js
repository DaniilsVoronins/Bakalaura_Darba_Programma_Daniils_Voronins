import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { GeoAlt } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";

function Timer() {
  return (
    <>
      <div className="body">
        <div className="head">
          <h2 className="abt"> About Studio</h2>
        </div>
      </div>
      <div className="body2">
        <h2 className="con">Contact Us</h2>
        <p className="align">
          We align leaders around a shared purpose and strategic story that
          catalyzes <br />
          their business and brand to take action.
        </p>
        <div className="rock1">
          <div className="rock">
            <Row>
              <Col sx={20} lg={7}>
                <div className="maindiv11">
                  <div className="piece">
                    <div className="geo">
                      <GeoAlt />
                    </div>
                  </div>
                  <div className="add">
                    <h5 className="adress">Adress</h5>
                  </div>
                  <div className="new">
                    <p className="aven">
                      1 Rock Sreet, 21 Avenue, <br />
                      New York, NY 92103-9000
                    </p>
                  </div>
                </div>
              </Col>
              <Col sx={20} lg={7}>
                <div className="maindiv11">
                  <div className="piece">
                    <div className="geo">
                      <Envelope />
                    </div>
                  </div>
                  <div className="add">
                    <h5 className="adress">E-mail</h5>
                  </div>
                  <div className="new">
                    <p className="aven">
                      <a className="link" href="">
                        {" "}
                        hello @companygamil.com
                      </a>
                      <br />
                      <a className="link" href="">
                        {" "}
                        hello @companygamil.com
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col sx={20} lg={7}>
                <div className="nab">
                  <div className="maindiv11">
                    <div className="piece">
                      <div className="geo">
                        <Telephone />
                      </div>
                    </div>
                    <div className="add">
                      <h5 className="adress">Call Us</h5>
                    </div>
                    <div className="new">
                      <p className="aven">
                        1 (234) 567-891
                        <br />1 (234) 987-654
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <iframe
          className="map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </>
  );
}

export default Timer;
