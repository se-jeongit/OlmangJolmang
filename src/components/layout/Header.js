import React from "react";

function Header() {
    return (
        <nav className="navbar">
            <div className="nav_logo">
                <a href="/home">올망졸망 캘린더</a>
            </div>

            <ul className="nav_menu">
                <li><a href="#top">알림</a></li>
                <li><a href="#top">이름</a></li>
                <li><a href="/login">로그인</a></li>
                <li><a href="#top">설정</a></li>
            </ul>
        </nav>
    );
}

export default Header;