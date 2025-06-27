import React, { useRef, useEffect, useState  } from 'react';
import Sidebar from "../../components/layout/Sidebar";
import Event from '../../components/layout/Event';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import getHolidays from '../../components/layout/Holiday';


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

    // 일정추가 
    const [events, setEvents] = useState([]);  // 초기에는 일정 없음

    const [newEvent, setNewEvent] = useState({
        content_title : "",
        description : "",
        location : "",
        startDate : "",
        endDate : "",
        startTime : "00:00",
        endTime : "00:00",
        allDay : false,
    });

    const handleSave = () => {
        const event = {
            title : `${newEvent.content_title} - ${newEvent.description}`,
            start : newEvent.start,
            end : newEvent.end,
            location : newEvent.location
        };
        setEvents(prev => [...prev, event]);
        setNewEvent({content_title: "", description: "", location: "", start : "", end: ""});
        setModalOpen(false); // 저장 후 모달 닫기
    };

    // 공휴일
    const [loadedYears, setLoadedYears] = useState(new Set());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handleDatesSet = (arg) => {
        const year = arg.start.getFullYear();
        setCurrentYear(year);  // 단순히 현재 연도 상태만 업데이트
      };

      const eventsRef = useRef(events);
      const loadedYearsRef = useRef(loadedYears);
    
      useEffect(() => {
        eventsRef.current = events;
      }, [events]);
    
      useEffect(() => {
        loadedYearsRef.current = loadedYears;
      }, [loadedYears]);
    
      useEffect(() => {
        if (loadedYearsRef.current.has(currentYear)) return;
    
        (async () => {
          const holidays = await getHolidays(currentYear);
    
          const existingEventKeys = new Set(eventsRef.current.map(e => e.title + e.start));
    
          const newHolidays = holidays.filter(h => !existingEventKeys.has(h.title + h.start));
    
          setEvents(prev => [...prev, ...newHolidays]);
          setLoadedYears(prev => {
            const newSet = new Set(prev);
            newSet.add(currentYear);
            return newSet;
          });
        })();
      }, [currentYear]);
    
    // 모달
    const [ modalOpen, setModalOpen ] = useState(false);

    const handleDateClick  = (arg) => {
        // 클릭한 날짜를 시작일과 종료일로 초기값 지정
        setNewEvent({
            ...newEvent,
            start : arg.dateStr,
            end : arg.dateStr
        });
        setModalOpen(true);
    };

    // 드롭다운
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
        <>
            <Event
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                setEvents={setEvents}
                handleSave={handleSave}
            />

            <div className='main-container'>
                <div className='wrap_manager'>
                    <Sidebar/>
                </div>

                <div className="calendar">
                    <FullCalendar
                        height={921}
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        navLinks={true}
                        editable={true}
                        selectable={true}
                        nowIndicator={true}
                        dayMaxEvents={true}
                        locale={"ko"}
                        events={events}
                        datesSet={handleDatesSet}   // 뷰/날짜 변경 시 호출
                        dateClick={handleDateClick }
                        customButtons={{
                            customDropdown: {
                                text: '', // select로 대체할 거라 text는 비워둠
                                click: () => {}
                            },
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
            </div>
        </>
    );
}

export default CustomCalender;