import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav } from "../../styles/loginStyle";
import pana from "../../Assets/pana.png";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/login", user).then((res) => {
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.user);
      navigate("/");
    });
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

      <img src={pana} alt="" />
      <Form action="#" className="form">
        <h3>Login</h3>
        <input
          type="text"
          className="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          autoFocus
        />
        <input
          type="password"
          className="pw"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" className="sub-btn" onClick={login}>
          {" "}
          Login{" "}
        </Button>
      </Form>
      <h4>
        <span>OR</span>
      </h4>
      <a href="Register" onClick={() => navigate("/Register")}>
        You don't have an account ?
      </a>
    </Container>
  );
};
