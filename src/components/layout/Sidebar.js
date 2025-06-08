import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
      <>
          <div className="wrap_today">
            오늘의 일정
            <div className="today_li">
              <input type="checkbox" id="today_list" name="today_list"/>
              <label for = "today_list">공부하기</label>
            </div>
          </div>
          <div className="wrap_month">
            이달의 일정
          </div>
          <div className="wrap_shared">
              공유된 일정
          </div>
          <div className="wrap_friend">
            <button className="btn_friend" aria-expanded = "false">
              친구목록
              {/* <span className="ico_toggle"><FontAwesomeIcon icon={faCaretDown} /></span> */}
            </button>
            
          </div>

      </>
  );
}

export default Sidebar;
