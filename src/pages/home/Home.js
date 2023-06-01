
import { Link,useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import "./home.css";
import { ToastContainer } from "react-toastify";
import { Loader } from "../../components/spinner";
import { NavBar } from "../../components/navBar/nav";
import { Footer } from "../../components/footer/footer";
export function Home1() {

  console.log("home 3 times")

  const nav=useNavigate()
  const {Category}=useContext(MainContext)
  const {shopCate}=useContext(FuncContext)
  const shopProd=(ct)=>{
    shopCate(ct)
    nav("/Product1")}
  return (
    <div>
      <NavBar></NavBar>
       {Category.length<=0?<Loader></Loader>:""}
       {/* <Loader></Loader> */}
      <div className="mainBox">
      
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
        <Footer></Footer>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
