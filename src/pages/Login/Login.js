
import "./login.css"

import { Link} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../DataProviders/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "../../components/navBar/nav";
export function Login1() {
    console.log("login 2 times")
    const {setUser,setHandler1}=useContext(AuthContext)
    const details={userName:"",pwd:""}
  
    function sendData()
    {
       
        if(details.userName.length>0 && details.pwd.length>0)
        {
            console.log("hi")
            setHandler1("Login")
            setUser(details)
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
        
        setHandler1("Login")
        setUser(details)
    }
    return (<div>
      <NavBar></NavBar>
        <section className="contentBox1">
            <div className="login-box">
                <p className="heading1">Login</p>
                <input id="usn" onChange={(e)=>details.userName=e.target.value}   type="email" placeholder={"User Name"}></input>
                <input id="pwd" onChange={(e)=>details.pwd=e.target.value}   type="password" placeholder={"Password"}></input>
                <button onClick={()=>sendData2()}  className="buttonSty">Login with Test Creditanls</button>
                <button onClick={()=>sendData()}  className="buttonSty">Login</button>
                <p>Didn't have account <Link to="/Signup1" style={{color:"orangered",fontSize:"20px"}}>Sign up!</Link></p>
            </div>
            
        </section>
  
    </div>)
}