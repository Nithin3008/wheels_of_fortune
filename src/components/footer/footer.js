

import pic1 from "./svg/icons8-github.svg"
import pic2 from "./svg/icons8-linkedin.svg"
import pic3 from "./svg/icons8-twitter.svg"
import "./footer.css"
export function Footer()
{
    return(<div>
        <div className="FooterBox">
            <div className="FooterLogo">
                <h1>Wheels of <span>Fortune</span></h1>
                <p>Fill your garage with beasts</p>
            </div>
            <div className="copyRight">
                <p>© 2023 Wheels of Fortune</p>
            </div>
            <div className="FooterLinks">
                <p>Connect</p>
              <a href="https://github.com/Nithin3008/wheels_of_fortune">  <img src={pic1}></img></a>
              <a href="https://www.linkedin.com/in/nithindevathi-3008/"><img src={pic2}></img></a>
              <a href="https://twitter.com/Nithin_Nikhil12"><img src={pic3}></img></a>

            </div>

        </div>

    </div>)
}