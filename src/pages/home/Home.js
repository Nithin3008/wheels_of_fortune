
import { Link,useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import "./home.css";
import { ToastContainer } from "react-toastify";
import { Loader } from "../../components/spinner";
export function Home1() {

  console.log("home 3 times")

  const nav=useNavigate()
  const {LoginId,Category,dispatcherMain}=useContext(MainContext)
  const {shopCate}=useContext(FuncContext)
  const shopProd=(ct)=>{
    shopCate(ct)
    nav("/Product1")}
  const searchBox=(event)=>{
    const item=(event.target.value).toLowerCase()
    dispatcherMain({type:"searchQuery",payload:item})
  }
  return (
    <div>
       {Category.length<=0?<Loader></Loader>:""}
       {/* <Loader></Loader> */}
      <div className="mainBox">
        <header className="topSection">
          <div className="topSectionBox">
            <div>
              <p className="heading1">
                Wheels of <span style={{ color: "orangered" }}>Fortune</span>
              </p>
            </div>
            <input onChange={(e)=>searchBox(e)} type="search" placeholder="Search for your car"></input>
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
              <button onClick={()=>LoginId?nav("/Profile1"):nav("/Login1")}  className="navButton">
                Profile
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
                You can purchase car which suits you
              </p><br></br>
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
            {Category.map((val) => (
              <div key={val._id} className="categoryChild">
                <div>
                  <img className="categoryImages" src={`${val.src}`}></img>
                </div>
                <div>
                  <p className="categoryHeading catHead">{val.categoryName}</p>
                  <p className="categoryHeading">{val.description}</p><br></br>
                 <p style={{textAlign:"center"}}> <button onClick={()=>shopProd(val.categoryName)} className="buttonSty ">Shop Now</button></p>
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
      <ToastContainer></ToastContainer>
    </div>
  );
}
