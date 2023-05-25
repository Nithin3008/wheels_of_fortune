import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../DataProviders/MainReducer";
export function Whislist1()
{
    const {LoginId,WhisListData}=useContext(MainContext)
    const nav=useNavigate()
    
    return(<div>
         <header className="topSection">
          <div className="topSectionBox">
            <div>
              <p className="heading1">
                Wheels of <span style={{ color: "orangered" }}>Fortune</span>
              </p>
            </div>
            <nav>
              <button onClick={()=>nav("/Login1")}  className="navButton">
                Login
              </button>
              <button onClick={()=>LoginId?nav("/Product1"):""}  className="navButton">
                Explore
              </button>
              <button onClick={()=>LoginId?nav("/Cart1"):""}  className="navButton">
                Cart
              </button>
              <button onClick={()=>LoginId?nav("/Whislist1"):""}  className="navButton">
                Whislist
              </button>
            </nav>
          </div>
        </header>
        <div>
        <div className="cartItems">
                {WhisListData.map((val)=>
                        <div key={val.id} className="productCards">

                            <div key={val.id} className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div>
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p>Price: {val.price}$</p>
                                <button className="buttonSty">Remove from WhisList </button>
                                
                            </div>

                            </div>)}
        </div>
        
    </div>
    </div>)
}