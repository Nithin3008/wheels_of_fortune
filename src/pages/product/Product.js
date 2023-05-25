import { useContext } from "react"
import { useParams,useNavigate } from "react-router-dom";

import { MainContext } from "../DataProviders/MainReducer";

import "./product.css"
export function Product1()
{
    const nav=useNavigate()
    const {dispatcherMain,ProdDetails,LoginId}=useContext(MainContext)
    const {cateType}=useParams()
    console.log(cateType)
    const producData=[...ProdDetails]
    let prodData=cateType=="All"?producData :producData.filter((val)=>val.categoryName==cateType)
   function AddToCart(event,id)
   {
    console.log(id)
        LoginId?dispatcherMain({type:"AddToCart",payload:id}):nav("/Login1")
        
   }
    return (
      <div>
            <header className="topSection">
                <div className="topSectionBox">
                    <div>
                        <p className="heading1">
                            Wheels of <span style={{ color: "orangered" }}>Fortune</span>
                        </p>
                    </div>
                    <nav>
                        <button onClick={()=>nav("/Login1")} className="buttonSty">
                            Login
                        </button>
                        <button onClick={()=>LoginId?nav("/Cart1"):""} className="buttonSty">
                            Cart
                        </button>
                        <button onClick={()=>LoginId?nav("/WhisList1"):""} className="buttonSty">
                            Whislist
                        </button>
                    </nav>
                </div>
            </header>
            <section>
                <div className="productBox">
                    <div className="producBoxFilters">
                        <div style={{display:"flex"}}><p style={{marginRight:"50px"}}>Filters</p><p style={{color:"#185464"}}>Clear</p></div>
                        <p>Price</p>
                        <input className="range" type="range" min="0" max="4000000"></input>
                        <div>
                            <p>Category</p>
                            <div className="categoryFilter">
                            <label> <input type="checkbox"></input> Truck</label>
                            <label> <input type="checkbox"></input> Suv</label>
                            <label> <input type="checkbox"></input> EV</label>
                            <label> <input type="checkbox"></input> Super Cars</label>
                            </div>
                            
                        </div>
                        <div>
                            <p >Rating</p>
                            <div className="categoryFilter">
                            <label> <input type="radio"></input> 1 Star+</label>
                            <label> <input type="radio"></input> 2 Star+</label>
                            <label> <input type="radio"></input> 3 Star+</label>
                            <label> <input type="radio"></input> 4 Star+</label>
                            </div>
                        </div>
                        <div>
                            <p>Price Sort</p>
                            <div className="categoryFilter">
                            <label><input type="radio"></input> low to high</label>
                            <label><input type="radio"></input> high to low</label>
                            </div>
                        </div>
                    </div>
                    <div className="producBoxCards">
                        {prodData.map((val)=>
                        <div key={val.id} className="productCards">

                            <div key={val.id} className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div>
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p>Price: {val.price}$</p>
                                <p><button onClick={(e)=>AddToCart(e,val._id)}>Add to Cart</button></p>
                            </div>

                            </div>)}
                    </div>
                </div>
            </section>

      </div>
    );
}