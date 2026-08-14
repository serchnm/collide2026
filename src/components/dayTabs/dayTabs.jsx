import "./dayTabs.css";

function dayTabs({ days, selectedDay, onDayChange }) {
  return (
    <div className="day-tabs">
      {days.map((day) => (
        <button
          key={day.id}
          className={`day-tab ${
            selectedDay === day.id ? "active" : ""
          }`}
          onClick={() => onDayChange(day.id)}
        >
          <span className="day-tab-name">
            {day.day}
          </span>

          <span className="day-tab-date">
            {day.date}
          </span>
        </button>
      ))}
    </div>
  );
}

export default dayTabs;