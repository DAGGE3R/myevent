import React from "react";

export const Cards = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginLeft: "50%",
        marginTop: "10%",
      }}
    >
      <img src="https://random.imagecdn.app/200/250" alt=""></img>
      <div>
        <h2>{props.name}</h2>
        <h6>{props.description}</h6>
      </div>
    </div>
  );
};
