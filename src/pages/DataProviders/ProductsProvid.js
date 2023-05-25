import {  useContext, useEffect } from "react";
import { MainContext } from "./MainReducer";


export function ProductProvider()
{
    const {dispatcherMain}=useContext(MainContext)
   
    useEffect(()=>
    {
        const url=async()=>
        {
            const data2=await fetch("/api/products")
            const recData2=await data2.json()
            // console.log(recData2.products)
            dispatcherMain({type:"AddingProd",payload:recData2.products})
  

        }
        url()
    },[])
    return(<div>

    </div> )
    
}