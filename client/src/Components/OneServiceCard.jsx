import React from "react";
import "./OneServiceCard.css";
//importing lottie for animations svg
import Lottie from "react-lottie";
function OneServiceCard(props) {
  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  var animationData = props.animationData;
  return (
    <div className="oneEntireCard">
      <Lottie
        options={{ ...options, animationData }}
        width={200}
        height={200}
        style={{ cursor: "default" }}
      />
      <h1 className="titleOfCard">{props.title}</h1>
      <p className="descriptionOfCard">{props.description}</p>
    </div>
  );
}

export default OneServiceCard;
