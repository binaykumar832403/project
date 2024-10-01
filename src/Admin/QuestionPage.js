import { useState } from "react"
import "../stylesheet/QuestionPage.css"
import axios from "axios"

function QuestionPage(){
    const [selectedValue,setSelectedValue]=useState('')
    const [question,setQuestion]=useState()
    const [option1,setOption1]=useState()
    const [option2,setOption2]=useState()
    const [option3,setOption3]=useState()
    const [option4,setOption4]=useState()
    const [correctAns,setCorrectAns]=useState()
    const [questionErr,setQuestionErr]=useState()
    const [option1Err,setOption1Err]=useState()
    const [option2Err,setOption2Err]=useState()
    const [option3Err,setOption3Err]=useState()
    const [option4Err,setOption4Err]=useState()
    const [correctAnsErr,setCorrectAnsErr]=useState()
    const [msg,setMsg]=useState()
    const handleSelect=(e)=>{
        setSelectedValue(e.target.value)
    }
    const handleChange=(e,keyword)=>{
        e.preventDefault()
        if(keyword==="question"){
            setQuestion(e.target.value)
        }else if(keyword==="option1"){
            setOption1(e.target.value)
        }else if(keyword==="option2"){
            setOption2(e.target.value)
        }else if(keyword==="option3"){
            setOption3(e.target.value)
        }else if(keyword==="option4"){
            setOption4(e.target.value)
        }else{
            setCorrectAns(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!question){
            setQuestionErr(" * please enter question here")
        }else if(!option1){
            setOption1Err(" * please enter option1 here")
        }else if(!option2){
            setOption2Err(" * please enter option2 here")
        }else if(!option3){
            setOption3Err(" * please enter option3 here")
        }else if(!option4){
            setOption4Err(" * please enter option4 here")
        }else if(!correctAns){
            setCorrectAnsErr(" * please enter correct ans here")
        }else{}

        if(question&&option1&&option2&&option3&&option4&&correctAns){
            axios.post("http://localhost:3002/questions",{
                
                question:question,
                option1:option1,
                option2:option2,
                option3:option3,
                option4:option4,
                correctAns:correctAns
            }).then((res)=>{
                setMsg("question created")
                
            }).catch((err)=>console.log(err))
        }
       
    }
    return(
        <>
            {/* <h1>Question Page</h1>
            <label>Select Technology :</label>
            <select onChange={(e)=>handleSelect(e)}>
                <option value="">chose here</option>
                <option value="html">html</option>
                <option value="react">react</option>
                <option value="javascript">java script</option>
            </select> <br></br>
            <label>Enter No. of Ques :</label>
            <input type="text"/>
            <button>submit</button> */}
            <div >
                <div className="que-main-container">
                    <h2>Create Question</h2>
                    <form>
                        <div id="que-text">
                            <label>question : </label>
                            <input id="que-id" type="text" onChange={(e)=>handleChange(e,"question")} placeholder="enter question here"/>
                            <p className="error-msg">{questionErr}</p>
                        </div>
                        <div className="option-list">
                            <div className="option">
                                <label>option 1 : </label>
                                <input type="text" onChange={(e)=>handleChange(e,"option1")} placeholder="enter option 1"/>
                                <p className="error-msg">{option1Err}</p>
                            </div>
                            <div className="option">
                                <label>option 2 : </label>
                                <input type="text" onChange={(e)=>handleChange(e,"option2")} placeholder="enter option 2"/>
                                <p className="error-msg">{option2Err}</p>
                            </div>
                            <div className="option">
                                <label>option 3 : </label>
                                <input type="text" onChange={(e)=>handleChange(e,"option3")} placeholder="enter option 3"/>
                                <p className="error-msg">{option3Err}</p>
                            </div>
                            <div className="option">
                                <label>option 4 : </label>
                                <input type="text" onChange={(e)=>handleChange(e,"option4")} placeholder="enter option 4"/>
                                <p className="error-msg">{option4Err}</p>
                            </div>
                        </div>
                        <div id="correct-ans">
                            <label>correct ans : </label>
                            <input type="text" onChange={(e)=>handleChange(e,"correctAns")} placeholder="enter correct ans"/>
                            <p className="error-msg">{correctAnsErr}</p>
                        </div>
                        <div className="que-btn">
                            <button onClick={(e)=>handleSubmit(e)}>submit</button>
                            <p className="success-msg">{msg}</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default QuestionPage