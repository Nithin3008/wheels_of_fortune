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
                        <button className="buttonSty">Shop Now</button>
                    </div>
                    <div>
                        <img className="images" src="https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/suv.jpg?raw=true"></img>
                    </div>
                </div>
            </section>

            <section className="contentContainer2">
                <p className="heading2">SHOP BY CAETEGORY</p>
            </section>
            <section>
                <div className="categoryBox">
                    {category.map((val) =>
                        <div className="categoryChild">
                            <div><img className="categoryImages" src={`${val.src}`}></img></div>
                            <div>
                                <p className="categoryHeading catHead">{val.categoryName}</p>
                                <p className="categoryHeading">{val.description}</p>
                                <button className="buttonSty cateBut">Shop Now</button>
                            </div>

                        </div>
                    )}
                </div>


            </section>
            <footer>
                <div className="footerSec">
                    <div className="secBox1">
                        <p className="heading1">Wheels of <span style={{ color: "orangered" }}>Fortune</span> </p>
                        <p>Fill your garage with beasts</p>
                    </div>
                    <div className="secBox1 secBox2">
                        <ul>
                            <p className="heading1">Connect</p>
                            <li><a>Github</a></li>
                            <li><a>LinkedIn</a></li>
                            <li><a>Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div >
    </div >)
}