import styled from "styled-components";
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 350px;
  height: 40px;
  margin: 0;
  padding: 0;
  margin-top: 25px;
  color: white;
  background-color: #e32231;
  font-size: 16px;
  &:hover {
    background-color: black;
    cursor: pointer;
    background-color: #e63946;
  }
`;
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,900;1,300;1,600&display=swap");
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;

  img {
    width: 700px;
    float: right;
    margin-right: 12%;
    margin-top: 3%;
  }
  a {
    text-decoration: none;
    box-sizing: border-box;
    width: 18%;
    font-size: 16px;
    font-weight: 300;
    margin-top: 3%;
    margin-left: 13%;
  }
  h4 {
    width: 15%;
    text-align: center;
    border-bottom: 1px solid #c4c4c4;
    line-height: 0.1em;
    margin: 10px 0 20px;
    margin-left: 11.5%;
    margin-top: 2%;
  }

  h4 span {
    color: #c4c4c4;
    background: #fff;
    padding: 0 10px;
  }
`;
export const Nav = styled.div`
  h1 {
    margin: 0;
    padding-top: 30px;
    padding-left: 30px;
    font-weight: 300;
    font-size: 50px;
    color: black;
  }
  h1 span {
    font-weight: 600;
    color: #e63946;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-top: 11%;
  width: 500px;

  h3 {
    font-weight: 600;
    font-size: 30px;
    text-decoration: underline;
    margin-bottom: 10%;
    color: #e63946;
  }

  input[type="text"],
  input[type="password"] {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: 10px 10px 10px;
    width: 350px;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 15px;
    font-size: 16px;
  }
`;
