import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../../pages/DataProviders/MainReducer"
import "./nav.css"
export function NavBar()
{
    const {LoginId}=useContext(MainContext)
    const nav=useNavigate()
    return(<div>
        <div className="NavBox">
            <div className="Logo"><p>Wheels of <span>Fortune</span></p></div>
            <div className="searchBox"><input type="search" placeholder="Search"></input></div>
            <div className="NavLinks">
            <button onClick={()=>LoginId?"":nav("/Login1")}>Login</button>
            <button onClick={()=>nav("/Product1")}>Explore</button>
            <button onClick={()=>LoginId?nav("/Cart1"):nav("/Login1")}>Cart</button>
            <button onClick={()=>LoginId?nav("/Whislist1"):nav("/Login1")}>WishList</button></div>
        </div>




    </div>)
}