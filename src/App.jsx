import { Login } from "./Components/Login/login";
import { Home } from "./Components/Home/Home";
import { Event } from "./Components/CreateEvent/Event";
import { Profile } from "./Components/Profile/Profile";
import { ReportB } from "./Components/Report/report";
import { Admin } from "./Components/Admin/admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./Components/Register/register";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path="/Reserve" element={<Reserve />} /> */}
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/report" element={<ReportB />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Event" element={<Event />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
