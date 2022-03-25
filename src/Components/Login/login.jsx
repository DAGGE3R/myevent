import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Top } from "../../styles/loginStyle";
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
    axios.post("", user).then((res) => {
      alert(res.data.message);
      //setLoginUser(res.data.user)
      navigate("/");
    });
  };

  return (
    <Container>
      <Top>
        <h1>
          MY<span>EVENT</span>
        </h1>
        <div className="title">
          <h2>LOGIN </h2>
        </div>
      </Top>
      <img src={pana} alt="" />
      <Form action="#" className="form">
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
          type="text"
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
        <h4>
          <span>OR</span>
        </h4>
        <a href="Register" onClick={() => navigate("/Register")}>
          You don't have an account ?
        </a>
      </Form>
    </Container>
  );
};
