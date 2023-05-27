import { useContext, useState } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import "./checkout.css"
export function Checkout1()
{
    const {AddressUser,CartData}=useContext(MainContext)
    const totalPrice=CartData.reduce((acc,val)=>(acc+val.price),0)
    const [formShow,setForm]=useState(false)
    console.log(AddressUser,CartData)
    function selectRadio(event)
    {
        event.target.checked=true
        const str=event.target.checked
        console.log(str)
    }
    function showForm()
    {
       setForm(true)
    }
    function submitForm(event)
    {
        event.preventDefault();
        console.log("submit form")
        console.log(event.target.code.value)
    }
    function hideForm()
    {
        console.log("hideform")
        setForm(false)
    }
    return(<div>
        <header><h1>navBar</h1></header>
        <div className="MainBox">
        <div className="AddressBar">
        {AddressUser.map((val)=>
                <ul key={val.id} className="AddressItems">
                    <input   onClick={(e)=>selectRadio(e)}   type="radio"></input>
                    <li>
                        <p>{val.street}</p>
                        <p>{val.city}</p>
                        <p>{val.code}</p> 
                        <p>{val.country}</p>
                    </li>
                    <button>Remove Address</button>
                </ul>)}

            <form onSubmit={(e)=>submitForm(e)} className="Form" style={{display:formShow?"block":"none"}}>
                <div>
                    <h2 style={{color:"orangered",backgroundColor:"#185464",padding:"10px 10px",borderRadius:"5px"}}>Enter new Address</h2>
                <span>Phone:<input id="phnNo" type="number"></input></span>
           <span> street:<input id="street" type="text"></input></span>
           <span>Pincode:<input id="code" type="number"></input></span>
           <span>city:<input id="city" type="text"></input></span>
           <span> country:<input id="country" type="text"></input></span>
            <button type="submit">Submit</button>
            
                </div>
         
            </form>
            <button onClick={()=>hideForm()}>Cancel</button>
        <div className="addBtn"><button  onClick={()=>showForm()}>Add new Address     </button></div>      
        </div>
       <div>
        {CartData.map((val)=>
            <p><span>{val.title}{val.qty}$</span> <span>{val.price}</span></p>
        )}
        <hr></hr>
        <div><span>Total Price</span><span>{totalPrice}$</span></div>
        </div>
        </div>
    </div>)
}