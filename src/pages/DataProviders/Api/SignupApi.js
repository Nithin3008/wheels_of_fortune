// import { createContext, useState } from "react";
import axios from "axios";
export function Sg({ details }) {
  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: details.firstname,
        lastName: details.lastname,
        email: details.email,
        password: details.password,
      });
      console.log(response.data.encodedToken)
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };
  let decider=Object.keys(details).length === 0
  if(decider==false)
  {
    signupHandler();
  }
 

 
}
