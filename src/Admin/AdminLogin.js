import axios from "axios";
import { useContext,useState } from "react";
import {useNavigate} from "react-router-dom";
import AdminContext from "../contextApi/AdminContext";
import '../stylesheet/AdminLogin.css'


function AdminLogin(){
  let Navigate = useNavigate()
  const{globalUsername, setGlobalUsername}=useContext(AdminContext)
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const[unameErr,setUnameErr]=useState()
  const[emailErr,setEmailErr]=useState()
  const[pwdErr,setPwdErr]=useState()


  const handleChange=(e,keyword)=>{
    e.preventDefault()
    if(keyword==="username"){
      setUsername(e.target.value)
    }
    else if(keyword==="email"){
      setEmail(e.target.value)
    }
    else{
      setPassword(e.target.value)
    }
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    if(!username){
      setUnameErr(" * please enter username")
    }
    if(!email){
      setEmailErr(" * please enter email")
    }
    if(!password){
      setPwdErr(" * please enter password")
    }
    if(username && email && password){
      axios.get(`http://localhost:3001/adminCredentials?username=${username}`).then((res)=>{
        let result=res.data
        if(result[0].password===password){
          setGlobalUsername(username)
          Navigate(`/adminDashBoard`)
        }
      }).catch((err)=>{
        console.log(err)
        Navigate("/adminSignup")
      })
    }
  }
  const handleSignup=()=>{
    Navigate("/adminSignup")
  }
  return(
    <>
    <div className="admin-container">
      <h1>Admin Login Page</h1>
      <form>

        <div className="admin-container-item">
            <label>UserName</label>
            <input type="text" onChange={(e)=>handleChange(e,"username")}/>
            <span className="admin-span">{unameErr}</span>
        </div>
        <div className="admin-container-item">
            <label>Email :</label>
            <input type="email" onChange={(e)=>handleChange(e,"email")}/>
            <span className="admin-span">{emailErr}</span>
        </div>
        <div className="admin-container-item">
           <label>Password :</label>
           <input type="password" onChange={(e)=>handleChange(e,"Password")}/>
           <span className="admin-span">{pwdErr}</span>
        </div>

        <div className="admin-button">
           <button onClick={(e)=>handleLogin(e)}>Login</button>
        </div>
        <p className="admin-signup-text " onClick={()=>handleSignup()}>don't have account? please click here to signup</p>
      </form>
    </div>
    </>
  )
}
export default AdminLogin;