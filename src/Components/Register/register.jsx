import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav } from "../../styles/registerStyle";
import cuate from "../../Assets/cuate.png";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register = (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post("", user).then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  };
  return (
    <Container>
      <Nav>
        <a href="/">
          <h1>
            MY<span>EVENT</span>
          </h1>
        </a>
      </Nav>
      <img src={cuate} alt="" />
      <Form action="#">
        <h3>Register</h3>
        <input
          autoFocus
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="FullName"
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" onClick={register}>
          {" "}
          Register{" "}
        </Button>
      </Form>
      <h4>
        <span>OR</span>
      </h4>
      <a href="/Login" onClick={() => navigate("/Login")}>
        Sign in with your account
      </a>
    </Container>
  );
};
