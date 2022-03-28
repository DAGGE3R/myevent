import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav } from "../../styles/eventStyle";
import eventPic from "../../Assets/event.png";

export const Event = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: "",
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
      name,
      type,
      category,
      description,
      date,
      location,
      participantNumber,
    } = event;
    if (
      name &&
      type &&
      category &&
      description &&
      date &&
      location &&
      participantNumber
    ) {
      axios.post("", event).then((res) => console.log(res));
      navigate("/Profile");
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
      <Form action="#">
        <h3>Create your event</h3>
        <input
          autoFocus
          type="text"
          name="name"
          value={event.name}
          onChange={handleChange}
          placeholder="Event Name "
        />
        <input
          type="text"
          name="type"
          value={event.type}
          onChange={handleChange}
          placeholder="Type"
        />
        <input
          type="text"
          name="category"
          value={event.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="text"
          name="description"
          value={event.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="participantNumber"
          value={event.participantNumber}
          onChange={handleChange}
          placeholder="Number of participants"
        />
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <Button type="submit" onClick={addEvent}>
          Create event
        </Button>
      </Form>
    </Container>
  );
};
