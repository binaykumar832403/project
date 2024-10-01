import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../stylesheet/UserSignup.css'

function UserSignUp(){
    const navigate=useNavigate()
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [usernameErr,setUsernameErr]=useState()
    const [emailErr,setEmailErr]=useState()
    const [passwordErr,setPasswordErr]=useState()
    const [msg,setMsg]=useState()

    const handleChange=(e,keyword)=>{
        e.preventDefault()
        if(keyword==="username"){
            setUsername(e.target.value)
        }else if(keyword==="email"){
            setEmail(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }
    const handleSignup=(e)=>{
        e.preventDefault()
        if(!username){
            setUsernameErr(" * please enter username")
        }else if(!email){
            setEmailErr(" * please enter email")
        }else if(!password){
            setPasswordErr(" * please enter password")
        }else{}

        if(username&&email&&password){
            axios.post("http://localhost:3001/UserCredential",{
                username:username,
                email:email,
                password:password,
                
            }).then((res)=>{
                setMsg("Account is created successfully")
                setTimeout(()=>{
                    navigate('/userLogin')
                },3000)
            })
        }
    }
    return(
        <>
            <div className="user-outer-container">
                <div className="user-signup-container">
                    <h1>User SignUp Page</h1>
                    <form>
                        <div className="user-signup-container-item">
                            <label>Username :</label>
                            <input type="text" placeholder="Enter Username" onChange={(e)=>handleChange(e,"username")}/>
                            <span className="signup-span">{usernameErr}</span>
                        </div>
                        <div className="user-signup-container-item">
                            <label>Email :</label>
                            <input type="email" placeholder="Enter Email" onChange={(e)=>handleChange(e,"email")}/>
                            <span className="signup-span">{emailErr}</span>
                        </div>
                        <div className="user-signup-container-item">
                            <label>Password :</label>
                            <input type="password" placeholder="Enter password" onChange={(e)=>handleChange(e,"password")}/>
                            <span className="signup-span">{passwordErr}</span>
                        </div>
                        
                        <div className="user-signup-btn">
                            <button onClick={(e)=>handleSignup(e)}>Signup</button>
                        </div>
                        <p className="user-success-msg">{msg}</p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UserSignUp