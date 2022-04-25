import {
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import { Nav } from "../../styles/homeStyle";
import { FormEvent } from "../CreateEvent/FormEvent";
import { MyEventCard } from "./myEventCard";
import { EventCard } from "./reservedEventCard";
import { Link } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState({
    id: null,
    name: "",
    description: "",
    index: null,
  });

  const [events, setEvents] = React.useState([]);

  const [reservedEvents, setReservedEvents] = React.useState([]);

  // const delRes = async (id) => {
  //   console.log(id);
  //   const token = localStorage.getItem("token");
  //   const res = await axios.delete(`http://localhost:3001/api/delRes/${id}`, {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const data = await res.data;
  //   if (data) {
  //     console.log(data);
  //     handleReservedEventDelete(id);
  //   }
  // };

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
    const newEventArr = events.filter((e) => e._id !== elementId);
    setEvents([...newEventArr]);
  };
  const handleReservedEventDelete = (elementId) => {
    const newEventArr = reservedEvents.filter((e) => e._id !== elementId);
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
    const data = [...events];
    data[selectedEvent.index] = { ...selectedEvent };
    setEvents([...data]);
  };
  return (
    <div>
      <Nav>
        <Link to={"/"} style={{ margin: 0, marginRight: "65%" }}>
          <h1 style={{ fontFamily: "Montserrat" }}>
            MY<span>EVENT</span>
          </h1>{" "}
        </Link>
        <Link to={"/"} style={{ margin: 0 }}>
          <h1
            style={{ color: "#e63946", fontFamily: "Montserrat" }}
            onClick={() => logout()}
          >
            {" "}
            logout{" "}
          </h1>
        </Link>
      </Nav>
      <h1 style={{ fontFamily: "Montserrat", textAlign: "center" }}>
        My events
      </h1>
      {events.map((event, index) => (
        <MyEventCard
          event={event}
          key={event.id}
          onEdit={() => handleEdit(event, index)}
          onDelete={() => handleMyEventDelete(event._id)}
        ></MyEventCard>
      ))}
      <h1 style={{ fontFamily: "Montserrat", textAlign: "center" }}>
        My Reserved events
      </h1>
      {reservedEvents.map((event) => (
        <EventCard
          event={event}
          key={event.id}
          onDelete={() => handleReservedEventDelete(event._id)}
        ></EventCard>
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
export const logout = () => {
  localStorage.clear();
  <Link to={"/"}>Logout</Link>;
};
