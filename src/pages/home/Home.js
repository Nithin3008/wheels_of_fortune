// import { useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom";
import { CategoryData } from "../DataProviders/CategoryProv";
import { useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import "./home.css";
export function Home1() {
  const { cateData } = useContext(CategoryData);
  console.log(localStorage.getItem("token"))
  const nav=useNavigate()
  const {LoginId}=useContext(MainContext)
  return (
    <div>
      <div className="mainBox">
        <header className="topSection">
          <div className="topSectionBox">
            <div>
              <p className="heading1">
                Wheels of <span style={{ color: "orangered" }}>Fortune</span>
              </p>
            </div>
            <nav>
              <button onClick={()=>nav("/Login1")}  className="navButton">
                Login
              </button>
              <button onClick={()=>LoginId?nav("/Cart1"):""}  className="navButton">
                Cart
              </button>
              <button onClick={()=>LoginId?nav("/Whislist1"):""}  className="navButton">
                Whislist
              </button>
            </nav>
          </div>
        </header>
        <section className="contentContainer">
          <div className="contentBox">
            <div>
              <p className="heading1 contentHeading">
                Welcome to Wheels of{" "}
                <span style={{ color: "orangered" }}>Fortune</span>
              </p>
              <p className="heading1">
                You can your purchase car which suits you
              </p><br></br>
              <Link  to="/Product1/All" style={{textDecoration:"none"}} className="buttonSty">Shop Now</Link>
            </div>
            <div>
              <img
                className="images"
                src="https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/Category/suv.jpg?raw=true"
              ></img>
            </div>
          </div>
        </section>

        <section className="contentContainer2">
          <p className="heading2">SHOP BY CAETEGORY</p>
        </section>
        <section style={{ marginTop: "10px" }}>
          <div className="categoryBox">
            {cateData.map((val) => (
              <div className="categoryChild">
                <div>
                  <img className="categoryImages" src={`${val.src}`}></img>
                </div>
                <div>
                  <p className="categoryHeading catHead">{val.categoryName}</p>
                  <p className="categoryHeading">{val.description}</p><br></br>
                 <p style={{textAlign:"center"}}> <Link to={`/Product1/${val.categoryName}`}className="buttonSty ">Shop Now</Link></p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <footer>
          <div className="footerSec">
            <div className="secBox1">
              <p className="heading1">
                Wheels of <span style={{ color: "orangered" }}>Fortune</span>{" "}
              </p>
              <p>Fill your garage with beasts</p>
            </div>
            <div className="secBox1 secBox2">
              <ul>
                <p className="heading1">Connect</p>
                <li>
                  <a href="/">Github</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
