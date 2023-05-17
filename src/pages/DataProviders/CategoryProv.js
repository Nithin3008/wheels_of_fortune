import { createContext, useEffect, useState } from "react";
export const CategoryData=createContext()
export function CategoryProvider({children})
{
    const [cateData,setCategory]=useState([])
    useEffect(()=>
    {
        const url=async()=>
        {
            const data1=await fetch("/api/categories")
            const recData=await data1.json()
            console.log(recData.categories)
            setCategory(recData.categories)

        }
        url()
    },[])
    return(<div>
        <CategoryData.Provider value={{cateData}}>
            {children}
        </CategoryData.Provider>
    </div>)
}