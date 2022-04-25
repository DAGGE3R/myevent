import React, { useState } from "react";
import { Nav } from "../../styles/homeStyle";
import { Link } from "react-router-dom";
import { logout } from "../Profile/Profile";
import { RepForm } from "./reportForm";
import axios from "axios";

export const ReportB = () => {
  const token = localStorage.getItem("token");
  const [report, setReport] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const addReport = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = report;
    if (name && email && phone && message) {
      axios
        .post("http://localhost:3001/api/report", report, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res))
        .then(alert("report sent"))
        .then(() => resetVal());
    } else alert("invalid input");
  };
  const resetVal = () => {
    setReport({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div style={{ fontFamily: "Montserrat" }}>
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
      <h3 style={{ textAlign: "center", fontSize: "45px", color: "#e63946" }}>
        Help Us By Reporting !
      </h3>
      <RepForm
        report={report}
        handleChange={handleChange}
        handleSave={addReport}
        resetVal={resetVal}
      />
    </div>
  );
};
