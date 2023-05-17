import { createContext, useEffect, useState } from "react";
export const ProductData=createContext()
export function ProductProvider({children})
{
    const [producData,setProduct]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const data1=await fetch("/api/products")
            const recData=await data1.json()
            setProduct(recData.products)

        }
        url()
    },[])
    return(
        <ProductData.Provider value={{producData}}>
            {children}
        </ProductData.Provider>
    )
}