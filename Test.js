import axios from "axios"

function Test(){
    const id ="e58a"
    const handleSee=()=>{
        
        axios.patch(`http://localhost:3002/AdminCredential/${id}`,{
        username: "binay",
        email: "binay@gmail.com",
        password: "binay@123",
        phone: "8877665544"
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    return(
        <>
            <button onClick={()=>handleSee()}>see</button>
        </>
    )
}
export default Test