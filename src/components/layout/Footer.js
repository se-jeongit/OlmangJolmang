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
                <div className="footer-main">
                    <a href="/" className="item">공지사항</a>
                    <a href="/" className="item">자주 묻는 질문</a>
                    <a href="/" className="item">문의하기</a>
                </div>
                <div className="line"></div>
                <div className="footer-info">
                    {/* <button type="button" className="name">
                        올망졸망캘린더
                        <span className="button-arrow"></span>
                    </button> */}
                    <p>Copyright 2025. OlmangJolmang, Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;