import React from "react";
import Navbar from "./Navbar";
import "./Addfee.css";




const Addfee=()=>{
    return(
        <>
        <Navbar/><div className="addf"> 
        <div className="addf1">
        <div className="addmiss"><div className="add1">ADD MISSION NUMBER</div><input type="long number"></input></div>
        <div className="addmiss"><div className="add1">MODE OF PAYMENT</div><select className="selec"><optgroup label="Select"></optgroup><option>Card</option><option>Cash</option><option>Net Banking</option><option>UPI</option></select></div>
        <div className="addmiss"><div className="add1">STUDENT NAME</div><input type="text"></input></div>
        <div className="addmiss1"><div className="add1">Recived From :</div> <input type="number"></input> - <input type="number"></input></div>
        <div className="addmiss1"><div className="add1">Course : <input type="text"></input></div></div>
        <div className="addmiss1"><div className="add1">Roll number : <input type="text-number"></input></div></div>
        <div className="addmiss1"><div className="add1">Date :<input type="date" style={{width:'7rem', height:'1.5rem', paddingLeft:'8px'}}></input></div></div>
        <div className="line"></div>
        <div className="addmiss2"><div className="add1">Sr.No</div><div className="headt1">Head</div><div>Amount</div></div>
        <div className="line2"></div>
        <div className="addmiss" style={{ marginLeft:'29rem' ,marginTop:"3rem", width:"80rem"}}  ><div className="add1" style={{  gap:'23rem', display:'flex'}}><input  type="text " ></input><input type=" large number"></input></div> </div>
        <div className="addmis" style={{marginLeft:"32rem", gap: "10px" ,display:"flex",marginTop:"1rem",fontWeight:"bold"}}><div className="add1" style={{display:"flex", gap:"27.4rem"}} >Gst 9%<input type="text-number"></input></div></div>
        <div className="addmis" style={{marginLeft:"32rem", gap: "10px" ,display:"flex",marginTop:"1rem",fontWeight:"bold"}}><div className="add1" style={{display:"flex", gap:"26.8rem"}} >SGst 9%<input type="text-number"></input></div></div>
        <div className="line2"></div>
        <div style={{marginLeft:"64.7rem"}}><input></input></div>
        <div>
        <div style={{marginLeft:"14rem", marginTop:"1rem"}}><div className="add1" style={{display:"flex", gap:"2rem", fontWeight:"bold"}}>Total in Words : <input type="text" style={{width:"20rem", height:"1.5rem"}}></input></div></div>
        <div style={{marginTop:"1rem", marginLeft:"16rem", fontWeight:"bold"}}><div style={{display:"flex", gap:"5.4rem"}}> Remark: <input type="text" style={{width:"20rem", height:"4rem", padding:"0px"}}></input></div></div>
        <button className="btnprnt">Print</button>

        </div>
       
        

        </div>

        </div>
    

        </>
    )

}
export default Addfee;