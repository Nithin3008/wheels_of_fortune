import { useContext } from "react"
import { CategoryData } from "../DataProviders/CategoryProv"
import "./product.css"
export function Product1()
{
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
      </div>
    );
}