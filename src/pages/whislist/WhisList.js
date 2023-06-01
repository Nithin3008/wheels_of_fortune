import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FuncContext } from "../DataProviders/FuncCall";
import { MainContext } from "../DataProviders/MainReducer";
import { NavBar } from "../../components/navBar/nav";
import "./wishList.css"
export function Whislist1() {
  const { WhisListData } = useContext(MainContext);
  const { removeWhisListItem, pushCartData } = useContext(FuncContext);
  function cartHanler(id) {
    pushCartData(id);
    removeWhisListItem(id);
  }
  return (
    <div>
      <NavBar></NavBar>
      {/* <h1 style={{visibility:WhisListData.length==0?"hidden":""}}>WishList is Empty</h1> */}
      <div className="cartItems">
        {WhisListData.map((val) => (
          <div key={val.title} className="prodCards">
            <div key={val.title} className="productImages">
              <img src={`${val.src}`}></img>
            </div>
            <div key={val._id}>
              <p>Title: {val.title}</p>
              <p>Manufacturer: {val.manufacturer}</p>
              <p>Power: {val.HP}</p>
              <p>Price: {val.price}$</p>
              <button onClick={() => cartHanler(val._id)} className="wishBtn">
                Add to Cart{" "}
              </button>
              <button
                onClick={() => removeWhisListItem(val._id)}
                className="wishBtn"
              >
                Remove from cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
