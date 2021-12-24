import "./App.css";
import Navbar from "./Components/Navbar";
import { Row, Col, Container } from "reactstrap";
//importing video background
import BackgroundVideo from "./videos/background.mp4";
//importing lottie for animations svg
import Lottie from "react-lottie";
//importing all my animations
import TravelAnimationData from "./animation/travel.json";
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
            <Container>
              <div className="containerOfFirstCol">
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
            </Container>
          </Col>
          <Col>
            <Lottie
              options={{ ...options, animationData: TravelAnimationData }}
              width={500}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
