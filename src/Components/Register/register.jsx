import React,{useState} from 'react'
import axios from 'axios'; 


export const Register = () => {
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange = e =>{
        const {name,value} = e.target 
        setUser({...user,
            [name]:value
        })
    }
    const register =()=>{
        const {name,email,password}=user 
        if(name&&email&&password){
            axios.post('',user).then(res=>console.log(res))
        }
        else{
            alert("invalid input")
        };
    }
  return (
    <div>
        <form action="#">
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            <button type='submit' onClick={register} > Register </button>
        </form>
    </div>
  )

  }
