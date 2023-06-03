import { FaUserCheck} from "@react-icons/all-files/fa/FaUserCheck";
import { FiLogIn } from "react-icons/fi";
import {BsPeopleFill} from"react-icons/bs";
import{BiLogOutCircle} from"react-icons/bi";
import Signup from "./Signup";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const goToSignup = ()=>{
        navigate('/Signup')
    }
  return (
    <div className="login">
      <div className="logdiv">
        {" "}
        <FaUserCheck /> LOGIN{" "}
      </div>
      <div className="username">
        User Name :{" "}
        <input className="userid" type="text" placeholder="User ID" />
      </div>
      <div className="password">
        Password :{" "}
        <input className="password1" type="password" placeholder="Password" />
      </div>
      <div className="buttons">
        <button className="loginbutton"> <FiLogIn/> Login</button>
        <button 
        onClick={goToSignup}
        className="signupbutton"><BsPeopleFill/> SIGN UP </button>
        <button className="exit"> <BiLogOutCircle/>exit</button>
      </div>
      <div className="fsig">
        {" "}
        <div className="forgotpassword"> Forgot password </div>{" "}
        <div className="signup">sign up</div>
      </div>
    </div>
  );
}
export default Login;
