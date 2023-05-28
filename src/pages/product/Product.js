import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

import { FuncContext } from "../DataProviders/FuncCall";
import { MainContext } from "../DataProviders/MainReducer";
import "./product.css"
export function Product1()
{
    const nav=useNavigate()
    const {LoginId,ProdDetailsCate, ProdDetails,ratingFilter,Range,Category}=useContext(MainContext)
    const {pushCartData,itemInCart,shopCate,removeCate,setStars,setRange, clearAllFilter}=useContext(FuncContext)
    const productData=ProdDetailsCate.length===0?[...ProdDetails]:[...ProdDetailsCate]
    let prodData=productData
    if(ratingFilter>0)
    {
        prodData=prodData.filter((val)=>val.rating>=ratingFilter)
        console.log(prodData)
    }
    if(Range<4000000)
    {
        prodData=prodData.filter((val)=>val.price<Range)
    }
    console.log("product page rendering")
   function AddToCart(event,id)
   {
    event.target.innerText="Go to Cart"
    LoginId?pushCartData(id):nav("/Login1")
    
        
   }
   function setRating(event)
   {
        console.log(event.target.value)
        const stars=event.target.value
        setStars(stars)
   }

function setCategory(event,cate)
{
    const str=event.target.checked
   
    str?shopCate(cate):removeCate(cate)
}
function priceRange(event)
{
    console.log(event.target.value)
    const num=event.target.value
    setRange(num)
}
function cleanAll()
{
    clearAllFilter()
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
                        <div style={{display:"flex"}}><p style={{marginRight:"50px"}}>Filters</p><p onClick={()=>cleanAll()} style={{color:"#185464"}}>Clear</p></div>
                        <p>Price</p>
                        <input onChange={(e)=>priceRange(e)} defaultValue={4000000} className="range" type="range" min="0" max="4000000"></input>
                        <div>
                            <p>Category</p>
                            <div className="categoryFilter">
                            <label> <input  onClick={(e)=>setCategory(e,"Trucks")}  type="checkbox"></input> Truck</label>
                            <label> <input  onClick={(e)=>setCategory(e,"Suv")} type="checkbox"></input> Suv</label>
                            <label> <input  onClick={(e)=>setCategory(e,"EV")}  type="checkbox"></input> EV</label>
                            <label> <input  onClick={(e)=>setCategory(e,"Super Cars")} type="checkbox"></input> Super Cars</label>
                            </div>
                            
                        </div>
                        <div>
                            <p >Rating</p>
                            <div className="categoryFilter">
                            <label> <input checked={ratingFilter==1?true:false} value={1} onClick={(e)=>setRating(e)} type="radio"></input> 1 Star+</label>
                            <label> <input checked={ratingFilter==2?true:false} value={2} onClick={(e)=>setRating(e)} type="radio"></input> 2 Star+</label>
                            <label> <input checked={ratingFilter==3?true:false} value={3} onClick={(e)=>setRating(e)} type="radio"></input> 3 Star+</label>
                            <label> <input checked={ratingFilter==4?true:false} value={4} onClick={(e)=>setRating(e)} type="radio"></input> 4 Star+</label>
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
                        <div key={val._id} className="productCards">
                               
                            <div  className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div >
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p>Price: {val.price}$</p>
                                <p><button disabled={itemInCart(val._id)==val._id} onClick={(e)=>AddToCart(e,val._id)}> {itemInCart(val._id)==val._id?"Go to Cart":"Add to cart"}</button></p>
                            </div>

                            </div>)}
                    </div>
                </div>
            </section>
                            
      </div>
    );
}