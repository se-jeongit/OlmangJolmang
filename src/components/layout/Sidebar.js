import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

  const [isTodayOpen, setIsTodayOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isSharedOpen, setIsSharedOpen] = useState(false);
  const [isFriendOpen, setIsFriendOpen] = useState(false);

  return (
      <>
        {/* 오늘의 일정 */}
        <div className="wrap_today">
          <button className="btn_section" onClick={() => setIsTodayOpen(prev => !prev)}>
            오늘의 일정
            <span className="ico_toggle">
              <FontAwesomeIcon icon={isTodayOpen ? faCaretUp : faCaretDown} />
            </span>
          </button>
          {isTodayOpen && (
            <div className="today_li">
              <input type="checkbox" id="today_list" name="today_list" />
              <label htmlFor="today_list">공부하기</label>
            </div>
          )}
        </div>

        {/* 이달의 일정 */}
        <div className="wrap_month">
          <button className="btn_section" onClick={() => setIsMonthOpen(prev => !prev)}>
            이달의 일정
            <span className="ico_toggle">
              <FontAwesomeIcon icon={isMonthOpen ? faCaretUp : faCaretDown} />
            </span>
          </button>
          {isMonthOpen && (
            <ul className="month_li">
              <li>6월 15일: 병원 방문</li>
              <li>6월 16일: 헬스장</li>
            </ul>
          )}
        </div>

        {/* 공유된 일정 */}
          <div className="wrap_shared">
            <button className="btn_section" onClick={() => setIsSharedOpen(prev => !prev)}>
              공유된 일정
              <span className="ico_toggle">
                <FontAwesomeIcon icon={isSharedOpen ? faCaretUp : faCaretDown} />
              </span>
            </button>
            {isSharedOpen && (
              <ul className="shared_li">
                <li>6월 20일: 프로젝트 마감</li>
              </ul>
            )}
        </div>

        {/* 친구목록 */}
        <div className="wrap_friend">
          <button className="btn_section" onClick={() => setIsFriendOpen(prev => !prev)}>
            친구목록
            <span className="ico_toggle">
              <FontAwesomeIcon icon={isFriendOpen ? faCaretUp : faCaretDown} />
            </span>
          </button>
          {isFriendOpen && (
            <ul className="friend_li">
              <li>올망졸망</li>
            </ul>
          )}
        </div>
      </>
  );
}

export default Sidebar;
