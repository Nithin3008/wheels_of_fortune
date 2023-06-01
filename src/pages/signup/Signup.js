import "./signup.css";
import { useContext} from "react"
import { Link } from "react-router-dom";
import { MainContext } from "../DataProviders/MainReducer"
import { NavBar } from "../../components/navBar/nav";
import { FuncContext } from "../DataProviders/FuncCall";
export function Signup1() {
  const {Signup}=useContext(FuncContext)
  const {dispatcherMain}=useContext(MainContext)
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
          <input  id="userName" type="email" placeholder={"User Name"}></input>
          <input   id="pwd" type="password" placeholder={"Password"}></input>
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
