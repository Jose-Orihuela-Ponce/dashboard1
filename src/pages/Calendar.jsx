import { Header } from "../components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export default function Calendar() {
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    console.log(calendarApi);
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <div>
        <FullCalendar
          height="65vh"
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          eventClick={(e) => {
            console.log({
              title: e.event.title,
              start: e.event.start,
              end: e.event.end,
            });
          }}
          select={handleDateClick}
          dateClick={() => {}}
          eventsSet={() => {}}
          dayMaxEvents={true}
          editable={true}
          selectable={true}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2023-07-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2023-07-28",
            },
          ]}
        />
      </div>
    </div>
  );
}
