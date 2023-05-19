import axios from "axios";
import { createContext, useState} from "react";
export const LoginContext=createContext()
export function LoginProvider( { children }) {
  let userDet={
    email: "",
    password: ""
  }
  const [authToken,setToken]=useState("empty")
  const loginHandler = async () => {
    try {
      const url = await axios.post("/api/auth/login", {
        email: userDet?.email,
        password: userDet?.password,
      });
      setToken(url.data.encodedToken);
      console.log(authToken)
    } catch (error) {
      console.log(error);
    }}
 
  

  return (
    <LoginContext.Provider value={{
      userDet, authToken, loginHandler
      , setToken
    }}>
      {children}
    </LoginContext.Provider>
  );
}

