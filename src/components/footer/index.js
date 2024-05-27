import React from "react";
import "./style.css";
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { ExclamationLg } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="body3">
      <div className="name">
        <div className="face">
          <Facebook />
        </div>
        <div className="face">
          <Twitter />
        </div>
        <div className="face">
          <Instagram />
        </div>
        <div className="face">
          <ExclamationLg />
        </div>
      </div>
    </div>
  );
}

export default Footer;
