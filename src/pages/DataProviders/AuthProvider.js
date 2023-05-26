import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MainContext } from "./MainReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext=createContext()

export function AuthProvider({children})
{
  
    const nav=useNavigate()
    const [handler,setHandler1]=useState("")
    const [userDetails,setUser]=useState({})
    const {dispatcherMain}=useContext(MainContext)
    useEffect(()=>
    {
      if(handler=="Login")
      {
        console.log("login going to execute")
        LoginHandler()
      }
      else if(handler=="SignUp")
      {
        Signup()
      }
    },[handler])
    
      const LoginHandler=async()=>
      {
                const loginHandler = async () => {
                    try {
                      const response = await axios.post(`/api/auth/login`, {
                        email: userDetails?.userName,
                        password: userDetails?.pwd,
                      });
                      
                      if(response.status==200)
                      {
                       
                        toast.success("Welcome Back",{
                          position:"top-center"
                      });
                      
                      }
                      localStorage.setItem("token", response.data.encodedToken);
                      console.log(response.data)
                      const x={fName:response.data.foundUser.firstName,lName:response.data.foundUser.lastName,userName:response.data.foundUser.email}
                     console.log(x)
                      
                      dispatcherMain({type:"LoginHandler",payload:x})
                     
                    } catch (error) {
                      console.log(error);
                    }
                    
                    
                   
                    nav("/")
                  };
                  // setHandler1("")
                  loginHandler()      
      }        
      function Signup()
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
                  // setHandler1("")
                  signupHandler()
      }         
               
      
              
               
                  
            // }
            // else if(action.type=="signUpUser")
            // {
                
                
            // }
            // return state
           
            return(
            <div>
              <AuthContext.Provider value={{setUser,setHandler1}}>
              {children}
          </AuthContext.Provider>
          <ToastContainer />
              </div>
           );   
        
    }
   
