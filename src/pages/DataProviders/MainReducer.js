import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";


export const MainContext = createContext();

export function MainProvider({ children }) {
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
    return state;
}


return (
    <MainContext.Provider
        value={{
            dispatcherMain,
            ProdDetails: state.products,
            LoginId: state.isLoggedin,
            CartData: state.Cart,
            WhisListData: state.Whislist,
            Category:state.Category,
            AddressUser:state.address
        }}
    >
        {children}
    </MainContext.Provider>
);
    }
