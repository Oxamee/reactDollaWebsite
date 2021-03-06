import "./App.css";
import React, { useState, useEffect } from "react";
//import Navbar
import Navbar from "./Components/Navbar";
// import reactstrap for layout
import { Row, Col } from "reactstrap";
//importing video background
import BackgroundVideo from "./videos/background.mp4";
//importing lottie for animations
import Lottie from "react-lottie";
//importing all my animations
import TravelAnimationData from "./animation/travel.json";
import MoneyAnimationData from "./animation/money.json";
import WinAnimationData from "./animation/win.json";
import GraphAnimationData from "./animation/graph.json";
import CashbackAnimationData from "./animation/cashback.json";
import ChartAnimationData from "./animation/chart.json";
//import services for services section
import OneServiceCard from "./Components/OneServiceCard.jsx";
// for loading screen
import BeatLoader from "react-spinners/BeatLoader";
//import footer
import Footer from "./Components/Footer";
//for NavBar scroll when clicked
import { Link } from "react-scroll";
//for animation css
import { useSpring, animated } from "react-spring";

function App() {
  //for loading when opening the website
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //1 sec so the background video would charge
  }, []);

  //is navigation bar opened

  const [isOpen, setIsOpen] = React.useState(false);
  //animation of opening the hamburger menu
  const appearanceStyle = useSpring({
    height: isOpen ? 380 : 0,
  });
  //options for animation (use spread object ... for animationData value)
  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //change color of navbar on scroll
  const [isScrolled, setScrolled] = useState(false);
  function changeBackground() {
    setScrolled(window.pageYOffset <= 0 ? false : true);
  }
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      {isLoading ? (
        <div className="loadingDiv">
          <BeatLoader color={"#121212"} loading={isLoading} size={50} />
        </div>
      ) : (
        <div className="Container">
          <Navbar
            isScrolled={isScrolled}
            isOpen={isOpen}
            setIsOpen={(isOpen) => {
              setIsOpen(isOpen);
            }}
          />
          {isOpen ? (
            <animated.div className="menuOpened" style={appearanceStyle}>
              <Link
                to="1"
                spy={true}
                activeClass="activeMobileNavBarClass"
                smooth={true}
                duration={80}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p className="oneOpenedMenuItem">About</p>
              </Link>
              <Link
                to="2"
                spy={true}
                activeClass="activeMobileNavBarClass"
                smooth={true}
                duration={80}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p className="oneOpenedMenuItem">Discover</p>
              </Link>
              <Link
                to="4"
                activeClass="activeMobileNavBarClass"
                spy={true}
                smooth={true}
                duration={80}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p className="oneOpenedMenuItem">Services</p>
              </Link>
              <Link
                to="5"
                spy={true}
                activeClass="activeMobileNavBarClass"
                smooth={true}
                duration={80}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p className="oneOpenedMenuItem">Sign Up</p>
              </Link>
              <a
                href="https://5euros.com/profil/oxame"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="oneOpenedMenuItemButton">Sign In</button>
              </a>
            </animated.div>
          ) : null}
          <div className="firstSection" id="1">
            <video
              src={BackgroundVideo}
              loop
              muted
              autoPlay
              className="videoBackground"
            ></video>
            <h1 className="titleOfFirstSection">Virtual Banking Made Easy</h1>
            <p className="DescriptionOfFirstSection">
              Sign up for a new account today and receive $250
              <br />
              in credit towards your next payment
            </p>
            <a
              href="https://5euros.com/profil/oxame"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="buttonOfFirstSection">
                Get Started {">"}
              </button>
            </a>
          </div>
          <div className="secondSection" id="2">
            <Row>
              <Col md={12} lg={6}>
                <div className="firstCol">
                  <div>
                    <p className="littleDescriptionSecondSection">
                      PREMIUM BANK
                    </p>
                    <h1 className="titleOfSecondSection">
                      Unlimited
                      <br />
                      Transactions with
                      <br />
                      zero fees
                    </h1>
                    <p className="descriptionOfSecondSection">
                      Get access to our exclusive app that allows you
                      <br />
                      to send unlimited transactions without getting
                      <br />
                      charged any fees
                    </p>
                    <a
                      href="https://5euros.com/profil/oxame"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <button className="buttonOfFirstSection">
                        Get Started
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="containerOfAnimation">
                  <Lottie
                    options={{ ...options, animationData: TravelAnimationData }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="thirdSection" id="3">
            <Row>
              <Col md={12} lg={6}>
                <div className="thirdSectionAnimationContainer">
                  <Lottie
                    options={{ ...options, animationData: MoneyAnimationData }}
                  />
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className=" containerOfFirstCol containerOfFirstColThirdSection">
                  <div className="firstCol">
                    <p className="littleDescriptionSecondSection">
                      PREMIUM BANK
                    </p>
                    <h1 className="titleOfSecondSection titleOfThirdSection">
                      Login to your
                      <br />
                      account at any
                      <br />
                      time
                    </h1>
                    <p className="descriptionOfSecondSection descriptionOfThirdSection">
                      We have you covered no matter where you are
                      <br />
                      located. All you need is an internet connection
                      <br />
                      and a phone or computer
                    </p>
                    <a
                      href="https://5euros.com/profil/oxame"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <button className="buttonOfThirdSection">
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="fourthSection" id="4">
            <h1 className="titleOfFourthSection">Our Services</h1>
            <div className="allTheServicesDiv">
              <OneServiceCard
                title="Reduce Expenses"
                description="We help reduce your fees and increase your overall revenue."
                animationData={WinAnimationData}
              />
              <OneServiceCard
                title="Virtual Offices"
                description="You can access our platform online anywhere in the world"
                animationData={GraphAnimationData}
              />
              <OneServiceCard
                title="Premium Benefits"
                description="Unlock our special membership card that returns 5% cash back"
                animationData={CashbackAnimationData}
              />
            </div>
          </div>
          <div className="fifthSection" id="5">
            <Row>
              <Col md={12} lg={6}>
                <div className="allTheFifthTexts">
                  <p className="littleDescriptionSecondSection">
                    JOIN OUR TEAM
                  </p>
                  <h1 className="titleOfFifthSection">
                    Creating an
                    <br />
                    account is
                    <br />
                    extremely easy
                  </h1>
                  <p>
                    Get everything set up and ready in under 10 <br />
                    minutes. All you need to do is add your
                    <br />
                    information and you're ready to go
                  </p>
                  <a
                    href="https://5euros.com/profil/oxame"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <button className=" buttonOfFirstSection buttonOfFifthSection">
                      Start Now
                    </button>
                  </a>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <Lottie
                  options={{ ...options, animationData: ChartAnimationData }}
                />
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
