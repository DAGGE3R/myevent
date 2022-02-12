// import { Register } from "./Components/Register/register";
import  Login  from "./Components/Login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


 const App = () => {
  return (
    <div> 
      <Router>
        <Routes> 
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  </div>
  )
}
export default App
