import React from "react";
import './header.css'
import Image from "next/image";
import logo from "../../src/assest/LOGO_daisy.svg"
import icon from "../../src/assest/s.svg"
function Logo() {
    return(
     <Image src = { logo } alt = "Dojo Helpdesk logo" className = "logo" />)
}


function Nav() {
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>LookBook</li>
            <li>ContactUs</li>
        </ul>
    );
}



function Header() {
    return (
        <header>
            <Logo />
            <Nav />
            <div className="icon">
                <Image src={icon} alt="Dojo Helpdesk icon"  />
            </div>
            
        </header>
    );
}


export default Header;