import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import "./home.css";
import { ToastContainer } from "react-toastify";
import { Loader } from "../../components/spinner";
import { NavBar } from "../../components/navBar/nav";
import { Footer } from "../../components/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});
export function Home1() {
  console.log("home 3 times");

  const nav = useNavigate();
  const { Category } = useContext(MainContext);
  const { shopCate } = useContext(FuncContext);
  const shopProd = (ct) => {
    shopCate(ct);
    nav("/Product1");
  };
  return (
    <div>
      <NavBar></NavBar>
      {Category.length <= 0 ? <Loader></Loader> : ""}
      <section>
        <section className="contentContainer">
          <div className="contentBox">
            <div data-aos="fade-right">
              <p className="heading1 contentHeading">
                Welcome to Wheels of{" "}
                <span style={{ color: "orangered" }}>Fortune</span>
              </p>
              <p className="heading1">You can purchase car which suits you</p>
              <br></br>
            </div>
            <div>
              <img
                data-aos="fade-left"
                className="images"
                src="https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/Category/truck.webp"
                alt="carImages"
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
              <div
                key={val._id}
                className="categoryChild"
                data-aos={"fade-right"}
              >
                <div>
                  <img
                    className="categoryImages"
                    src={`${val.src}`}
                    alt="carImages"
                  ></img>
                </div>
                <div>
                  <p className="categoryHeading catHead">{val.categoryName}</p>
                  <p className="categoryHeading">{val.description}</p>
                  <br></br>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <button
                      onClick={() => shopProd(val.categoryName)}
                      className="buttonSty "
                    >
                      Shop Now
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}
