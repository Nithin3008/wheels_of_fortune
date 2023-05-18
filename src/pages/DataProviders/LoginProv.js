import axios from "axios"
export function Lg({details})
{
    const loginHandler=async()=>
    {
    const url=await axios.post("/api/auth/login",
    {
      email:details.email,
      password:details.password,
    })
    console.log(url.data.encodedToken)
    console.log( localStorage.getItem("token"))

  }
  let decider=Object.keys(details).length === 0
  if(decider==false)
  {
    loginHandler()
  }

}