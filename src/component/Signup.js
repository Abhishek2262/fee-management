import React from 'react'
import{HiOutlineLogin} from "react-icons/hi";
import{BiLogOutCircle} from"react-icons/bi";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup =()=> {
  

  const navigate = useNavigate();
  const goTologin = ()=>{
      navigate(-1)
  }
  return (
    <>
   <div className='signuppg '>
    <div className='signup1'><h1 className='signh1'>Sign-Up</h1></div>

   <div className='alliswell' >
   <div className='signup2'>

      <div className='firstname'>First Name :</div>
      <div className='lastname'>Last Name :  </div>
      <div className='useridsign'>User Id :  </div>
      <div className='passwordsign'>Password :</div>
      <div className='cnfrmpass'>Confirm-Password :</div>
      <div className='dob'> D.O.B : </div>
      <div className='contact'>Contact Number :</div>
   
    </div> 
    <div className='inptbox'> 
      <input className='inpt1' type='text' placeholder='First name'></input>
      <input className='inpt2' type='text' placeholder='Last Name' />
      <input className='inpt3' type='text' placeholder='User id'/>
      <input className='inpt4' type='password' placeholder='Password'/>
      <input className='inpt5' type='password' placeholder='Confirm-password'/>
      <input className='inpt6' type='Date' placeholder='dd/mm/yyyy'/> 
      <input className='inpt7' type='tel' placeholder='Number'/>

    </div>
   </div>
    
    <div className='buttonsign'>
    <div ><button className='signbtn'><HiOutlineLogin/>Sign-in</button> </div>
    <div ><button className='backbtn' onClick={goTologin}><BiLogOutCircle/> Back</button></div>
    

    </div>

   </div>
    </>
  
  )
}

export default Signup ;

