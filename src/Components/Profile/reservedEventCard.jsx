import React from "react";
import {
  ProfileCard,
  StyleIcon,
  StyleRepIcon,
} from "../../styles/profileStyle";

export const EventCard = ({ event, onDelete }) => {
  return (
    <div style={{ margin: "15px auto" }}>
      <ProfileCard>
        <img src="https://random.imagecdn.app/150/150" alt=""></img>
        <div className="descName">
          <h3>{event.eventName}</h3>
          <p>{event.description}</p>
        </div>

        <div
          className="icons"
          style={{
            display: "flex",
            flexDirection: "column",
            float: "right",
            marginTop: "1.5%",
            marginRight: "1.5%",
          }}
        >
          <StyleIcon onClick={onDelete}></StyleIcon>
          <StyleRepIcon />
        </div>
      </ProfileCard>
    </div>
  );
};
