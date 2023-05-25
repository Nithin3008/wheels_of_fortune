import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { MainContext } from "../DataProviders/MainReducer";
export function Cart1()
{
  useEffect(()=>
  {
    dispatcherMain({type:"getCart"})
  },[CartData])
    const {CartData,LoginId,dispatcherMain}=useContext(MainContext)
    const nav=useNavigate()
    function removeCart(id)
    {
        dispatcherMain({type:"RemoveFromCart",payload:id})
    }
    function addtoWhislist(id)
    {
        dispatcherMain({type:"AddToWhislist",payload:id})
    }
    console.log(CartData)
    return(<div>
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
        <div className="CartBox">
            <div className="cartItems">
                {CartData.map((val)=>
                        <div key={val.id} className="productCards">

                            <div key={val.id} className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div>
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p>Price: {val.price}$</p>
                                <button onClick={()=>removeCart(val._id)} className="buttonSty cart">Remove from Cart</button>
                                <button onClick={()=>addtoWhislist(val._id)} className="buttonSty cart">Move to WhisList</button>
                            </div>

                            </div>)}

            </div>
            <div className="orderDetails">
                    <div>
                        <h2>Order Details</h2>
                        <hr></hr>
                       <div> {CartData.map(({title,price})=><p>{title}-  {price}$</p>)}</div>
                        <hr></hr>
                       <div>Total Price: {CartData.reduce((acc,{price})=>(price+acc),0)}$</div>
                       <button className="buttonSty">Proceed with checkout</button>
                    </div>
            </div>
           
        </div>
    </div>)
}