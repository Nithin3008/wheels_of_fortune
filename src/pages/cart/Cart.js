import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../components/navBar/nav";
export function Cart1() {
  const { CartData } = useContext(MainContext);
  const {
    pushWhislistData,
    removeCartItem,
    increItem,
    decreItem,
    itemInWishList,
  } = useContext(FuncContext);
  const totalPrice = CartData.reduce(
    (acc, { qty, price }) => acc + qty * price,
    0
  );
  const nav = useNavigate();

  function addtoWhislist(id) {
    pushWhislistData(id);

    console.log("now adding int whislist");
    removeCartItem(id);
  }
  function deleteItem(id) {
    removeCartItem(id);
  }
  return (
    <div>
      <NavBar></NavBar>
      {CartData.length <= 0 ? (
        <h1
          style={{
            textAlign: "center",
            padding: "10px 10px",
            margin: "20px 20px",
          }}
        >
          Cart is Empty
        </h1>
      ) : (
        ""
      )}
      <div className="CartBox">
        <div className="carItems">
          {CartData.map((val) => (
            <div key={val.title} className="productCards">
              <div className="productImages">
                <img src={`${val.src}`} alt="carImages"></img>
              </div>
              <div key={val._id}>
                <p>Title: {val.title}</p>
                <p>Manufacturer: {val.manufacturer}</p>
                <p>Power: {val.HP}</p>
                <p>Price: {val.price}$</p>
                <p>
                  Quantity:
                  <button
                    className="qtyBtn"
                    disabled={val.qty === 1}
                    onClick={() => decreItem(val._id)}
                  >
                    -
                  </button>{" "}
                  {val.qty}
                  <button className="qtyBtn" onClick={() => increItem(val._id)}>
                    +
                  </button>
                </p>
                <button onClick={() => deleteItem(val._id)} className="cartBtn">
                  Remove from Cart
                </button>
                <button
                  disabled={itemInWishList(val._id) === val._id}
                  onClick={() => addtoWhislist(val._id)}
                  className="cartBtn"
                >
                  Move to WhisList
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="orderDetails">
          <div style={{ visibility: CartData.length <= 0 ? "hidden" : "" }}>
            <h2>Order Details</h2>
            <hr></hr>
            <div>
              {" "}
              {CartData.map(({ title, price, qty }) => (
                <div className="orderDetails__order">
                  <p>
                    {title} ({qty})-
                  </p>
                  <p> {qty * price}$</p>
                </div>
              ))}
            </div>
            <hr></hr>
            <div>
              Total Price:<span> {totalPrice}$</span>
            </div>
            <button
              onClick={() => (CartData.length > 0 ? nav("/Checkout1") : "")}
              className="cartBtn"
            >
              Proceed with checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
