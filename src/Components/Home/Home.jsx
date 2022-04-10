import { useState, useEffect } from "react";
import { Nav, Container, Img, Card } from "../../styles/homeStyle";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);

  const dummyData = [
    { name: "Samir", description: "testing" },
    { name: "sarra", description: "123" },
    { name: "mounira", description: "double feuille" },
    { name: "salma", description: "sousou" },
    { name: "Samira", description: "sousou2" },
  ];

  const getEvents = async () => {
    const res = await axios.get("http://localhost:3001/api/home");
    const data = await res.data;
    setEvents([...data.event]);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
    getEvents();
  }, [events]);

  return (
    <Container>
      <Nav>
        <h1>
          MY<span>EVENT</span>
        </h1>
        {/*localStorage.setItem("token", "123654789");*/}
        {loggedIn ? (
          <Link to={"/Reserve"}>Reserve</Link>
        ) : (
          <Link to="/Login">Reserve</Link>
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
