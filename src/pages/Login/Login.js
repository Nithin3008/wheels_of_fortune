import { useState } from "react"
import "./login.css"
import { Lg } from "../DataProviders/LoginProv"
export function Login1() {
    const loginDetails={
        email:"",
        password:"",
    }
    const [logData,setLogin]=useState({})
    return (<div>
        <header className="topSection">
            <div className="topSectionBox">
                <div>
                    <p className="heading1">Wheels of <span style={{ color: "orangered" }}>Fortune</span></p>

                </div>
                <nav>
                    <a href="/" className="linksStyling">Login</a>
                    <a href="/" className="linksStyling">Cart</a>
                    <a href="/" className="linksStyling">Whislist</a>
                </nav>
            </div>
        </header>
        <section className="contentBox1">
            <div className="login-box">
                <p className="heading1">Login</p>
                <input onChange={(e)=>loginDetails.email=e.target.value} type="email" placeholder={"User Name"}></input>
                <input onChange={(e)=>loginDetails.password=e.target.value} type="password" placeholder={"Password"}></input>
                <button onClick={()=>setLogin(loginDetails)} className="buttonSty">Login</button>
                <p>Didn't have account <span style={{color:"orangered",fontSize:"20px"}}>Sign up!</span></p>
            </div>
            <Lg details={logData}></Lg>
        </section>
    </div>)
}