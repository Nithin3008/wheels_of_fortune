import { createContext,useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const FuncContext=createContext()
export function FuncProvider({ children }) {

    const {CartData,ProdDetails,dispatcherMain,AddressUser}=useContext(MainContext)

    console.log("2 times")
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

// const cartFetch=async()=>
// {
//     const encodedToken = localStorage.getItem("token");
//     const getCart = async () => {
//         try {
//             const response = await axios.get(`/api/user/cart`, {
//                 headers: {
//                     authorization: encodedToken, // passing token as an authorization header
//                 },
//             });
//             // console.log("cart loading",response.data)
//             // 
//             if (response.status == 200) {
//                dispatcherMain({type:"getCart",payload:response.data.cart})
                
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     getCart();
// }
const itemInCart =(id)=>
{
  const product = CartData.find((val) => val._id === id?val.qty:false);
  // console.log(product)
  
  if(product===undefined)
  {
    
    return 0
  }  
  else
  {
    
    return id
  }
}

const pushWhislistData = async (id) => {
    const product = CartData.find((val) => val._id == id);

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
        // dispatcherMain({type:"AddCartItem",payload:response.data.cart})
        // pushWhislistData(id)
       }
       dispatcherMain({type:"AddCartItem",payload:response.data.cart})
        console.log(response.data)
    } catch (error) {
        console.log("error")
    }
   }
   removeItem()
}





const increItem= async(id)=>
{
  // const product = CartData.find((val) => val._id == id);

   const increItem=async()=>
   {
    const encodedToken = localStorage.getItem("token");
    try {
        const response=await axios.post(`/api/user/cart/${id}`,
        {
          action:{
            type:"increment"
          }
        },
         {   
        headers: {
              authorization: encodedToken,
            },
        }
       
        
        )
        console.log(response.data)
        if(response.status==200)
       {
        toast.success("Added one more",{
          position:"bottom-right"})
     
       }
       dispatcherMain({type:"AddCartItem",payload:response.data.cart})
      
    } catch (error) {
        console.log("error")
    }
   }
   increItem()
}


const decreItem= async(id)=>
{
  // const product = CartData.find((val) => val._id == id);

   const decrItem=async()=>
   {
    const encodedToken = localStorage.getItem("token");
    try {
        const response=await axios.post(`/api/user/cart/${id}`,
        {
          action:{
            type:"decrement"
          }
        },
         {   
        headers: {
              authorization: encodedToken,
            },
        }
       
        
        )
        console.log(response.data)
        if(response.status==200)
       {
        toast.warning("Removed one item",{
          position:"bottom-right"})
     
       }
       dispatcherMain({type:"AddCartItem",payload:response.data.cart})
      
    } catch (error) {
        console.log("error")
    }
   }
   decrItem()
}



function removeAddress(id)
{
  const addr=AddressUser.filter((val)=>val.id!==id)
  dispatcherMain({type:"removeAddress",payload:addr})
  console.log(addr)
}
function AddAddress(newAddr)
{
  console.log(newAddr)
  dispatcherMain({type:"AddAddress",payload:newAddr})
}




















  return (<>
  <FuncContext.Provider value={{pushCartData,pushWhislistData,removeCartItem,itemInCart,increItem,decreItem,AddAddress,removeAddress}}>
    {children}
  </FuncContext.Provider>
  <ToastContainer />
  </>);
}
