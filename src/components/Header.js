import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const [loggedIn, setLoggedIn] = useState("Login")
    const onlineStatus = useOnlineStatus()

    return(
        <div className="flex border border-black mt-2 mx-2">
            <div className="flex grow-0">
                <img className="w-52" src={LOGO_URL}/>
            </div>
            <div className="flex items-center grow justify-center">
                <ul className="flex">
                    <li className="px-4 text-md font-semibold">{onlineStatus ? "Active 🟢" : "Offline 🔴"}</li>
                    <li className="px-4 text-md font-semibold"><Link to='/'>Home</Link></li>
                    <li className="px-4 text-md font-semibold"><Link to='/about'>About</Link></li>
                    <li className="px-4 text-md font-semibold"><Link to='/contact'>Contact</Link></li>
                    <li className="px-4 text-md font-semibold"><Link to='/cart'>Cart</Link></li>
                    <li className="px-4 text-md font-semibold"><Link to='/grocery'>Grocery</Link></li>
                </ul>
            </div>
            <div className="flex items-center grow-0 mx-4">
            <button className="border border-black rounded-md px-3 py-1 font-semibold bg-yellow-400" onClick={() => {
                loggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login") 
            }}>{loggedIn}</button>
            </div>
        </div>
    )
}

export default Header