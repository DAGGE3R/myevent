import React from "react";
import { Form, Button } from "../../styles/eventStyle";

export const FormEvent = ({
  event,
  handleChange,
  handleSave,
  btnText,
  title,
}) => {
  return (
    <Form action="#">
      <h3>{title}</h3>
      <input
        autoFocus
        type="text"
        name="eventName"
        value={event.eventName}
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
      <Button type="submit" onClick={handleSave}>
        {btnText}
      </Button>
    </Form>
  );
};
