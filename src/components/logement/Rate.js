import React from "react";
import inactiveStar from "../../assets&images/rate/star-inactive 1.png";
import activeStar from "../../assets&images/rate/star-active 1.png";

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="stars"
            src={inactiveStar}
            alt="Stars"
          />
        ) : (
          <img
            key={note.toString()}
            className="Stars"
            src={activeStar}
            alt="Stars"
          />
        )
      )}
    </div>
  );
}

export default Rate;
