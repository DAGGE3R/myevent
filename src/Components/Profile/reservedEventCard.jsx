import React from "react";
import { Link } from "react-router-dom";
import {
  ProfileCard,
  StyleIcon,
  StyleRepIcon,
} from "../../styles/profileStyle";

export const EventCard = ({ event, onDelete }) => {
  return (
    <div style={{ margin: "15px auto" }}>
      <ProfileCard
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img src="https://random.imagecdn.app/150/150" alt=""></img>
        <div>
          <h3>{event.eventName}</h3>
          <p>{event.description}</p>
        </div>

        <div
          className="icons"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1.5%",
            marginRight: "1.5%",
          }}
        >
          <StyleIcon onClick={onDelete}></StyleIcon>
          <Link to={"/report"}>
            <StyleRepIcon />
          </Link>
        </div>
      </ProfileCard>
    </div>
  );
};
