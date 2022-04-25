import React from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import ReportIcon from "@mui/icons-material/Report";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export const MyEventCard = ({ event, onDelete, onEdit }) => {
  return (
    <div>
      <ProfileCard>
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
            marginTop: "0.9%",
            marginRight: "0.8%",
          }}
        >
          <StyleIcon onClick={onDelete}></StyleIcon>
          <Link to={"/report"}>
            <StyleRepIcon />
          </Link>
          <StyleEdit onClick={onEdit} />
        </div>
      </ProfileCard>
    </div>
  );
};
const StyleEdit = styled(EditIcon)`
  color: White;
  float: right;
  background-color: #e63946;
  border-radius: 5px;
  padding: 8px;
  margin-top: 20%;
  cursor: pointer;

  &:hover {
    background-color: #e32231;
  }
`;
export const ProfileCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,900;1,300;1,600&display=swap");
  font-family: "Montserrat", sans-serif;
  background-color: #212121;
  width: 50%;
  height: fit-content;
  border-radius: 20px;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    /* position: absolute; */
    border-radius: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 32px;
    margin: 1%;
    color: #e63946;
    max-width: 100%;
    max-height: 50%;
  }
  p {
    font-weight: 300;
    color: white;
    margin: 2%;
    max-width: 100%;
    max-height: 30%;
  }
`;

export const StyleIcon = styled(RemoveIcon)`
  color: White;
  float: right;
  background-color: #e63946;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e32231;
  }
`;
export const StyleRepIcon = styled(ReportIcon)`
  color: White;
  float: right;
  background-color: #e63946;
  border-radius: 5px;
  padding: 8px;
  margin-top: 20%;
  cursor: pointer;

  &:hover {
    background-color: #e32231;
  }
`;
