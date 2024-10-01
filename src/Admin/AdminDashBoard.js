import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AdminContext from "../contextApi/AdminContext"
import '../stylesheet/AdminDashBoard.css'


function AdminDashBoard(){
    const navigate=useNavigate()
    const {globalUsername}=useContext(AdminContext)
    const username=globalUsername
    // const params=useParams()
    // const username=params.username
    const [adminData,setAdminData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3001/adminCredentials?username=${username}`).then((res)=>{
            let result=res.data
            setAdminData(result)
        }).catch((err)=>console.log(err))
        
    },[])
    const handleUpdate=(id)=>{
        navigate(`/adminDetailsUpdate/${id}`)
        
    }
    const handleCreateQuiz=()=>{
        navigate('/questionPage')
    }
    const handleViewScore=()=>{
        navigate('/viewUserScorePage')
    }
    
    return(
        <>
           <div className="admin-dashboard-container">
                <h1>Hey {username}! Welcome to Admin DashBoard</h1>
                {/* <p>UserName : {adminData[0].username}</p>
                <p>Email : {adminData[0].email}</p> */}
                <div className="admin-item-container">
                    <div className="adminDashboard-container">
                        
                        {
                            adminData.map((item)=>(
                                <>
                                    <div className="admin-details">
                                        <p>id : {item.id}</p>
                                        <p>UserName : {item.username}</p>
                                        <p>Email : {item.email}</p>
                                        <p>Phone : {item.phone}</p>
                                        <button id="admin-details-update" onClick={()=>handleUpdate(item.id)}>update details</button>
                                    </div>
                                    
                                </>
                            ))
                        }
                    </div>
                    <div className="admin-create-quiz">
                        <button onClick={()=>handleCreateQuiz()}>Create Quiz</button><br></br>
                        {/* <select>
                            <option value="">create quiz</option>
                            <option value="html">html</option>
                            <option value="react">react</option>
                            <option value="javascript">java script</option>
                        </select> <br></br> */}
                        <button id="view-user-btn" onClick={()=>handleViewScore()}>view user scores</button>
                    </div>
                </div>
               
            </div>
            
            
        </>
    )
}
export default AdminDashBoard