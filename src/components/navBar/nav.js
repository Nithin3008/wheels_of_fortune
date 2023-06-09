import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../../pages/DataProviders/MainReducer"
import "./nav.css"
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});
export function NavBar()
{

    const {LoginId,dispatcherMain}=useContext(MainContext)
    const nav=useNavigate()
    const searchBox=(event)=>{
        const item=(event.target.value).toLowerCase()
        dispatcherMain({type:"searchQuery",payload:item})
        nav("/Product1")
      }
    
    
    return(<div>
        <div className="NavBox" data-aos={"fade-down"}>
            <div className="Logo"><p style={{cursor:"pointer"}} onClick={()=>nav("/")}>Wheels of <span>Fortune</span></p></div>
            <div className="searchBox"><input onChange={(e)=>searchBox(e)} type="search" placeholder="Search"></input></div>
            <div className="NavLinks">
            <button onClick={()=>LoginId?nav("/Profile1"):nav("/Login1")}>Login</button>
            <button onClick={()=>nav("/Product1")}>Explore</button>
            <button onClick={()=>LoginId?nav("/Cart1"):nav("/Login1")}>Cart</button>
            <button onClick={()=>LoginId?nav("/Whislist1"):nav("/Login1")}>WishList</button>
            <button onClick={()=>LoginId?nav("/Profile1"):nav("/Login1")}>Profile</button>
            </div>
        </div>




    </div>)
}