import React from "react";
import inactiveStar from "../../assets&images/rate/star-inactive 1.png";
import activeStar from "../../assets&images/rate/star-active 1.png";

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      {notes.map((rating) =>
        score >= rating ? (
          <img
            key={rating.toString()}
            className="stars"
            src={activeStar}
            alt="Stars"
          />
        ) : (
          <img
            key={rating.toString()}
            className="stars"
            src={inactiveStar}
            alt="Stars"
          />
        )
      )}
    </div>
  );
}

export default Rate;
