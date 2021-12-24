import React from "react";
import "./Navbar.css";
import { Col, Row } from "reactstrap";

function Navbar() {
  return (
    <div className="allTheNavBar" style={{ backgroundColor: "black" }}>
      <Row>
        <Col>
          <div className="brandNameContainer">
            <h1 className="brandNameNavBar">dolla</h1>
          </div>
        </Col>
        <Col>
          <div className="widgetContainer">
            <h2 className="widgetName">About</h2>
            <h2 className="widgetName">Discover</h2>
            <h2 className="widgetName">Services</h2>
            <h2 className="widgetName">Sign Up</h2>
          </div>
        </Col>
        <Col>
          <div className="signInContainer">
            <button className="signInButtonNavBar">Sign In</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
