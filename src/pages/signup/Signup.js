import "./signup.css"
export function Signup1()
{
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
                <input placeholder={"First Name"}></input>
                <input placeholder={"Last Name"}></input>
                <input placeholder={"User Name"}></input>
                <input placeholder={"Password"}></input>
                <input placeholder={"Confirm Password"}></input>
                <button className="buttonSty">Register</button>
                <p>Already have account <a href="/" style={{color:"orangered",textDecoration:"none"}}>Login!</a></p>
            </div>
        </section>
    </div>)
}