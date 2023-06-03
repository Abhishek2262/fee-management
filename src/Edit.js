import React from "react";
import{IoArrowBackCircleOutline} from"react-icons/io5";
import {MdAddCircleOutline} from"react-icons/md";
import {RxUpdate} from "react-icons/rx";
import{RiDeleteBin6Line} from"react-icons/ri";
import "./Edit.css";
import { useNavigate } from "react-router-dom";


const Edit=()=>{
    const navigate =useNavigate();
    const goToDashbord=()=>{
        navigate("/Dashbord");
    }
    return(
        <>
        <div> 
            <div className="edith"><IoArrowBackCircleOutline className="editicon" onClick={goToDashbord}/> <div><h1 className="edith1">Update Course </h1></div></div>
            <div className="edit1">
                <div className="editbody">
                <div className="editboxleft">
                    <div className="editboxid">Course ID: <input></input></div>
                    <div className="editboxname">Course Name : <input></input></div>
                    <div className="btns"><button className="btnadd"> <MdAddCircleOutline className="icon1"/>ADD</button><button className="btnupdate"> <RxUpdate className="icon2" />Update</button><button className="btndelete"><RiDeleteBin6Line className="icon3"/>Delete</button></div>
                </div>
                <div className="editboxright">Display</div>
                </div>
                <div className="editfootr">csd</div>
            </div>
           
        </div>
        </>
    )
}
export default Edit;