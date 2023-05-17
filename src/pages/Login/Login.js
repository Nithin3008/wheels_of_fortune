import "./login.css"
export function Login1() {
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
                <input placeholder={"User Name"}></input>
                <input placeholder={"Password"}></input>
                <button className="buttonSty">Login</button>
                <p>Didn't have account <span style={{color:"orangered",fontSize:"20px"}}>Sign up!</span></p>
            </div>
        </section>
    </div>)
}