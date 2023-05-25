import { createContext, useReducer,useContext } from "react";
import axios from "axios";


export const MainContext=createContext()

export function MainProvider({children})
{
  
    const MainData={
        isLoggedin:false,
        user:{
            fName:"",
            lName:"",
            userName:""
        },
        address:{
            street:"Wall street lower manhattam",
            code:10005,
            city:"New York",
            country:"USA"
        },
    
        products:[],
        Cart:[],
        WhisList:[]
    }
    
    const [state,dispatcherMain]=useReducer(MainFun,MainData)
    function MainFun(state,action)
    {
        
        
        if(action.type=="AddingProd")
        {
            
             return {...state,products:action.payload}
        }
       else if(action.type=="LoginHandle")
        {
            return{...state,isLoggedin:!state.isLoggedin}
        }
        else if(action.type=="userDetails")
        {
            const x={
                fname:action.payload.fName,
                lname:action.payload.lName,
                userName:action.payload.userName
            }
            return{...state,user:x}
        }
        else if(action.type=="TestDetails")
        {

        }
        else if(action.type="getCart")
        {
            const encodedToken=localStorage.getItem("token")
            const getCart = async () => {
                try {
                    const response = await axios.get(`/api/user/cart`, {
                      headers: {
                        authorization: encodedToken, // passing token as an authorization header
                      },
                    });
                    if(response.status==200)
                    {
                        return {...state,Cart:response.data.cart}
                    }
                    
                  } catch (error) {
                    console.log(error);
                  }
              };
             getCart()
        }
        // else if(action.type=="AddToCart")
        // {
           
        // }
        
               
         
     
        // {
        //     case "LoginSucess":
                
        //             return{...state,isLoggedin:!state.isLoggedin};
                
       
                
                
        //     // case "AddingCate":
        //     //     console.log("prd loadong")
        //     //     return {...state,category:action.payload}
             
        //     case "AddingProd":
        //         console.log("prd loadong")
        //         return {...state,products:action.payload}            

        //     //     
        //     // case "AddToWhislist":
        //     //     {   
        //     //         const x=Cart.find((val)=>val.id==action.payload)
        //     //         return {...state,WhisList:[...state.WhisList,x]}

        //     //     }
        //     // case "RemoveFromCart":
        //     //     {
        //     //         const x=WhisList.filter((val)=>val.id!==action.payload)
        //     //         return {...state,Cart:[...state.Cart,...x]}

        //     //     }    
        //     // case "RemoveFromWhisList":
        //     //     {
        //     //         const x=WhisList.filter((val)=>val.id!==action.payload)
        //     //         console.log("hi")
        //     //         return {...state,WhisList:[...state.WhisList,...x]}
    
        //     //     }  
        //     default:
        //         return state  
        return state
        }
        console.log("cart loading",state.Cart)
    return(<MainContext.Provider value={{dispatcherMain,ProdDetails:state.products,LoginId:state.isLoggedin,CartData:state.Cart,WhisListData:state.WhisList}}>
        {children}
    </MainContext.Provider>)
    }




