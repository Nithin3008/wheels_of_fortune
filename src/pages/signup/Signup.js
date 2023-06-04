import "./signup.css";
import { useContext, useState} from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../DataProviders/MainReducer"
import { NavBar } from "../../components/navBar/nav";
import { FuncContext } from "../DataProviders/FuncCall";
export function Signup1() {
  const {Signup}=useContext(FuncContext)
  const {dispatcherMain}=useContext(MainContext)
  const [show,setShow]=useState(false)
  function onSubmit(event)
  {
    event.preventDefault()
    const usdDetails={
      fName:event.target.firstName.value,
      lName:event.target.lastName.value,
      userName:event.target.userName.value,
      pwd:event.target.pwd.value
    }
    
   dispatcherMain({type:"userDetails",payload:usdDetails})
    Signup(usdDetails)
   
  }
  return (
    <div>
      <NavBar></NavBar>
      <section className="contentBox1">
        <div className="signBox1">
          <p className="heading1">Sign up!</p>
          <form className="formData" onSubmit={(e)=>onSubmit(e)}>
          <input  id="firstName" type="text" placeholder={"First Name"}></input>
          <input  id="lastName" type="text" placeholder={"Last Name"}></input>
          <input  id="userName" type="email" placeholder={"email"}></input>
          <div><input   id="pwd" type={show?"text":"password"} placeholder={"Password" }></input><span onClick={()=>setShow(!show)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg></span></div>
          <br></br>
          <button type="submit"  className="buttonSty">Sign up!</button>
          </form>
          <p>
            Already have account{" "}
            <Link to="/Login1"  style={{ color: "orangered", textDecoration: "none" }}>
              Login!
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
