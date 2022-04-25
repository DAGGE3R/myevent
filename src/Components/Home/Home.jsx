import { useState, useEffect } from "react";
import { Nav, Container, Img, Card } from "../../styles/homeStyle";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const getEvents = async () => {
    const res = await axios.get("http://localhost:3001/api/home");
    const data = await res.data;
    setEvents([...data.event]);
  };

  const authAdmin = () => {
    let x = prompt("enter Code here");
    if (x === "123456") {
      navigate("/admin");
    } else {
      alert("Wrong passcode");
    }
  };

  useEffect(() => {
    getEvents();
    const token = localStorage.getItem("token");
    if (token)
      return () => {
        setLoggedIn(true);
      };
  }, [events]);

  return (
    <Container>
      <Nav>
        <h1>
          MY<span>EVENT</span>
        </h1>
        {loggedIn ? (
          <a style={{ cursor: "pointer" }} onClick={() => authAdmin()}>
            Admin Panel
          </a>
        ) : (
          <Link to="/Login">Admin Panel</Link>
        )}
        {loggedIn ? (
          <Link to={"/Event"}>Create an event</Link>
        ) : (
          <Link to="/Login">Create an event</Link>
        )}

        {loggedIn ? (
          <Link to={"/Profile"}>Profile</Link>
        ) : (
          <Link to={"/Login"}>Sign in</Link>
        )}
      </Nav>
      <Img>
        <h3>Live your life at it's fullest</h3>
        <img src="https://random.imagecdn.app/1920/500" alt=""></img>
      </Img>
      <h2>CURRENT EVENTS : </h2>
      <Card>
        {events.map((element) => (
          <Cards key={element._id} event={element}></Cards>
        ))}
      </Card>
    </Container>
  );
};
