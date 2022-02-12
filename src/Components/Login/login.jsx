import {useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"


 const Login = () => {
  const navigate =useNavigate()
    const[user,setUser] = useState({
      email:"",
      password :""
    })

    const handleChange = e =>{
      const {name, value}=e.target
      setUser({
        ...user,[name]:value
      })
    }

    const login =()=>{
      axios.post('',user).then(res=>{alert(res.data.message)
      //setLoginUser(res.data.user)
     navigate("/")
    })
    };

  return (
    <div>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      <button type='submit' onClick={login} > Login </button>
      <a href="_blank" target="_blank" onClick={navigate("/Register")}
      > 
      <span>
      you don't have an account ?  
      </span>
         
          </a>
    </div>
  )
}
export default Login
