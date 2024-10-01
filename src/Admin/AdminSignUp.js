import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import '../stylesheet/AdminSignUp.css'

function AdminSignUp(){
  const Navigate=useNavigate()
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const[phone,setPhone]=useState()
  const[usernameErr,setUsernameErr]=useState()
  const[emailErr,setEmailErr]=useState()
  const[passwordErr,setPasswordErr]=useState()
  const[phoneErr,setPhoneErr]=useState()
  const[msg,setMsg]=useState()

  const handleChange=(e,keyword)=>{
    e.preventDefault()
    if(keyword==="username"){
      setUsername(e.target.value)
    }
    else if(keyword==="email"){
      setEmail(e.target.value)
    }
    else if(keyword==="password"){
      setPassword(e.target.value)
    }
    else{
      setPhone(e.target.value)
    }
  }

  const handleSignup=(e)=>{
   e.preventDefault()
    if(!username){
      setUsernameErr(" * please enter username")
    }
    else if(!email){
      setEmailErr(" * please enter email")
    }
    else if(!password){
      setPasswordErr(" * please enter password")
    } 
    else if(!phone){
      setPhoneErr(" * please enter phone number")
    }
    else{}
  }
  if(username&&email&&password&&phone){
    axios.post("http://localhost:3001/adminCredentials",{
      username:username,
      email:email,
      password:password,
      phone:phone
    }).then((res)=>{
      setMsg("Account is creadet successfully")
      setTimeout(()=>{
        Navigate('/adminLogin')
      },3000)
    })
  }

return(
  <>
  <div className="admin-signup-container">
    <h1>Admin Signup Page</h1>
   <form>
      <div className="admin-signup-container-item">
         <label>Username:</label>
         <input type="text" placeholder="Enter Username" onChange={(e)=>handleChange(e,"username")}/>
         <span className="signup-span">{usernameErr}</span>
      </div>

      <div className="admin-signup-container-item">
         <label>Email:</label>
         <input type="email" placeholder="Enter Email" onChange={(e)=>handleChange(e,"email")}/>
         <span className="signup-span">{emailErr}</span>
      </div>

      <div className="admin-signup-container-item">
         <label>Password:</label>
         <input type="password" placeholder="Enter Password" onChange={(e)=>handleChange(e,"password")}/>
         <span className="signup-span">{passwordErr}</span>
      </div>

      <div className="admin-signup-container-item">
         <label>Phone:</label>
         <input type="text" placeholder="Enter Phone Number" onChange={(e)=>handleChange(e,"phone")}/>
         <span className="signup-span">{phoneErr}</span>
      </div>
      <div className="admin-signup-btn">
        <button onClick={(e)=>handleSignup(e)}>Signup</button>
      </div>
      <p className="admin--success-msg">{msg}</p>
    </form>
  </div>
  </>
)
}
export default AdminSignUp