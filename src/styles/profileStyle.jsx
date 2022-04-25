import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import ReportIcon from "@mui/icons-material/Report";
export const ProfileCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,900;1,300;1,600&display=swap");
  font-family: "Montserrat", sans-serif;
  background-color: #212121;
  max-width: 50%;
  height: fit-content;
  border-radius: 20px;
  padding: 10px;
  margin: auto;
  /* position: relative; */
  justify-content: space-around;
  display: flex;
  flex-direction: row;

  img {
    border-radius: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 32px;
    margin: 1%;
    color: #e63946;
    /* margin-top: 1%; */
  }
  p {
    font-weight: 300;
    color: white;
    margin: 2%;
    /* margin-top: 2%; */
  }
`;

export const StyleIcon = styled(RemoveIcon)`
  color: White;
  float: right;
  background-color: #e63946;
  border-radius: 5px;
  padding: 15px;
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
  padding: 15px;
  margin-top: 20%;
  cursor: pointer;

  &:hover {
    background-color: #e32231;
  }
`;

export const StyledLog = styled.div`
  h1 {
    margin: 0;
    padding: 0;
    color: #e63946;
    font-size: 4vh;
    float: right;
    width: fit-content;
    /* margin-bottom: 40px; */
  }
`;
