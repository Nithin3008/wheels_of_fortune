import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "../../components/navBar/nav";
export function Cart1()
{
  const {CartData,LoginId}=useContext(MainContext)
  const {pushWhislistData,removeCartItem,increItem,decreItem}=useContext(FuncContext)
  const totalPrice=CartData.reduce((acc,val)=>(acc+val.price),0)
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
       <NavBar></NavBar>
        {CartData.length<=0?<h1 style={{textAlign:"center",padding:"10px 10px",margin:"20px 20px"}}>Cart is Empty</h1>:""}
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
                                <p>Quantity:<button className="qtyBtn" disabled={val.qty==0} onClick={()=>decreItem(val
                                  ._id)}>-</button> {val.qty}<button className="qtyBtn"  onClick={()=>increItem(val._id)}>+</button></p>
                                <button onClick={()=>deleteItem(val._id)} className="cartBtn">Remove from Cart</button>
                                <button  onClick={()=>addtoWhislist(val._id)} className="cartBtn">Move to WhisList</button>
                            </div>

                            </div>)}

            </div>
            <div className="orderDetails">
                    <div>
                        <h2>Order Details</h2>
                        <hr></hr>
                       <div > {CartData.map(({title,price,qty})=><p>{title} ({qty})-<span> {qty*price}$</span></p>)}</div>
                        <hr></hr>
                       <div >Total Price:<span> {totalPrice}$</span></div>
                       <button onClick={()=>CartData.length>0?nav("/Checkout1"):""} className="cartBtn">Proceed with checkout</button>
                    </div>
            </div>
           
        </div>
    </div>)
}