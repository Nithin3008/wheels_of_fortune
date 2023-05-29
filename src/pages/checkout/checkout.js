import { useContext, useState } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { v4 as uuid } from "uuid";
import { FuncContext } from "../DataProviders/FuncCall";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./checkout.css"
export function Checkout1()
{
    const {AddressUser,CartData}=useContext(MainContext)
    const {AddAddress,removeAddress}=useContext(FuncContext)
    const totalPrice=CartData.reduce((acc,val)=>(acc+val.price),0)
    const [formShow,setForm]=useState(false)
    const [idAddr,setId]=useState("")
  
    function showForm()
    {
       setForm(true)
    }
    function submitForm(event)
    {
        event.preventDefault();
        
        const addr={
            id:uuid(),
            street:event.target.street.value,
            phno:event.target.phnNo.value,
            city:event.target.city.value,
            code:event.target.code.value,
            country:event.target.country.value,
        }
        console.log(addr)
        AddAddress(addr)
        setForm(false)
    }
    function hideForm()
    {
        
        setForm(false)
    }
    function removeAddr()
    {
        console.log(idAddr)
        removeAddress(idAddr)
    }
    function setAddId(event,id)
    {
        event.target.checked=true
        console.log(event.target.checked)
        setId(id)
    }
    function placeOrder()
    {
        if(idAddr.length>0 &&AddressUser.length)
        {
            toast.success("Successfull place order",{
                position:"bottom-right"})
        }
        else
        {
            toast.error("Please fill address",{
                position:"bottom-right"})
        }
    }
    return(<div>
        <header><h1>navBar</h1></header>
        <div className="MainBox">
        <div className="AddressBar">
        {AddressUser.map((val)=>
                <ul key={val.id} className="AddressItems">
                    <input checked={val.id===idAddr} id="radioSelector"  onChange={(e)=>setAddId(e,val.id)} type="radio"></input>
                    <li key={val.id}>
                        <p>{val.street}</p>
                        <p>{val.city}</p>
                        <p>{val.code}</p> 
                        <p>{val.country}</p>
                    </li>
                    <button onClick={()=>removeAddr()} style={{color:"white",backgroundColor:"#185464",padding:"10px 10px",borderRadius:"5px"}}>Remove Address</button>
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
          
        <div className="addBtn">
        <button style={{display:formShow?"block":"none"}} onClick={()=>hideForm()}>Cancel</button>
            <button  onClick={()=>showForm()}>Add New Address     </button></div>      
        </div>
       <div className="checkoutBox">
        {CartData.map((val)=>
            <p><span>{val.title}     ({val.qty})$</span> <span>{val.price}</span></p>
        )}
        <hr></hr>
        <div className="totalPrice"><span>Total Price : </span><span>{totalPrice}$</span></div>
       <div className="addBtn">
       <button onClick={()=>placeOrder()}>Place order</button>
        </div > 
        </div>
        
        </div>
    </div>)
}