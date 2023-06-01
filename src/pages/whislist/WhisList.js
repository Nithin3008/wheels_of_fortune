import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FuncContext } from "../DataProviders/FuncCall";
import { MainContext } from "../DataProviders/MainReducer";
import { NavBar } from "../../components/navBar/nav";
export function Whislist1()
{
    const {LoginId,WhisListData}=useContext(MainContext)
    const {removeWhisListItem,pushCartData}=useContext(FuncContext)
    const nav=useNavigate()
    function cartHanler(id)
    {
      pushCartData(id)
      removeWhisListItem(id)
      
    }
    console.log(WhisListData)
    return(<div>
         
       <NavBar></NavBar>
        <div className="cartItems">
                {WhisListData.map((val)=>
                        <div key={val.title} className="productCards">

                            <div key={val._id} className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div key={val._id} >
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p>Price: {val.price}$</p>
                                <button onClick={()=>cartHanler(val._id)} className="buttonSty">Add to Cart </button>
                                <button onClick={()=>removeWhisListItem(val._id)} className="buttonSty">Remove from cart </button>
                            </div>

                            </div>)}
        </div>
        
    </div>
    )
}