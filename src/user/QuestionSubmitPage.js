import axios from "axios"
import { useContext, useEffect, useState } from "react"
import AdminContext from "../contextApi/AdminContext"
import '../stylesheet/QuestionSubmitPage.css'

function QuestionSubmitPage(){
    const {globalUsername}=useContext(AdminContext)
    const username=globalUsername

    const [userScore,setUserScore]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/UserScore?username=${username}`).then((res)=>setUserScore(res.data)).catch((err)=>console.log(err))
    })
    return(
        <>
            <div className="submitpage-container">
                <div className="submitpage-container-item">
                    {
                        userScore.map((item)=>(
                            <>
                                <h1>Hey {item.username}! Thanks for attending the assesmemt</h1>
                                <h2>your score is : {item.score}</h2>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default QuestionSubmitPage