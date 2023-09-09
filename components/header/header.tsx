import React from "react";
import './header.css'
function Logo() {
    return(
    <div className="logo">
        <div>HAUS GROUP</div>
    </div>)
}


function Nav() {
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Journal</li>
            <li>Contact</li>
        </ul>
    );
}
function Button() {
    return (
        <div className="btn">
            <button>Talk to agent</button>
        </div>
    )
}


function Header() {
    return (
        <header>
            <Logo />
            <Nav />
            <Button/>
        </header>
    );
}


export default Header;