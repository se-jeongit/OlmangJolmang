import "../../styles/friend.css";
import React from "react";

function FriendWrite() {
    return(
        <div className="container">

            <div className="title">
                <h3> 친구 관리 </h3>
            </div>

            <input className="friendSearch" type="search" placeholder="친구검색"></input>

        </div>
    );
}

export default FriendWrite;