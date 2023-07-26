import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FuncContext } from "../DataProviders/FuncCall";
import { MainContext } from "../DataProviders/MainReducer";
import { Loader } from "../../components/spinner";
import "./product.css";
import { NavBar } from "../../components/navBar/nav";
import { FiltersPage } from "../../components/filters/FiltersPage";
export function Product1() {
  const nav = useNavigate();
  const [displayFil, setDisplay] = useState(false);
  const { LoginId, ratingFilter } = useContext(MainContext);
  const {
    pushCartData,
    itemInCart,
    itemInWishList,
    pushWhislistData,
    removeWhisListItem,
    carsData,
  } = useContext(FuncContext);
  let prodData = carsData;
  if (ratingFilter > 0) {
    prodData = prodData.filter((val) => val.rating >= ratingFilter);
    console.log(prodData);
  }
  if (Range < 4000000) {
    prodData = prodData.filter((val) => val.price < Range);
  }
  function AddToCart(event, id) {
    event.target.innerText = "Go to Cart";
    LoginId ? pushCartData(id) : nav("/Login1");
  }
  return (
    <div>
      {carsData.length <= 0 ? <Loader></Loader> : ""}
      <NavBar></NavBar>
      <section>
        <div className="productBox">
          <div className="filterBox">
            <FiltersPage></FiltersPage>
          </div>
          <div
            style={{
              display: displayFil ? "block" : "none",
              width: "200px",
              zIndex: 1,
              position: "sticky",
            }}
          >
            <FiltersPage></FiltersPage>
          </div>
          <span
            class="material-symbols-outlined smalFilterPage"
            style={{ textAlign: "right", cursor: "pointer" }}
            onClick={() => setDisplay(!displayFil)}
          >
            menu
          </span>
          <div className="producBoxCards">
            {prodData.map((val) => (
              <div key={val._id} className="prdCards">
                <div className="productImages">
                  <img
                    onClick={() => nav(`/ProductDetails1/${val._id}`)}
                    src={`${val.src}`}
                    alt="carImages"
                  ></img>
                </div>
                <div>
                  <p>Title: {val.title}</p>
                  <p>Manufacturer: {val.manufacturer}</p>
                  <p>Power: {val.HP}</p>
                  <p>Price: {val.price}$</p>
                  <p>
                    <button
                      disabled={itemInCart(val._id) === val._id}
                      onClick={(e) => AddToCart(e, val._id)}
                    >
                      {" "}
                      {itemInCart(val._id) === val._id
                        ? "Go to Cart"
                        : "Add to cart"}
                    </button>
                    <button
                      onClick={() =>
                        LoginId
                          ? itemInWishList(val._id) === val._id
                            ? removeWhisListItem(val._id)
                            : pushWhislistData(val._id)
                          : nav("/Login1")
                      }
                    >
                      {itemInWishList(val._id) === val._id
                        ? "Remove From Wishlist"
                        : "Add to WishList"}
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
