import { useNavigate } from "react-router-dom"
import './MainPage.css'
function MainPage(){
    let navigate=useNavigate()
    const handleAdmin=()=>{
        navigate('/adminLogin')
    }
    const handleUser=()=>{
        navigate(`/userLogin`)
    }
    return(
        <>
            <div className="outer-container">
                    <div className="text-container">
                        <div className="user-text"><h2>User Click </h2></div>
                        <div className="admin-text"><h2>Admin Click</h2></div>
                    </div>
                    <div className="button-container">
                        <div className="main-button" id="user"><button onClick={()=>handleUser()}>USER</button></div>
                        <div className="main-button"><button onClick={()=>handleAdmin()}>ADMIN</button></div>
                    </div>
                </div>
        </>
    )
}
export default MainPage