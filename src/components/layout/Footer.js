import React from "react";

function Footer() {
    return (
        /* loading */
        <>
            <div id="loadingLayout">
                <div className="loader typing-indicator">
                    <div className="typing-circle"></div>
                    <div className="typing-circle"></div>
                    <div className="typing-circle"></div>
                    <div className="typing-shadow"></div>
                    <div className="typing-shadow"></div>
                    <div className="typing-shadow"></div>
                </div>
            </div>
        
            {/* footer */}
            <div className="layout-footer">
                <p>Copyright 2025. Ollmangjolmang, Co., Ltd. All rights reserved.</p>
                <ul className="list_service">
                    <li><a className="link_txt" href="/">공지사항</a></li>
                    <li><a className="link_txt" href="/">자주 묻는 질문</a></li>
                    <li><a className="link_txt" href="/">문의하기</a></li>
                </ul>
            </div>
        </>
    );
}

export default Footer;