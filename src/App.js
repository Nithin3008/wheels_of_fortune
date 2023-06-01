import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home1 } from "./pages/home/Home";
import { Login1 } from "./pages/Login/Login";
import { Signup1 } from "./pages/signup/Signup"
import { Product1 } from "./pages/product/Product";
import { Cart1 } from "./pages/cart/Cart";
import { Whislist1 } from "./pages/whislist/WhisList";
import { Checkout1 } from "./pages/checkout/checkout";
import { Clear } from "./clearToken";
import { Profile1 } from "./pages/userProfile/Profile"
import { ProductDetails1 } from "./pages/product/ProductDetails"

function App() {
  return (
    <div className="App">
      <Clear></Clear>
      <Routes>
        <Route path="" element={<Home1 />}></Route>
        <Route path="/Login1" element={<Login1 />}></Route>
        <Route path="/Signup1" element={<Signup1 />}></Route>
        <Route path="/Cart1" element={<Cart1 />}></Route>
        <Route path="/Whislist1" element={<Whislist1 />}></Route>
        <Route path="/Checkout1" element={<Checkout1 />}></Route>
        <Route path="/Product1" element={<Product1 />}></Route>
        <Route path="/ProductDetails1/:prodId" element={<ProductDetails1 />}></Route>
        <Route path="/Profile1" element={<Profile1 />}></Route>
      </Routes>




    </div>
  );
}

export default App;
