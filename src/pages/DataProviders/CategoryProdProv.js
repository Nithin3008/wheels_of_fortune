import { createContext, useEffect, useState,useContext } from "react";
import { MainContext } from "./MainReducer";

export const CategoryData=createContext()

export function CategoryProvider({children})
{
    const [cateData,setCategory]=useState([])
    const {dispatcherMain}=useContext(MainContext)
    useEffect(()=>
    {
        const url=async()=>
        {
            const data1=await fetch("/api/categories")
            const recData=await data1.json()
            const data2=await fetch("/api/products")
            const recData2=await data2.json()
           
            dispatcherMain({type:"AddingProd",payload:recData2.products})
            setCategory(recData.categories)

        }
        url()
    },[])
    return(
        <CategoryData.Provider value={{cateData}}>
            {children}
        </CategoryData.Provider>
    )
}