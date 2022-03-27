import styled from "styled-components";
export const Nav = styled.nav`
  justify-content: space-around;
  display: flex;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  height: 90px;
  a {
    margin-top: 35px;
    color: black;
    font-size: 20px;
    text-decoration: none;
    &:hover {
      color: #e32231;
    }
  }
  h1 {
    margin: 0;
    margin-top: 15px;
    font-weight: 300;
    font-size: 50px;
    color: black;
    height: 50px;
  }
  h1 span {
    margin-top: 20px;
    font-weight: 600;
    color: #e63946;
  }
`;

export const Card = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 5%;
  border-radius: 5px;
  width: 200px;
  display: flex;
  flex-direction: row;

  img {
    border-radius: 10px;
  }
  h2 {
    margin: 0;
    padding: 0;
  }
  h6 {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,900;1,300;1,600&display=swap");
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
`;
export const Img = styled.div`
  background-color: black;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  text-transform: uppercase;
  img {
    opacity: 0.5;
  }
  h3 {
    opacity: 1;
    position: absolute;
    margin: 0;
    padding: 0;
    width: 50%;
    top: 20%;
    left: 22.5%;
    font-size: 80px;
  }
`;
