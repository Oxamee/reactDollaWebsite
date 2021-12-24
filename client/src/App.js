import "./App.css";
import Navbar from "./Components/Navbar";
import { Row, Col } from "reactstrap";
//importing video background
import BackgroundVideo from "./videos/background.mp4";
//importing lottie for animations svg
import Lottie from "react-lottie";
//importing all my animations
import TravelAnimationData from "./animation/travel.json";
import MoneyAnimationData from "./animation/money.json";
import WinAnimationData from "./animation/win.json";
import GraphAnimationData from "./animation/graph.json";
import CashbackAnimationData from "./animation/cashback.json";

//import services for services section
import OneServiceCard from "./Components/OneServiceCard.jsx";

function App() {
  //options for animation (use spread object ... for animationData value)
  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="Container">
      <Navbar />
      <div className="firstSection">
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
        <button className="buttonOfFirstSection">Get Started {">"}</button>
      </div>
      <div className="secondSection">
        <Row>
          <Col>
            <div className="containerOfFirstCol">
              <div className="firstCol">
                <p className="littleDescriptionSecondSection">PREMIUM BANK</p>
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
                <button className="buttonOfFirstSection">Get Started</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="containerOfAnimation">
              <Lottie
                options={{ ...options, animationData: TravelAnimationData }}
                width={500}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="thirdSection">
        <Row>
          <Col>
            <div className="thirdSectionAnimationContainer">
              <Lottie
                options={{ ...options, animationData: MoneyAnimationData }}
                width={500}
              />
            </div>
          </Col>
          <Col>
            <div className=" containerOfFirstCol containerOfFirstColThirdSection">
              <div className="firstCol">
                <p className="littleDescriptionSecondSection">PREMIUM BANK</p>
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
                <button className="buttonOfThirdSection">Learn More</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="fourthSection">
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
    </div>
  );
}

export default App;
