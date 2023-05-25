import "./signup.css";
import { useContext} from "react"
import { AuthContext } from "../DataProviders/AuthProvider"
import { MainContext } from "../DataProviders/MainReducer"
export function Signup1() {
  const {setHandler1,setUser}=useContext(AuthContext)
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
    setHandler1("SignUp")
    setUser(usdDetails)
   
  }
  return (
    <div>
      <header className="topSection">
        <div className="topSectionBox">
          <div>
            <p className="heading1">
              Wheels of <span style={{ color: "orangered" }}>Fortune</span>
            </p>
          </div>
          <nav>
            <button>Login</button>
            <button className="navButton">Cart</button>
            <button className="navButton">Whislist</button>
          </nav>
        </div>
      </header>
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
            <a  style={{ color: "orangered", textDecoration: "none" }}>
              Login!
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
