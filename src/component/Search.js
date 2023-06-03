import React from "react";
import {BsSearch} from "react-icons/bs";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Search.css";


const Search=()=>{
    const navigate = useNavigate();
    const goToSearchName=()=>{
        navigate('/Searchname')
    }

    return(
        <>
       
       <div className="searchbg">
            <Navbar/>
            <div className="searchh"><BsSearch className="icon"/><h1 style={{marginTop:"1rem"}}>SEARCH</h1></div>
            <div onClick={goToSearchName} className="srchname" >Search Record by Name ?</div>
            <div className="searchreceipt">Enter Riciept number : <input></input> <button className="searchbtn">Search</button> </div>
            
           <div className="searchcntr">
           
                <div className="search3">
                     <div className="leftdiv">
                        <div className="left1">Receipt no : </div>
                        <div className="left1">Payment mode :</div>
                        <div className="left1">Cheque no:</div>
                        <div className="left1">DD no : </div>
                        <div className="left1">Bank Name : </div>
                        <div className="left1">Recieved from :</div>

                     </div>
                    <div className="rightdiv">
                        <div className="right1">Date : </div>
                        <div className="right1">GSTIN : </div>
                    </div>
                 </div>
                
                 <div className="sline"> </div>
                 <div className="search4">
                    <div>Sr.no </div>
                    <div>Heads</div>
                    <div>Amount (Rs)</div>
                 </div>
                 <div className="sline2"></div>
                 <div className="search5">fhsdhfh </div>
                 <div className="sline2"></div>
                 <div className="amountdis"> 10000</div>
                 <div className="search6"> Total in Words : </div>
                 <div className="remark">Remark :</div>

           </div>

        </div>
       
        
        </>
    )
}
export default Search;