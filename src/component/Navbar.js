import React from "react";
import"./Navbar.css";
import{FaHome} from "react-icons/fa";
import{BsSearch} from"react-icons/bs";
import{RiFileEditFill} from"react-icons/ri";
import{RiFileList2Line} from "react-icons/ri";
import{BiListCheck} from"react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import{CgLogOut} from"react-icons/cg";
import { useNavigate } from "react-router-dom";





export default function Navbar(props){
    const navigate= useNavigate();
    const goToHome=()=>{
        navigate("/Dashbord");
    }
    const goToSearch=()=>{
        navigate("/Search")
    } 
    const goToEdit =()=>{
        navigate("/Edit")
    }
    const goToLogin=()=>{
        navigate("/")
    }
    return(
        <>
        <div className="navbar">
            <div className="nav1"  onClick={goToHome}><FaHome className="ico1"/><div className="n1"> Home</div></div>
            <div className="nav1" onClick={goToSearch}><BsSearch className="ico2"/> <div className="n2">search</div></div>
            <div className="nav1" onClick={goToEdit}><RiFileEditFill className="ico3"/><div className="n3">Edit Courses</div></div>
            <div className="nav1"><RiFileList2Line className="ico4"/><div className="n4">Course List</div></div>
            <div className="nav1"><BiListCheck className="ico5"/><div className="n5">View All Record</div></div>
            <div className="nav1" onClick={goToHome}><IoArrowBackOutline className="ico6"/><div className="n6">Back</div></div>
            <div className="nav1" onClick={goToLogin}><CgLogOut className="ico7"/><div className="n7">Log out</div></div>
        </div>
        </>
    )

}