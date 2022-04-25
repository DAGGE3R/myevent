import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { FormControl } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const RepForm = ({ resetVal, handleChange, report, handleSave }) => {
  return (
    <FormControl
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <TextField
          InputLabelProps={{ shrink: true }}
          autoFocus
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          value={report.name}
          onChange={handleChange}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          value={report.email}
          onChange={handleChange}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          name="phone"
          label="Phone"
          variant="outlined"
          value={report.phone}
          onChange={handleChange}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          multiline
          minRows={5}
          maxRows={15}
          name="message"
          label="Message"
          variant="outlined"
          value={report.message}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Button
          style={{
            backgroundColor: "green",
            marginRight: "2%",
            boxShadow: "none",
          }}
          onClick={handleSave}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        <Button
          onClick={resetVal}
          style={{ backgroundColor: "#ef3335", boxShadow: "none" }}
          variant="contained"
          endIcon={<DeleteIcon />}
        >
          Cancel
        </Button>{" "}
      </div>
    </FormControl>
  );
};
