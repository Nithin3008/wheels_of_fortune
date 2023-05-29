import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Cart1()
{
  const {CartData,LoginId}=useContext(MainContext)
  const {pushWhislistData,removeCartItem,increItem,decreItem}=useContext(FuncContext)
    
    const nav=useNavigate()
   
    function addtoWhislist(id)
    {
      pushWhislistData(id)
      
      console.log("now adding int whislist")
      removeCartItem(id)
      
    }
    function deleteItem(id)
    {
      removeCartItem(id)
    }
   
    console.log("hello cart")
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
                        <div key={val.title} className="productCards">

                            <div  className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div key={val._id}>
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p>Price: {val.price}$</p>
                                <p>Quantity:<button disabled={val.qty==0} onClick={()=>decreItem(val
                                  ._id)}>-</button> {val.qty}<button onClick={()=>increItem(val._id)}>+</button></p>
                                <button onClick={()=>deleteItem(val._id)} className="buttonSty cart">Remove from Cart</button>
                                <button  onClick={()=>addtoWhislist(val._id)} className="buttonSty cart">Move to WhisList</button>
                            </div>

                            </div>)}

            </div>
            <div className="orderDetails">
                    <div>
                        <h2>Order Details</h2>
                        <hr></hr>
                       <div > {CartData.map(({title,price,qty})=><p>{title}- {qty*price}$</p>)}</div>
                        <hr></hr>
                       <div >Total Price: {CartData.reduce((acc,{price,qty})=>((qty*price)+acc),0)}$</div>
                       <button onClick={()=>nav("/Checkout1")} className="buttonSty">Proceed with checkout</button>
                    </div>
            </div>
           
        </div>
    </div>)
}