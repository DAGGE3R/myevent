import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav } from "../../styles/eventStyle";
import eventPic from "../../Assets/event.png";
import { FormEvent } from "./FormEvent";

export const Event = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [event, setEvent] = useState({
    eventName: "",
    type: "",
    category: "",
    description: "",
    date: "",
    location: "",
    participantNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };
  const addEvent = (e) => {
    e.preventDefault();
    const {
      eventName,
      type,
      category,
      description,
      date,
      location,
      participantNumber,
    } = event;
    if (
      eventName &&
      type &&
      category &&
      description &&
      date &&
      location &&
      participantNumber
    ) {
      axios
        .post("http://localhost:3001/api/createEvent", event, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res));
      navigate("/");
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
      <img src={eventPic} alt="" />
      <FormEvent
        event={event}
        handleChange={handleChange}
        handleSave={addEvent}
        btnText="Create event"
        title="Create your event"
      />
    </Container>
  );
};
