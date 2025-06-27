import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons';

export function setTitle (title) {
    document.querySelector("title").innerHTML = title;
}

function Header() {
    return (
        <nav className="navbar">
            <div className="nav_logo">
                <a href="/"><img src={process.env.PUBLIC_URL + "favicon.ico"} alt = "logo"/></a>
            </div>

            <ul className="nav_menu">
                <li><a href="#top"><FontAwesomeIcon icon={faBell} /></a></li>
                <li><button><a href="#top">올망졸망</a></button></li>
                <li><button><a href="/login">로그아웃</a></button></li>
                <li><a href="#top"><FontAwesomeIcon icon={faGear}/></a></li>
            </ul>
        </nav>
    );
}

export default Header;