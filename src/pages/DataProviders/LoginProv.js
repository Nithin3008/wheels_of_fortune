import axios from "axios";
import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
export const LoginContext=createContext()

export function LoginProvider( { children }) {
  const nav=useNavigate()
  let userDet={
    email: "",
    password: ""
  }
  const [authToken,setToken]=useState("empty")
  
  const loginHandler = async () => {
    try {
      console.log(userDet)
      const url = await axios.post("/api/auth/login", {
        email: userDet?.email,
        password: userDet?.password,
      });
      if(url.status===200)
      {
        setToken(url.data.encodedToken)
        nav("/")
      }    
      } catch (error) {
      console.log(error);
    }}
    function logutHandler()
    {
      localStorage.clear("token")
      nav("/")
    }
  

  return (
    <LoginContext.Provider value={{
      userDet, authToken, loginHandler
      , setToken,logutHandler
    }}>
      {children}
    </LoginContext.Provider>
  );
}

