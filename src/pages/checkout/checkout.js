import { useContext, useState } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { v4 as uuid } from "uuid";
import { FuncContext } from "../DataProviders/FuncCall";
import {  toast } from "react-toastify";
import { NavBar } from "../../components/navBar/nav";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./checkout.css";
export function Checkout1() {
  const { AddressUser, CartData } = useContext(MainContext);
  const { AddAddress, removeAddress } = useContext(FuncContext);
  const totalPrice = CartData.reduce(
    (acc, { qty, price }) => acc + qty * price,
    0
  );
  const [formShow, setForm] = useState(false);
  const [idAddr, setId] = useState("");
  const nav = useNavigate();
  function showForm() {
    setForm(true);
  }
  function submitForm(event) {
    event.preventDefault();

    const addr = {
      id: uuid(),
      street: event.target.street.value,
      phno: event.target.phnNo.value,
      city: event.target.city.value,
      code: event.target.code.value,
      country: event.target.country.value,
    };
    AddAddress(addr);
    setForm(false);
  }
  function hideForm() {
    setForm(false);
  }
  function removeAddr() {
    idAddr.length>0?removeAddress(idAddr): toast.error(`please select address`,{
      position:"top-center"})
  }
  function setAddId(event, id) {
    event.target.checked = true;
    console.log(event.target.checked);
    setId(id);
  }
  function placeOrder() {
    if (idAddr.length > 0 && AddressUser.length) {
      toast.success("Successfull place order", {
        position: "bottom-right",
      });
      nav("/");
    } else {
      toast.error("Please fill address", {
        position: "bottom-right",
      });
    }
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className="MainBox">
        <div className="AddressBar">
          {AddressUser.map((val) => (
            <ul key={val.id} className="AddressItems">
              <input
                checked={val.id === idAddr}
                id="radioSelector"
                onChange={(e) => setAddId(e, val.id)}
                type="radio"
              ></input>
              <li key={val.id}>
                <p>{val.street}</p>
                <p>{val.city}</p>
                <p>{val.code}</p>
                <p>{val.country}</p>
              </li>
              <button
                onClick={() => removeAddr()}
                style={{
                  color: "white",
                  backgroundColor: "#185464",
                  padding: "10px 10px",
                  borderRadius: "5px",
                }}
              >
                Remove Address
              </button>
            </ul>
          ))}

          <form
            onSubmit={(e) => submitForm(e)}
            className="Form"
            style={{ display: formShow ? "block" : "none" }}
          >
            <div>
              <h2
                style={{
                  color: "orangered",
                  backgroundColor: "#185464",
                  padding: "10px 10px",
                  borderRadius: "5px",
                }}
              >
                Enter new Address
              </h2>
              <span>
                Phone:<input id="phnNo" type="number" required></input>
              </span>
              <span>
                {" "}
                street:<input id="street" type="text" required></input>
              </span>
              <span>
                Pincode:<input id="code" type="number" required></input>
              </span>
              <span>
                city:<input id="city" type="text" required></input>
              </span>
              <span>
                {" "}
                country:<input id="country" type="text" required></input>
              </span>
              <button type="submit">Submit</button>
            </div>
          </form>

          <div className="addBtn">
            <button
              style={{ display: formShow ? "block" : "none" }}
              onClick={() => hideForm()}
            >
              Cancel
            </button>
            <button onClick={() => showForm()}>Add New Address </button>
          </div>
        </div>
        <div
          style={{ visibility: CartData.length <= 0 ? "hidden" : "" }}
          className="checkoutBox"
        >
          <h2>Final Order Details</h2>
          <hr></hr>
          {CartData.map((val) => (
            <p>
              <span>
                {val.title} ({val.qty})$
              </span>{" "}
              <span>{val.price}</span>
            </p>
          ))}
          <hr></hr>
          <div className="totalPrice">
            <span>Total Price : </span>
            <span>{totalPrice}$</span>
          </div>
          <div className="addBtn">
            <button
              onClick={() =>
                totalPrice > 0
                  ? placeOrder()
                  : toast.error("Please add items to checkout", {
                      position: "bottom-right",
                    })
              }
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
