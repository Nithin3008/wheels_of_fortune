import "./signup.css"
import {Sg} from "../DataProviders/Api/SignupApi"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../DataProviders/LoginProv";
export function Signup1()
{
    const {authToken,userDet}=useContext(LoginContext)
    const nav=useNavigate()
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
                    <button onClick={()=>nav("/Login1")} className="navButton">Login</button>
                    <button onClick={()=>authToken!="empty"?nav("/Cart1"):""} className="navButton">Cart</button>
                    <button onClick={()=>authToken!="empty"?nav("/Whislist1"):""} className="navButton">Whislist</button>
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
                
               
                <button onClick={()=>settingData()} className="buttonSty">Register</button>
                <p>Already have account <a href="/" style={{color:"orangered",textDecoration:"none"}}>Login!</a></p>
                
            </div>
        </section>
        <Sg details={signupData}></Sg>
    </div>)
}