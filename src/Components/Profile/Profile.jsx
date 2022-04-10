import {
  DialogTitle,
  DialogContent,
  Dialog,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import { Nav } from "../../styles/loginStyle";
import { FormEvent } from "../CreateEvent/FormEvent";
import { MyEventCard } from "./myEventCard";
import { EventCard } from "./reservedEventCard";
import axios from "axios";

export const Profile = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState({
    id: null,
    name: "",
    description: "",
    index: null,
  });
  const [events, setEvents] = React.useState([
    {
      id: 1,
      name: "event name",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
      sodales nunc. Aliquam convallis dolor nec neque eleifend porttitor.
      Integer pellentesque facilisis ante at aliquam. In nisl orci,
      maximus vitae metus eget, porta commodo dui. Phasellus eget
      vulputate eros.`,
    },
    {
      id: 2,
      name: "event name",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
      sodales nunc. Aliquam convallis dolor nec neque eleifend porttitor.
      Integer pellentesque facilisis ante at aliquam. In nisl orci,
      maximus vitae metus eget, porta commodo dui. Phasellus eget
      vulputate eros.`,
    },
    {
      id: 3,
      name: "event name",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
      sodales nunc. Aliquam convallis dolor nec neque eleifend porttitor.
      Integer pellentesque facilisis ante at aliquam. In nisl orci,
      maximus vitae metus eget, porta commodo dui. Phasellus eget
      vulputate eros.`,
    },
  ]);

  const [reservedEvents, setReservedEvents] = React.useState([
    {
      id: 1,
      name: "event name",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
        sodales nunc. Aliquam convallis dolor nec neque eleifend porttitor.
        Integer pellentesque facilisis ante at aliquam. In nisl orci,
        maximus vitae metus eget, porta commodo dui. Phasellus eget
        vulputate eros.`,
    },
  ]);
  const getData = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:3001/api/reservedList", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;
    if (data) {
      console.log(data);
      setEvents([...data.myEvents]);
      setReservedEvents([...data.reservedEvents]);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const handleMyEventDelete = (elementId) => {
    const newEventArr = events.filter((e) => e.id !== elementId);
    setEvents([...newEventArr]);
  };
  const handleReservedEventDelete = (elementId) => {
    const newEventArr = reservedEvents.filter((e) => e.id !== elementId);
    setReservedEvents([...newEventArr]);
  };

  const handleEdit = (event, index) => {
    setSelectedEvent({ ...event, index });
    setDialogOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent({ ...selectedEvent, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = [...reservedEvents];
    data[selectedEvent.index] = { ...selectedEvent };
    setReservedEvents([...data]);
  };
  return (
    <div>
      <Nav>
        <a href="/">
          <h1>
            MY<span>EVENT</span>
          </h1>
        </a>
      </Nav>
      <h1 style={{ fontFamily: "Montserrat", textAlign: "center" }}>
        My events
      </h1>
      {events.map((event) => (
        <EventCard
          event={event}
          key={event.id}
          onDelete={() => handleMyEventDelete(event.id)}
        ></EventCard>
      ))}
      <h1 style={{ fontFamily: "Montserrat", textAlign: "center" }}>
        My Reserved events
      </h1>
      {reservedEvents.map((event, index) => (
        <MyEventCard
          event={event}
          key={event.id}
          onDelete={() => handleReservedEventDelete(event.id)}
          onEdit={() => handleEdit(event, index)}
        ></MyEventCard>
      ))}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Edit Event</DialogTitle>
        <DialogContent>
          <FormEvent
            event={selectedEvent}
            handleChange={handleChange}
            handleSave={handleSave}
            btnText="edit event"
            title="update your event"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
