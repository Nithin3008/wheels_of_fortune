import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { MainContext } from "./MainReducer";
export const AuthContext=createContext()

export function AuthProvider({children})
{
    const nav=useNavigate()
    // const {dispatcherMain}=useContext(MainContext)
    const [state,dispatchAuth]=useReducer(AuthinFun,{count:1})
    // const loginFun=()=>dispatcherMain({type:"LoginSucess"})
    function AuthinFun(state,action)
    {
            if(action.type=="LoginUser")            
            {
                
               
                const LoginHandler = async () => {
                    try {
                      const response = await axios.post(`/api/auth/login`, {
                        email: action.payload.userName,
                        password: action.payload.pwd,
                      });
                      console.log(response.data.encodedToken)
                      if(response.data.encodedToken== localStorage.getItem("token"))
                      {
                        console.log("hi")
                        alert("welome Back dude")
                        nav("/")
                      }
                      localStorage.setItem("token", response.data.encodedToken);
                      // loginFun()
                    } catch (error) {
                      console.log(error);
                    }
                  };

                  LoginHandler()
                  
            }
            else if(action.type=="signUpUser")
            {
                
                const signupHandler = async () => {
                    try {
                      const response = await axios.post(`/api/auth/signup`, {
                        firstName: action.payload.fName,
                        lastName: action.payload.lName,
                        email: action.payload.userName,
                        password: action.payload.pwd,
                      });
                     
                      console.log(response.data.encodedToken)
                      localStorage.setItem("token", response.data.encodedToken);
                      // loginFun()
                      if(response.status===201)
                      {
                        nav("/Login1")
                      }
                      
                    } catch (error) {
                      console.log(error);
                    }
                  };
                  signupHandler()
            }
            return state
           
        
        
    }
    return(<AuthContext.Provider value={{dispatchAuth}}>
        {children}
    </AuthContext.Provider>);

}