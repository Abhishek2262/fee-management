import React from "react";
import {IoIosAddCircleOutline} from "react-icons/io";
import{AiOutlineFileSearch} from"react-icons/ai";
import{TfiFiles} from "react-icons/tfi";
import{RiFileEditLine} from"react-icons/ri";
import{SlBookOpen} from"react-icons/sl";
import{BsGraphUpArrow} from"react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./Dashbord.css"


const Dashbord =()=>{
    const navigate = useNavigate();
    
    const goToAddfee = ()=>{
        navigate('/Addfee')
        
    }
    const goToSearch = ()=>{
        navigate('/Search')
    }
    const goTOEdit=()=>{
        navigate("/Edit")
    }


    return(
        <>
        <div className="headiv">
         
         <h1 className="schoolname" > Kids Gardern</h1>
         <h2>Mada Colony, Hirapur, Dhanbad</h2><h3>+91-620314582</h3>
        </div>
        <div className="dashbody">
            <div className="box1" onClick={goToAddfee}  > <IoIosAddCircleOutline className="iconadd"/><div className="addfee"> Add Fees</div></div>
            <div className="box1" onClick={goToSearch}><AiOutlineFileSearch className="searchrecord"/> <div className="search">Search Record</div></div>
            <div className="box1"><TfiFiles className="fileview"/><div className="file1">File-View</div></div> 
            <div className="box1" onClick={goTOEdit}><RiFileEditLine className="edit"/><div className="editd1">Edit Course</div></div>
            <div className="box1"><SlBookOpen className="view"/><div className="view1">View</div></div>
            <div className="box1"><BsGraphUpArrow className="graph"/><div className="graph1"> View Report</div></div>
        </div>
        </>
    )
}
export default Dashbord;