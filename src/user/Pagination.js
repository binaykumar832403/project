import { useState } from "react"
import ShowQuestion from "./ShowQuestion"
import '../stylesheet/Pagination.css'

function Pagination(props){
    const {data,dataPerPage,pagesShown} = props
    const [pages]=useState(Math.round(data.length/dataPerPage))
    const [currentPage,setCurrentPage] = useState(1)

    const getPaginatedData=()=>{
        const startIndex = (currentPage*dataPerPage)-dataPerPage
        const endIndex = startIndex + dataPerPage
        return data.slice(startIndex,endIndex)
    }
    const goToPrevPage= (e)=>{
        setCurrentPage(currentPage-1)
    }
    const goToNextPage= (e)=>{
        setCurrentPage(currentPage+1)
    }
    const getPageNumbers=()=>{
        let start = Math.floor((currentPage-1)/pagesShown)*pagesShown
        return new Array(pagesShown).fill().map((_,idx)=>start+idx+1)
    }
    const changePage=(item)=>{
        setCurrentPage(item)
    }
    return(
        <>
            {
                getPaginatedData().map((item)=>(
                    <ShowQuestion data={item}></ShowQuestion>
                ))
            }
            <br></br>
            
            <div className="pagination-button-container">
                <button className="prev-next-btn" onClick={(e)=>goToPrevPage(e)}>prev</button>
                {
                    getPageNumbers().map((item)=>{
                        if(item<=pages){
                            return <button onClick={(e)=>changePage(item)} className={`${currentPage===item?'unhidden':'hidden'}`}>{item}</button>
                            
                        }
                        if(item===pages+1){
                            return <div>
                                <h1>questions ended</h1>
                                
                            </div>
                        }
                        
                    })
                }
                <button className="prev-next-btn" onClick={(e)=>goToNextPage(e)}>next</button>
            </div>
        </>
    )
}
export default Pagination;