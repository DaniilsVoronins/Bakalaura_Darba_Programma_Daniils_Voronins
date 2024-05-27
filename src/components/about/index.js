import { Col, Row } from "antd";
import React from "react";
import "./style.css";
import { CameraOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { MedicineBoxOutlined } from "@ant-design/icons";
import AboutCard from "../aboutcard";

function About() {
  return (
    <div className="body">
      <Row>
        <Col md={22} lg={12}>
          <div className="box"></div>
          <Row>
            <AboutCard heading={"Sample headline"} />
            <AboutCard heading={"Sample headline"} />
            <AboutCard heading={"Sample headline"} />
            <AboutCard heading={"Sample headline"} />
          </Row>
        </Col>
        <Col md={24} lg={12}>
          <div>
            <h2 className="about">About</h2>
            <h2 className="need">
              Need Amazing <br />
              Design?
            </h2>
            <p className="lorem">
              Paragraph. Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. Curabitur id suscipit ex. <br />
              Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor,
              et
              <br />
              ultricies sapien. Quisque fringilla sit amet dolor
              <br />
              commodo efficitur. Aliquam et sem odio. In <br />
              ullamcorper nisi nunc, et molestie ipsum iaculis sit
              <br />
              amet.
            </p>
          </div>
          <div className="btn11">
            <button className="button">
              <h6 className="read">Read More</h6>
            </button>
          </div>
        </Col>
      </Row>
      {/* end */}
    </div>
  );
}

export default About;
