import React from "react";

function Host(props) {
  return (
    <>
      <span className="nom-proprio">{props.name}</span>
      <img className="photo-proprio" src={props.picture} alt="Propriétaire" />
    </>
  );
}

export default Host;
