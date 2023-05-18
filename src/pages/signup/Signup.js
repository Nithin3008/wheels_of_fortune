import "./signup.css"
import {Sg} from "../DataProviders/Api/SignupApi"
import { useState } from "react"
export function Signup1()
{
    const signupDetails=
    {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    }
    const [signupData,setSignup]=useState({})
    function settingData()
    {
        setSignup(signupDetails) 
    }
    return(<div>
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
            <div className="signBox1">
            <p className="heading1">Login</p>
                <input type="text" onChange={(e)=>signupDetails.firstname=e.target.value} placeholder={"First Name"}></input>
                <input type="text" onChange={(e)=>signupDetails.lastname=e.target.value} placeholder={"Last Name"}></input>
                <input type="email" onChange={(e)=>signupDetails.email=e.target.value} placeholder={"E-mail"}></input>
                <input type="password" onChange={(e)=>signupDetails.password=e.target.value} placeholder={"Password"}></input>
                <input type="password" onChange={(e)=>signupDetails.password=e.target.value} placeholder={"Confirm Password"}></input>
               
                <button onClick={()=>settingData()} className="buttonSty">Register</button>
                <p>Already have account <a href="/" style={{color:"orangered",textDecoration:"none"}}>Login!</a></p>
                
            </div>
        </section>
        <Sg details={signupData}></Sg>
    </div>)
}