import { useContext } from "react"
import { MainContext } from "../DataProviders/MainReducer";
import { FuncContext } from "../DataProviders/FuncCall";
export function Profile1()
{
    const {ProfileDetails}=useContext(MainContext)
    const {logoutUser}=useContext(FuncContext)
    return(<div>
        <header>
            THis is profile
        </header>
            <div>
                <h1>My Account</h1>
                <div>
                   <p>Name: <span>{ProfileDetails.fName}</span></p>
                   <p>Username: <span>{ProfileDetails.userName}</span></p>
                   <button onClick={()=>logoutUser()}>Log out</button>
                </div>
                
            </div>
    </div>)
}