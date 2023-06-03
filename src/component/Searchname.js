import React from "react";
import {AiOutlineFileSearch} from "react-icons/ai";
import "./Searchname.css";

const Searchname = ()=>{
    return(
        <>
            <div className="searchnmbg">
               
               <div className="srchnmhd"> <AiOutlineFileSearch className="srchnmic"/> <h1 style={{marginTop:'1rem'}}> Search Record</h1>
                </div>
                <div className="srchl"></div>
                <div> <div className="srchnminp">Enter Name of Student : <input></input></div></div>
                <div className="srchnmdisp">Display Box</div>
               
            </div>
        </>
    )
}
export default Searchname;