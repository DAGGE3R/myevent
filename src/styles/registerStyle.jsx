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
  margin: 0;
  padding: 0;
  img {
    width: 700px;
    float: right;
    margin-right: 12%;
    margin-top: 3%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;

  input[type="text"],
  input[type="password"] {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: 10px 10px 10px;
    width: 350px;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-size: 16px;
  }
  h4 {
    width: 20.5%;
    text-align: center;
    border-bottom: 1px solid #c4c4c4;
    line-height: 0.1em;
    margin: 10px 0 20px;
    margin-left: 2px;
    margin-top: 30px;
  }

  h4 span {
    color: #c4c4c4;
    background: #fff;
    padding: 0 10px;
  }
`;
