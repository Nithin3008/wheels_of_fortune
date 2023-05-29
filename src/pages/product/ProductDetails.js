import { useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import { useParams } from "react-router-dom";
export function ProductDetails1()
{
    const {ProdDetails}=useContext(MainContext)
    const itemId=useParams()
    const item=ProdDetails.find((val)=>val._id===itemId)
    return(<div>
        <header>
            <h1>Product Details page</h1>
        </header>
        <section>
            <div>

            </div>
        </section>
    </div>)
}