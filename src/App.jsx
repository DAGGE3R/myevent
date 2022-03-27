import { Login } from "./Components/Login/login";
import { Home } from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./Components/Register/register";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
