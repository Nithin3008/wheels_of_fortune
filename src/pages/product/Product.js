import { useContext } from "react"
import { CategoryData } from "../DataProviders/CategoryProv"
import { ProductData } from "../DataProviders/ProductsProvid";
import "./product.css"
export function Product1()
{
    const {producData}=useContext(ProductData)
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
                        <a href="/" className="linksStyling">
                            Login
                        </a>
                        <a href="/" className="linksStyling">
                            Cart
                        </a>
                        <a href="/" className="linksStyling">
                            Whislist
                        </a>
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
                        {producData.map((val)=>
                        <div className="productCards">

                            <div className="productImages">
                                <img src={`${val.src}`}></img>
                                </div>
                            <div>
                                <p>Title: {val.title}</p>
                                <p>Manufacturer: {val.manufacturer}</p>
                                <p>Power: {val.HP}</p>
                                <p><button>Add to Cart</button></p>
                            </div>

                            </div>)}
                    </div>
                </div>
            </section>

      </div>
    );
}