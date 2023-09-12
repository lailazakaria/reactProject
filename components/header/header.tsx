import React from "react";
import './header.css'
import Image from "next/image";
import logo from "../../src/assest/LOGO_daisy.svg"
import icon from "../../src/assest/s.svg"
import Link from "next/link";
function Logo() {
    return(
     <Image src = { logo } alt = "Dojo Helpdesk logo" className = "logo" />)
}


function Nav() {
    return (
        <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>

            
            
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