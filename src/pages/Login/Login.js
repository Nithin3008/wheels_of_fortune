
import "./login.css"
import { useContext } from "react"
import { LoginContext } from "../DataProviders/LoginProv"
import { Link} from "react-router-dom"

export function Login1() {
    const { userDet, loginHandler } = useContext(LoginContext)
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
                <input onChange={(e)=>userDet.email=e.target.value} type="email" placeholder={"User Name"}></input>
                <input onChange={(e)=>userDet.password=e.target.value} type="password" placeholder={"Password"}></input>
                <button onClick={()=>loginHandler()} className="buttonSty">Login</button>
                <p>Didn't have account <Link to="/Signup1" style={{color:"orangered",fontSize:"20px"}}>Sign up!</Link></p>
            </div>
            
        </section>
    </div>)
}