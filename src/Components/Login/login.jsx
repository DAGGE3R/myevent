import {useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import'../../styles/login.css'


 export const Login = () => {
  const navigate =useNavigate()
    const[user,setUser] = useState({
      email:"",
      password :""
    })

    const handleChange = e =>{
      e.preventDefault()
      const {name, value}=e.target
      setUser({
        ...user,[name]:value
      })
    }

    const login =(e)=>{
      e.preventDefault()
      axios.post('',user).then(res=>{alert(res.data.message)
      //setLoginUser(res.data.user)
     navigate("/")
    })
    };

  return (
     <center> 
      <form action='#' className='form' > 
          <input type="text" className="Email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
          <input type="text" className='pw' name="password" value={user.password} onChange={handleChange} placeholder="Password" />
          <button type='submit' className='sub-btn' onClick={login} > Login </button>
      <a href='Register' onClick={()=>navigate("/Register")}> you don't have an account ?</a>
      
     
    </form>
    </center>
  )
}
