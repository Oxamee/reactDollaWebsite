import React from "react";
import "./Navbar.css";
import { Col, Row } from "reactstrap";
import { Link } from "react-scroll";

function Navbar(props) {
  return (
    <div
      className={
        props.isScrolled ? "allTheNavBar scrolledNavbar" : "allTheNavBar"
      }
      style={
        props.isScrolled
          ? { backgroundColor: "black" }
          : { backgroundColor: "transparent" }
      }
    >
      <Row>
        <Col>
          <div className="brandNameContainer">
            <h1 className="brandNameNavBar">dolla</h1>
          </div>
        </Col>
        <Col>
          <div className="widgetContainer">
            <h2 className="widgetName">
              <Link
                activeClass="active widgetName"
                to="1"
                spy={true}
                smooth={true}
                duration={80}
              >
                About
              </Link>
            </h2>
            <h2 className="widgetName">
              <Link
                activeClass="active widgetName"
                to="2"
                spy={true}
                smooth={true}
                duration={80}
              >
                Discover
              </Link>
            </h2>
            <h2 className="widgetName">
              <Link
                activeClass="active widgetName"
                to="4"
                spy={true}
                smooth={true}
                duration={80}
              >
                Services
              </Link>
            </h2>
            <h2 className="widgetName">
              <Link
                activeClass="active widgetName"
                to="5"
                spy={true}
                smooth={true}
                duration={80}
              >
                Sign Up
              </Link>
            </h2>
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
