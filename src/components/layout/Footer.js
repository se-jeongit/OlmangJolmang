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
        
            <div><p>Copyright &copy; Your website 2025</p></div>
        </>
    );
}

export default Footer;