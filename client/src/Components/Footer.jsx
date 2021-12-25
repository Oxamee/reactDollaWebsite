import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "reactstrap";
function Footer() {
  return (
    <div>
      <div className="allTheFooter">
        <Container>
          <Row>
            <Col>
              <h2 className="titleOfFooter">About Us</h2>
              <p className="oneFooterItem">How it works</p>
              <p className="oneFooterItem">Testimonials</p>
              <p className="oneFooterItem">Careers</p>
              <p className="oneFooterItem">Investors</p>
              <p className="oneFooterItem">Terms of Service</p>
            </Col>
            <Col>
              <h2 className="titleOfFooter">Contact Us</h2>
              <p className="oneFooterItem">Contact</p>
              <p className="oneFooterItem">Support</p>
              <p className="oneFooterItem">Destination</p>
              <p className="oneFooterItem">Sponsorships</p>
            </Col>
            <Col>
              <h2 className="titleOfFooter">Videos</h2>
              <p className="oneFooterItem">Submit Video</p>
              <p className="oneFooterItem">Ambassadors</p>
              <p className="oneFooterItem">Agency</p>
              <p className="oneFooterItem">Influencer</p>
            </Col>
            <Col>
              <h2 className="titleOfFooter">Social Media</h2>
              <p className="oneFooterItem">Instagram</p>
              <p className="oneFooterItem">Facebook</p>
              <p className="oneFooterItem">Youtube</p>
              <p className="oneFooterItem">Twitter</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="endOfFooter">
        <h1 className="titleOfWebsite">dolla</h1>
        <p className="rightsStyling">2022 All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
