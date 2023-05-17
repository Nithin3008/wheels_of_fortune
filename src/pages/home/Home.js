import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./home.css"
export function Home1() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        const url = async () => {
            const data = await fetch("/api/categories")
            const recData = await data.json()
            setCategory(recData.categories)
            console.log(recData.categories)
        }; url();
    }, [])
    return (<div>
        <div className="mainBox">
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
            <section className="contentContainer">
                <div className="contentBox">
                    <div>
                        <p className="heading1 contentHeading">Welcome to Wheels of <span style={{ color: "orangered" }}>Fortune</span></p>
                        <p className="heading1">You can your purchase car which suits you</p>
                    </div>
                    <div>
                        <img className="images" src="https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/suv.jpg?raw=true"></img>
                    </div>
                </div>
            </section>
        </div >
    </div >)
}