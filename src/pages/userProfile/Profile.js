import { useContext } from "react"
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
import { NavBar } from "../../components/navBar/nav";
import "./profile.css"
export function Profile1()
{
    const {ProfileDetails}=useContext(MainContext)
    const {logoutUser}=useContext(FuncContext)
    return(<div>
        <NavBar></NavBar>
       
            <div className="userDetails">
                <h1>My Account</h1>
                <div>
                   <p>First Name: <span>{ProfileDetails.fName}</span></p>
                   <p>Last Name: <span>{ProfileDetails.lName}</span></p>
                   <p>Username: <span>{ProfileDetails.userName}</span></p>
                   <button onClick={()=>logoutUser()}>Log out</button>
                </div>
                
            </div>
    </div>)
}