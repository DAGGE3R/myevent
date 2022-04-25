import React, { useState, useEffect } from "react";
import { Nav } from "../../styles/homeStyle";
import { Link } from "react-router-dom";
import { logout } from "../Profile/Profile";
import { AdminCard } from "./adminCard";
import axios from "axios";
export const Admin = () => {
  const [rep, setRep] = useState([]);

  const delRes = async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    const res = await axios.delete(`http://localhost:3001/api/delRep/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;
    if (data) {
      console.log(data);
      del(id);
    }
  };
  const del = (elementId) => {
    const newEventArr = rep.filter((e) => e._id !== elementId);
    setRep([...newEventArr]);
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:3001/api/listreport", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;
    if (data) {
      console.log(data);
      setRep([...data.report]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Nav>
        <Link to={"/"} style={{ margin: 0, marginRight: "65%" }}>
          <h1 style={{ fontFamily: "Montserrat" }}>
            MY<span>EVENT</span>
          </h1>
        </Link>
        <Link to={"/"} style={{ margin: 0 }}>
          <h1
            style={{ color: "#e63946", fontFamily: "Montserrat" }}
            onClick={() => logout()}
          >
            logout
          </h1>
        </Link>
      </Nav>
      <h2
        style={{
          textAlign: "center",
          margin: "2%",
          color: "#e63946",
          fontSize: "75px",
          fontFamily: "Montserrat",
        }}
      >
        REPORTS
      </h2>
      <div
        style={{
          marginTop: "3%",
          margin: "auto ",
          width: "80vw",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto ",
        }}
      >
        {rep.map((e) => (
          <AdminCard report={e} key={e._id} onDelete={() => delRes(e._id)} />
        ))}
      </div>
    </div>
  );
};
