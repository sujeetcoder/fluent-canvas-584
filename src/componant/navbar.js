import nav_sec from "../img/nav_sec.png"
import search from "../img/search.png"
import {Link} from "react-router-dom"
import "../App.css"

export default function  Navbar(){
    return (
        <div className="navbar">
            <div className="nav1" >
            <img className="nav_image" src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg" alt="h" />
            <img className="nav_sec" src={nav_sec} alt="h" />
            </div>
            <Link className="hi" to="/" > <p>Home</p>  </Link>
            <p>Bangluru</p>
            <p>Karnatka</p>
            <p>National</p>
            <p>Sport</p>
            <p>Bussines</p>
            <p>Opinion</p>
            <p>Features</p>
            <div className="newslatter" >
                <p>New</p>
                <p>NewsLatters</p>
            </div>
            <div>
                <img className="search" src={search} alt="search" />
            </div>


        </div>
    )
}