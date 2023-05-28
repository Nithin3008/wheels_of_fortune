import { createContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";


export const MainContext = createContext();

export function MainProvider({ children }) {
    useEffect(()=>
    {
        console.log("hi prod cart")
        const url=async()=>
        {
            const data1=await fetch("/api/categories")
            const recData=await data1.json()
            const data2=await fetch("/api/products")
            const recData2=await data2.json()
           
            dispatcherMain({type:"AddingProd",payload:recData2.products})
            dispatcherMain({type:"CategoryData",payload:recData.categories})
            

        }
        url()
    },[])
    console.log("main reducer 2 times")
    const MainData = {
        isLoggedin: false,
        user: {
            fName: "",
            lName: "",
            userName: "",
        },
        address:[ {
            id:uuid(),
            phoneNo:7894561230,
            street: "Wall street lower manhattam",
            code: 10005,
            city: "New York",
            country: "USA",
        },],
        Category:[],
        products: [],
        Cart: [],
        Whislist: [],
        CategoryFilter:[],
    
        Rating:0,
        Range:4000000,
    };

    const [state, dispatcherMain] = useReducer(MainFun, MainData);
    function MainFun(state, action) {
        if (action.type == "AddingProd") {
            return { ...state, products: action.payload };
        } 
        else if (action.type == "LoginHandler") {
            console.log(action.payload)
                const x={
                    fName: action.payload.fName,
                    lName: action.payload.lName,
                    userName: action.payload.userName,
                }
            return { ...state, isLoggedin: !state.isLoggedin,user:x };}
       else if (action.type == "TestDetails") {
        } else if (action.type == "getCart") {
            return {...state,Cart:action.payload}
        } 
        else if (action.type == "AddCartItem") {
           
            return {...state,Cart:action.payload}
    }
    else if(action.type=="AddWhislistItem")
    {   
        
        return {...state, Whislist:action.payload}
    }
    else if(action.type=="CategoryData")
    {
        return { ...state, Category: action.payload };
    }
    else if(action.type==="AddAddress")
    {
        return{...state,address:[...state.address,action.payload]}
    }
    else if(action.type==="removeAddress")
    {
        return{...state,address:action.payload}
    }
    else if(action.type==="logoutUser")
    {
        return{...state,isLoggedin:false}
    }
   
    else if(action.type==="shopProd")
    {
        return{...state,CategoryFilter:action.payload}
    }
    else if(action.type=="setStar")
    {
        return{...state,Rating:action.payload}
    }
    else if(action.type=="setRange")
    {
        return{...state,Range:action.payload}
    }
    else if(action.type="cleanAll")
    {
        return{...state,Range:4000000,CategoryFilter:[],Rating:0}
    }
    // else if(action.type==="AddCate")
    // {
    //     return {...state,CategorySelector:[...state.CategorySelector,action.payload]}
    // }
    return state;
}


return (
    <MainContext.Provider
        value={{
            dispatcherMain,
            ProdDetails: state.products,
            ProdDetailsCate:state.CategoryFilter,
            LoginId: state.isLoggedin,
            CartData: state.Cart,
            WhisListData: state.Whislist,
            Category:state.Category,
            AddressUser:state.address,
            ProfileDetails:state.user,
            ratingFilter:state.Rating,
            Range:state.Range
           
        }}
    >
        {children}
    </MainContext.Provider>
);
    }
