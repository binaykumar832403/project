import { useContext,useState } from "react"
import AdminContext from "../contextApi/AdminContext"
import '../stylesheet/ShowQuestion.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ShowQuestion(props){
    const {globalUsername}=useContext(AdminContext)
    const username=globalUsername
    const navigate=useNavigate()

    const {question,option1,option2,option3,option4,correctAns}=props.data
    
    const [score,setScore]=useState(0)
    const [submitScore,setSubmitScore]=useState(false)

    const handleOption=(e,keyword,value)=>{
        if(keyword==="option1"){
            if(value===correctAns){
                setScore(score+1)
            }else{}
        }else if(keyword==="option2"){
            if(value===correctAns){
                setScore(score+1)
            }else{}
        }else if(keyword==="option3"){
            if(value===correctAns){
                setScore(score+1)
            }else{}
        }else{
            if(value===correctAns){
                setScore(score+1)
            }
        }
    }
    const handleSubmit=()=>{
        setSubmitScore(true)
        axios.post("http://localhost:3001/UserScore",{
            username:username,
            score:score
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
        navigate('/submitpage')
    }
    return(
        <>
            <div className="que-outer-container">
                <div className="que-heading">
                    <h3>Question : {question}</h3>
                </div>
                <div className="que-options">
                    <input type="radio" id="question" name="question" value={option1} onClick={(e)=>handleOption(e,"option1",option1)}/>{option1}

                    <input type="radio" id="question" name="question" value={option2} onClick={(e)=>handleOption(e,"option2",option2)}/>{option2}

                    <input type="radio" id="question" name="question" value={option3} onClick={(e)=>handleOption(e,"option3",option3)}/>{option3}

                    <input type="radio" id="question" name="question" value={option4}  onClick={(e)=>handleOption(e,"option4",option4)}/>{option4}
                    
                </div>
                
                
            </div>
            <div className="see-score-btn">
                <button onClick={()=>handleSubmit()}>submit</button>
                {
                    submitScore?` you got ${score} score `:""
                }
            </div>
            
        </>
    )
}
export default ShowQuestion