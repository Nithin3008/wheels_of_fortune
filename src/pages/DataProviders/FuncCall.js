import { createContext,useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const FuncContext=createContext()
export function FuncProvider({ children }) {

    const {CartData,ProdDetails,LoginId,dispatcherMain}=useContext(MainContext)


  const pushCartData = async (id) => {
    const product = ProdDetails.find((val) => val._id == id);

    
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
          toast.success("Item added to Cart",{
            position:"bottom-right"})
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
               dispatcherMain({type:"getCart",payload:response.data.cart})
                
            }
        } catch (error) {
            console.log(error);
        }
    };
    getCart();
}


const pushWhislistData = async (id) => {
    const product = CartData.find((val) => val._id == id);

    console.log("hi whist I'm ur cart",CartData,product);
    const encodedToken = localStorage.getItem("token");
    const getWhislist = async () => {
      try {
        const response = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data);
        if (response.status === 201) {
          toast.success("Added to Whislist",{
            position:"bottom-right"})
          dispatcherMain({ type: "AddWhislistItem", payload: response.data.wishlist });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getWhislist();
  };
const removeCartItem= async(id)=>
{
   const removeItem=async()=>
   {
    const encodedToken = localStorage.getItem("token");
    try {
        const response=await axios.delete(`/api/user/cart/${id}`,
         {   
        headers: {
              authorization: encodedToken,
            },
        }
       
        
        )
        if(response.status==200)
       {
        toast.warning("Removed from Cart",{
          position:"bottom-right"})
        dispatcherMain({type:"AddCartItem",payload:response.data.cart})
       }
        console.log(response.data)
    } catch (error) {
        console.log("error")
    }
   }
   removeItem()
}












  return (<>
  <FuncContext.Provider value={{pushCartData,cartFetch,pushWhislistData,removeCartItem}}>
    {children}
  </FuncContext.Provider>
  <ToastContainer />
  </>);
}
