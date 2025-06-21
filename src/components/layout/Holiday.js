import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KRY;
console.log("API_KEY : ", API_KEY);
const CALENDAR_ID = encodeURIComponent("ko.south_korea#holiday@group.v.calendar.google.com");

const getHolidays = async (year) => {
    const timeMin = `${year}-01-01T00:00:00Z`;
    const timeMax = `${year}-12-31T23:59:59Z`;

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

    try {
        const response = await axios.get(url);
        console.log("API 응답 데이터:", response.data);
        const holidays = response.data.items.map(event => ({
            title: event.summary,
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            color: "#FF6B6B",
            allDay: true
        }));
        console.log('받아온 공휴일:', holidays);
        return holidays;
    } catch (error) {
        console.error("공휴일 불러오기 실패 : ", error);
        return [];
    }
};

export default getHolidays;
