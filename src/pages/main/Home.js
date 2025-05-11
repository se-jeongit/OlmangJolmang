import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

function CustomCalender() {
    const calendarRef = useRef(null);

    const handleViewChange = (e) => {
        const view = e.target.value;
        const calendarApi = calendarRef.current.getApi();
        calendarApi.changeView(view);
    };

    const handleDayCellContent = (arg) => {
        const dayNumber = arg.dayNumberText.replace("일", "");
        return dayNumber;
    };

    useEffect(() => {
        // headerToolbar에 드롭다운 select 엘리먼트 삽입
        const dropdownContainer = document.querySelector('.fc-toolbar-chunk .fc-customDropdown-button');
        if (dropdownContainer) {
            const select = document.createElement('select');
            select.style.padding = '4px';
            select.onchange = handleViewChange;

            const options = [
                { value: 'dayGridMonth', text: '월' },
                { value: 'timeGridWeek', text: '주' },
                { value: 'timeGridDay', text: '일' },
                { value: 'listWeek', text: '일정목록' }
            ];

            options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.value;
                option.text = opt.text;
                select.appendChild(option);
            });

            dropdownContainer.innerHTML = ''; // 초기 버튼 텍스트 제거
            dropdownContainer.appendChild(select);
        }
    }, []);

    return (
        <div className="calendar">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                initialView="dayGridMonth"
                navLinks={true}
                editable={true}
                selectable={true}
                nowIndicator={true}
                dayMaxEvents={true}
                locale={"ko"}
                customButtons={{
                    customDropdown: {
                        text: '', // select로 대체할 거라 text는 비워둠
                        click: () => {}
                    },
                    barButton: {
                        text: '일정',
                        click: () => {
                        alert('Bar 버튼 클릭!');
                        }
                    }
                }}
                headerToolbar={{
                    left: "prev next today barButton",
                    center: "title",
                    right: "customDropdown" // 드롭다운을 custom 버튼으로 넣기
                }}
                buttonText={{
                    today: "오늘",
                    month: "월",
                    week: "주",
                    day: "일",
                    list: "일정목록"
                }}
                dayCellContent={handleDayCellContent}
            />
        </div>
    );
}

export default CustomCalender;
