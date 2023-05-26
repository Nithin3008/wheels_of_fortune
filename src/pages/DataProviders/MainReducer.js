import { createContext, useReducer, useContext } from "react";
import axios from "axios";

export const MainContext = createContext();

export function MainProvider({ children }) {
    const MainData = {
        isLoggedin: false,
        user: {
            fName: "",
            lName: "",
            userName: "",
        },
        address:[ {
            street: "Wall street lower manhattam",
            code: 10005,
            city: "New York",
            country: "USA",
        },],

        products: [],
        Cart: [],
        Whislist: [],
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
            console.log(action.payload)
            return {...state,Cart:action.payload}
    }
    else if(action.type=="AddWhislistItem")
    {   
        
        return {...state, Whislist:action.payload}
    }
    

    return state;
}

console.log("cart loading",state.user)
return (
    <MainContext.Provider
        value={{
            dispatcherMain,
            ProdDetails: state.products,
            LoginId: state.isLoggedin,
            CartData: state.Cart,
            WhisListData: state.Whislist,
        }}
    >
        {children}
    </MainContext.Provider>
);
    }
