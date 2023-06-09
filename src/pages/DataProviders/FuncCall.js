import { createContext,useContext } from "react";
import { MainContext } from "../DataProviders/MainReducer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export const FuncContext=createContext()
export function FuncProvider({ children }) {

    const {CartData,ProdDetails,dispatcherMain,AddressUser,ProdDetailsCate,SearchQuery, WhisListData,SortBy}=useContext(MainContext)
    const nav=useNavigate()
    console.log("2 times")
  const pushCartData = async (id) => {
    const product = ProdDetails.find((val) => val._id === id);
    console.log(product)
    
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
  
  if(product===undefined)
  {
    
    return 0
  }  
  else
  {
    
    return id
  }
}

const itemInWishList =(id)=>
{
  const product =  WhisListData.find((val) => val._id === id?val.id:false);
  console.log(WhisListData[0])
  
  if(product===undefined)
  {
    console.log("hello")
    return 0
  }  
  else
  {
    console.log(id)
    return id
  }
}
const pushWhislistData = async (id) => {
    const product = ProdDetails.find((val) => val._id === id);
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
        if(response.status===200)
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
        if(response.status===200)
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
        if(response.status===200)
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
  // console.log(cate)

  const z=ProdDetailsCate.length===0?[cate]:[...ProdDetailsCate,cate]
  console.log(z)
  
  dispatcherMain({type:"shopProd",payload:z})
  
}
function removeCate(cate)
{
  console.log(cate)
  const x=ProdDetailsCate.filter((val)=>val!==cate)
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
function ApplyFilters()
{
  
  let newData=ProdDetails
  if(SearchQuery!=="")
  {
    newData=newData.filter((val)=>val.title.toLowerCase().includes(SearchQuery))
  }
  if(ProdDetailsCate.length>0)
  {
    console.log(ProdDetailsCate)
    newData=newData.filter((val)=>ProdDetailsCate.find((item)=>item===val.categoryName))
    console.log(newData)
  }
  if(SortBy==="low2high")
  {
    newData=newData.sort((a,b)=>a.price-b.price)
  }
  if(SortBy==="high2low")
  {
    newData=newData.sort((a,b)=>b.price-a.price)
  }
  
  return newData
}
let carsData=ApplyFilters()




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
        if(response.status===200)
       {
        toast.warning("Removed from Wishlist",{
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

function LoginHandler(userDetails)
      {
                const loginHandler = async () => {
                    try {
                      const response = await axios.post(`/api/auth/login`, {
                        email: userDetails?.userName,
                        password: userDetails?.pwd,
                      });
                      localStorage.setItem("token", response.data.encodedToken);
                      if(response.status===200)
                      {
                       
                        toast.success("Welcome Back",{
                          position:"top-center"
                      });
                      nav("/")
                      }                     
                      const x={fName:response.data.foundUser.firstName,lName:response.data.foundUser.lastName,userName:response.data.foundUser.email}
                     
                      
                      dispatcherMain({type:"LoginHandler",payload:x})
                     
                    } catch (error) {
                      toast.error("Please enter correct details",{
                        position:"top-center"
                    });
                    }
                    
                    
                   
                    
                  };
                  
                  loginHandler()      
      }        
      function Signup(userDetails)
      {
        
                  const signupHandler = async () => {
                    try {
                      const response = await axios.post(`/api/auth/signup`, {
                        firstName: userDetails?.fName,
                        lastName: userDetails?.lName,
                        email: userDetails?.userName,
                        password: userDetails?.pwd,
                      });
                     
                    
                      localStorage.setItem("token", response.data.encodedToken);
                      // loginFun()
                      if(response.status===201)
                      {
                        toast.success(`Welcome ${userDetails.fName}`,{
                          position:"top-center"})
                        nav("/Login1")
                      }
                      
                    } catch (error) {
                      console.log(error);
                    }
                   
                    
                  };
                 
                  signupHandler()
      }    


  return (<>
  <FuncContext.Provider value={{pushCartData,pushWhislistData,removeCartItem,itemInCart,increItem,decreItem,AddAddress,removeAddress,starFilterSet,shopCate,removeCate,setStars,setRange,clearAllFilter,logoutUser,removeWhisListItem,carsData,itemInWishList,LoginHandler,Signup}}>
    {children}
  </FuncContext.Provider>
  <ToastContainer />
  </>);
}
