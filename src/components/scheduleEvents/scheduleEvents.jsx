import ScheduleEventCard from "../../components/scheduleEventCard/scheduleEventCard";

import "./ScheduleEvents.css";

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