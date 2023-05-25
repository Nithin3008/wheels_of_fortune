import { createContext,useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import axios from "axios";
export const FuncContext=createContext()
export function FuncProvider({ children }) {

    const {ProdDetails,LoginId,dispatcherMain}=useContext(MainContext)


  const getCartData = async (id) => {
    const product = ProdDetails.find((val) => val._id == id);

    console.log("repeating 2 times");
    const encodedToken = localStorage.getItem("token");
    const getCart = async () => {
      try {
        const response = await axios.post(
          "/api/user/cart",
          {
            product,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data.cart);
        if (response.status === 201) {
          
          dispatcherMain({ type: "AddCartItem", payload: response.data.cart });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  };

const cartFetch=async()=>
{
    const encodedToken = localStorage.getItem("token");
    const getCart = async () => {
        try {
            const response = await axios.get(`/api/user/cart`, {
                headers: {
                    authorization: encodedToken, // passing token as an authorization header
                },
            });
            // console.log("cart loading",response.data)
            // 
            if (response.status == 200) {
               dispatcherMain({type:"addToCart",payload:response.data.cart})
                
            }
        } catch (error) {
            console.log(error);
        }
    };
    getCart();
}
















  return (<>
  <FuncContext.Provider value={{getCartData}}>
    {children}
  </FuncContext.Provider>
  </>);
}
