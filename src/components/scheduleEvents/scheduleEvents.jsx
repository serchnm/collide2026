import ScheduleEventCard from "../../components/scheduleEventCard/scheduleEventCard";

import "./scheduleEvents.css";

function ScheduleEvents({ events }) {
  return (
    <section className="schedule-events">
      {events.map((event) => (
        <ScheduleEventCard
          key={event.id}
          {...event}
        />
      ))}
    </section>
  );
}

export default ScheduleEvents;