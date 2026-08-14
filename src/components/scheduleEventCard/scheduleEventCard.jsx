import { Star } from "lucide-react";

import "./scheduleEventCard.css";

function ScheduleEventCard({
  time,
  title,
  featured = false,
}) {
  return (
    <article
      className={`schedule-event-card ${
        featured ? "featured" : ""
      }`}
    >
      <div className="schedule-event-content">
        <span className="schedule-event-time">
          {time}
        </span>

        <h2>{title}</h2>
      </div>
    </article>
  );
}

export default ScheduleEventCard;