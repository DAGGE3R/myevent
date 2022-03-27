import { useState, useEffect } from "react";
import { Nav, Container, Img, Card } from "../../styles/homeStyle";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";

export const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const dummyData = [
    { name: "Samir", description: "testing" },
    { name: "sarra", description: "123" },
    { name: "mounira", description: "double feuille" },
    { name: "salma", description: "sousou" },
  ];
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  return (
    <Container>
      <Nav>
        <h1>
          MY<span>EVENT</span>
        </h1>
        <a href="Reserve">Reserve</a>
        {loggedIn ? (
          <a href="/Event">Create an event</a>
        ) : (
          <Link to="/Login">Create an event</Link>
        )}
        {/* <a href="Event">Create an event</a> */}
        <a href="Login">Sign in </a>
      </Nav>
      <Img>
        <h3>Live your life at it's fullest</h3>
        <img src="https://random.imagecdn.app/1920/500" alt=""></img>
      </Img>
      <h2>CURRENT EVENTS : </h2>
      <Card>
        {dummyData.map((element) => (
          <Cards name={element.name} description={element.description}></Cards>
        ))}
      </Card>
    </Container>
  );
};
