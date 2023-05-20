// import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Sg({ details }) {
  const navigate=useNavigate()
 
  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: details.firstname,
        lastName: details.lastname,
        email: details.email,
        password: details.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/Login1")
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
