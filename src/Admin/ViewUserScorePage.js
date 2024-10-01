import axios from "axios"
import { useEffect, useState } from "react"
import '../stylesheet/ViewUserScorePage.css'
import { useNavigate } from "react-router-dom"

function ViewUserScorePage(){
    const navigate=useNavigate()
    const [userScore,setUserScore]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/UserScore").then((res)=>setUserScore(res.data)).catch((err)=>console.log(err))
    })
    const handleGotoDashboard=()=>{
        navigate('/adminDashBoard')
    }
    return(
        <>
            <div className="view-score-container">
                <div className="view-score-container-item">
                    <h1>Score and Details of Each Users</h1>
                    <div className="score-details-outer-container">
                        {
                            userScore.map((item)=>(
                                <>
                                    <div className="score-details-container">
                                        <h2>UserName : {item.username}</h2>
                                        <h3>Score : {item.score}</h3>
                                    </div>
                                
                                </>
                            ))
                        }
                    </div>
                    <button className="goto-dashbord-btn" onClick={()=>handleGotoDashboard()}>goto DashBoard</button>
                </div>
            </div>
        </>
    )
}
export default ViewUserScorePage;