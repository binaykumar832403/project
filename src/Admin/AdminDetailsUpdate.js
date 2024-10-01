import axios from "axios";
import { useState } from "react";
import {useNavigate,useParams,usepParams} from "react-router-dom"
import '../stylesheet/AdminDetailsUpdate.css'

function AdminDetailsUpdate(){
  const params=useParams()
  const id=params.id
  const navigate=useNavigate()
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[unameErr,setUnameErr]=useState()
  const[emailErr,setEmailErr]=useState()
  const[phoneErr,setPhoneErr]=useState()
  const[updateMsg,setUpdateMsg]=useState()

  const handleChange=(e,keyword)=>{
    e.preventDefault()
    if(keyword==="username"){
      setUsername(e.target.value)
    }else if(keyword==="email"){
     setEmail(e.target.value) 
    }else{
      setPhone(e.target.value)
    }
  }
  const handleUpdate=(e)=>{
    e.preventDefault()
    if(!username){
      setUnameErr(" * please enter your username")
    }else if(!email){
      setEmailErr(" * please enter your email")
    }else if(!phone){
      setPhoneErr(" * please enter your phone")
    }else{}
    

    if(username&&email&&phone){
      axios.patch(`http://localhost:3001/adminCredentials/${id}`,{
        username:username,
        email:email,
        phone:phone
      }).then((res)=>setUpdateMsg("Details updated successfully...")).catch((err)=>console.log(err))
    }
  }
  const handleLogin=(e)=>{
    e.proventDefault()
    navigate('/adminLogin')
  }
  return(
    <>
    <div className="update-outer-container">
      <h1>Admin Details Update Page</h1>
      <div className="admin-update-container">
        <h2>Update Details here</h2>
        <form>
          <div className="admin-update-container-item">
            <label>UserName :</label>
            <input type="text" onChange={(e)=>handleChange(e,"username")} placeholder="Enter New Username"/>
            <span className="update-err-msg">{unameErr}</span>
          </div>

          <div className="admin-update-container-item">
            <label>Email :</label>
            <input type="text" onChange={(e)=>handleChange(e,"username")} placeholder="Enter New Email"/>
            <span className="update-err-msg">{emailErr}</span>
          </div>

          <div className="admin-update-container-item">
            <label>Phone :</label>
            <input type="text" onChange={(e)=>handleChange(e,"phone")} placeholder="Enter New Phone Number "/>
            <span className="update-err-msg">{phoneErr}</span>
          </div>
          <div className="update-button-container">
            <button onClick={(e)=>handleUpdate(e)}>Update</button>
            <button onClick={(e)=>handleLogin(e)}>go to login</button>
          </div>
           <p id="update-msg">{updateMsg}</p>
        </form>
      </div>
    </div>
    </>
  )
}
export default AdminDetailsUpdate;