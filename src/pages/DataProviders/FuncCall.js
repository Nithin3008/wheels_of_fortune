import { createContext,useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export const FuncContext=createContext()
export function FuncProvider({ children }) {

    const {CartData,ProdDetails,dispatcherMain,AddressUser,ProdDetailsCate,SearchQuery}=useContext(MainContext)
    const nav=useNavigate()
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
   toast.warning("Removed Address",{
     position:"bottom-right"})

  
  console.log(addr)
}
function AddAddress(newAddr)
{
  console.log(newAddr)
  dispatcherMain({type:"AddAddress",payload:newAddr})
   toast.success("Added new Address",{
     position:"bottom-right"})
}

function logoutUser()
{
  localStorage.clear("token")
  dispatcherMain({type:"logoutUser"})
  nav("/")
}

function starFilterSet(star)
{
  dispatcherMain({type:"ApplyStarFilter",payload:star})
}

function shopCate(cate)
{
  console.log(cate,ProdDetailsCate)
  
  const x=ProdDetailsCate.filter((val)=>val.categoryName!==cate)
 
  const y=ProdDetails.filter((val)=>val.categoryName===cate)
  const z=x.length==0?y:[...x,...y]

  
  dispatcherMain({type:"shopProd",payload:z})
  
}
function removeCate(cate)
{
  const x=ProdDetailsCate.filter((val)=>val.categoryName!==cate)
  console.log(x)
  dispatcherMain({type:"shopProd",payload:x})
}
function setStars(rating)
{
  dispatcherMain({type:"setStar",payload:rating})
}
function setRange(range)
{
  dispatcherMain({type:"setRange",payload:range})
}
function  clearAllFilter()
{
  dispatcherMain({type:"cleanAll"})
}
function lh()
{
  console.log(ProdDetailsCate.length)
  const x=ProdDetailsCate.length==0?ProdDetails.sort((a,b)=>a.price-b.price):ProdDetailsCate.sort((a,b)=>a.price-b.price)
  console.log(x)
  dispatcherMain({type:"lowToHigh",payload:["low2high",x]})
}
function hl()
{
  console.log(ProdDetailsCate.length)
  const x=ProdDetailsCate.length==0?ProdDetails.sort((a,b)=>b.price-a.price):ProdDetailsCate.sort((a,b)=>b.price-a.price)
  console.log(x)
  dispatcherMain({type:"highToLow",payload:["high2low",x]})
}
function searchItem(items)
{
  const z=ProdDetails.filter((val)=>val.title.toLowerCase().includes(items))
  console.log(z)
  dispatcherMain({type:"searchQuery",payload:z})
  nav("/Product1")
}

const removeWhisListItem= async(id)=>
{
   const removeItem=async()=>
   {
    const encodedToken = localStorage.getItem("token");
    try {
        const response=await axios.delete(`/api/user/wishlist/${id}`,
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
       dispatcherMain({type:"AddWhislistItem",payload:response.data.wishlist})
        
    } catch (error) {
        console.log("error")
    }
   }
   removeItem()
}





  return (<>
  <FuncContext.Provider value={{pushCartData,pushWhislistData,removeCartItem,itemInCart,increItem,decreItem,AddAddress,removeAddress,starFilterSet,shopCate,removeCate,setStars,setRange,clearAllFilter,hl,lh,searchItem,logoutUser,removeWhisListItem}}>
    {children}
  </FuncContext.Provider>
  <ToastContainer />
  </>);
}
