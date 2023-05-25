
import "./login.css"

import { Link} from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../DataProviders/AuthProvider"
export function Login1() {
  
    const {setUser,setHandler1}=useContext(AuthContext)
    console.log(localStorage.getItem("token"))
    const details={userName:"",pwd:""}
    function sendData()
    {
        setHandler1("Login")
       setUser(details)
    }
    function sendData2()
    {
        
        details.userName="test@gmail.com"
        details.pwd="test"
        
        setHandler1("Login")
        setUser(details)
    }
    return (<div>
        <header className="topSection">
            <div className="topSectionBox">
                <div>
                    <p className="heading1">Wheels of <span style={{ color: "orangered" }}>Fortune</span></p>

                </div>
                <nav>
                    <Link href="/Cart1" className="linksStyling">Cart</Link>
                    <Link href="/Whislist1" className="linksStyling">Whislist</Link>
                </nav>
            </div>
        </header>
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