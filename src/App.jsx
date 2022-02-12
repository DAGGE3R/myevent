import  {Login}  from "./Components/Login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./Components/Register/register";



 const App = () => {
  return (
    <div> 
      <Router>
        <Routes> 
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Register" element={<Register/>}></Route>
        </Routes>
      </Router>
  </div>
  )
}
export default App
