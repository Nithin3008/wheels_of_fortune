import { useEffect } from "react";

export function Clear()
{
    useEffect(()=>
    {
      
        localStorage.clear()
    },[])
    return(<>
    </>)
}