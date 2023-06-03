
import "./login.css"

import { Link} from "react-router-dom"
import { useContext } from "react"
import { FuncContext } from "../DataProviders/FuncCall";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "../../components/navBar/nav";
export function Login1() {
     const{LoginHandler}=useContext(FuncContext)
    const details={userName:"",pwd:""}
  
    function sendData()
    {
       
        if(details.userName.length>0 && details.pwd.length>0)
        {
            LoginHandler(details)
        }
        else
        {
            toast.error("Please Enter proper details",{
                position:"top-center"
            });
            
        }
        
       
    }
    function sendData2()
    {
        
        details.userName="test@gmail.com"
        details.pwd="test"
        LoginHandler(details)
        
        
    }
    return (<div>
      <NavBar></NavBar>
        <section className="contentBox1">
            <div className="login-box">
                <p className="heading1">Login</p>
                <input id="usn" onChange={(e)=>details.userName=e.target.value}   type="email" placeholder={"User Name"}></input>
                <input id="pwd" onChange={(e)=>details.pwd=e.target.value}   type="password" placeholder={"Password"}></input>
                <button onClick={()=>sendData2()}  className="buttonSty">Login with Test Credentials</button>
                <button onClick={()=>sendData()}  className="buttonSty">Login</button>
                <p>Didn't have account <Link to="/Signup1" style={{color:"orangered",fontSize:"20px",textDecoration:"none"}}>Sign up!</Link></p>
            </div>
            
        </section>
    </div>)
}