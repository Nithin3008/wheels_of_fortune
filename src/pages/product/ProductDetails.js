import { useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { useParams } from "react-router-dom";
import { FuncContext } from "../DataProviders/FuncCall";
import "./prdDetails.css"
import { NavBar } from "../../components/navBar/nav";
export function ProductDetails1()
{
    const {ProdDetails}=useContext(MainContext)
    const {pushCartData,pushWhislistData,itemInCart,itemInWishList}=useContext(FuncContext)
    const {prodId}=useParams()
    const item=ProdDetails.find((val)=>val._id===prodId)
    console.log(item._id)
    console.log(prodId)
    return(<div>
       <NavBar></NavBar>
        <section className="prodDetails">
            <div className="prodImage">
                <img src={item.src} alt="carImage"></img>
            </div>
            <div className="prodDet">
                <h2>{item.title}</h2>
                <p>Manufacturer: {item.manufacturer}</p>
                <p>HP:{item.HP}</p>
                <p>Torque: {item.Torque}</p>
                <p>Rating: {item. rating}</p>
                <button disabled={itemInCart(item._id)===item._id} onClick={()=>pushCartData(item._id)}>{itemInCart(item._id)===item._id?"Go to Cart":"Add to cart"}</button>
                <button disabled={itemInWishList(item._id)===item._id} onClick={()=>pushWhislistData(item._id)}>Move to Wishlist</button>
            </div>
        </section>
    </div>)
}