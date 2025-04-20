import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <nav className = "navbar">
            <div className = "nav_logo">
                <a href = "#top">올망졸망 캘린더</a>
            </div>

            <ul className = "nav_menu">
                <li><a href = "#top"><FontAwesomeIcon icon={faBell} /></a></li>
                <li><button><a href = "#top">올망졸망</a></button></li>
                <li><button><a href = "/login">로그인</a></button></li>
                <li><a href = "#top"><FontAwesomeIcon icon={faGear} /></a></li>
            </ul>
        </nav>
    );
}

export default Header;