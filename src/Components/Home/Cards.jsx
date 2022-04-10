import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { red } from "@mui/material/colors";
import axios from "axios";

export const Cards = ({ event }) => {
  const reserveEvent = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `http://localhost:3001/api/reserved/${event._id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.data;
    console.log(data);
  };
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
      <div
        style={{
          position: "relative",
        }}
      >
        <img src="https://random.imagecdn.app/200/250" alt=""></img>
        <AddBoxIcon
          fontSize="large"
          sx={{ color: red[800] }}
          style={{
            cursor: "pointer",
          }}
          onClick={reserveEvent}
        ></AddBoxIcon>
      </div>
      <div>
        <h2>{event.eventName}</h2>
        <h6>{event.description}</h6>
      </div>
    </div>
  );
};
