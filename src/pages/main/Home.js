import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


function CustomCalender() {
    const headleDayCellContent = (arg) => {
        const dayNumber = arg.dayNumberText.replace("일", "");
        return dayNumber;
    };
    return (
        <>
            <a className="main-friend" href="#">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div class = "calendar">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth" // 처음 보이는 부분은 달
                    locale="ko" // 한국어 설정
                    // 상단의 핸들바
                    headerToolbar={{
                        left: "prev,next today", //이전달, 다음달
                        center: "title", //제목
                        right: "dayGridMonth,timeGridWeek,timeGridDay", //오늘
                    }}
                    buttonText={{ 
                    today: "현재날짜", // 오늘 버튼의 텍스트 
                    month: "월", // 월 버튼의 텍스트 
                    week: "주", // 주 버튼의 텍스트 
                    day: "일", // 일 버튼의 텍스트
                }} 
                    dayCellContent={headleDayCellContent}
                />
            </div>
        </>
    );
}

export default CustomCalender;