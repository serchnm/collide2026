import { useState } from "react";
import DayTabs from "../../components/dayTabs/dayTabs";
import ScheduleEvents from "../../components/scheduleEvents/scheduleEvents";
import PreviousNavigation from '../../components/previousNavigation/previousNavigation';
import BottomNavigation from '../../components/bottomNavigation/bottomNavigation';
import { schedule_data } from "../../mocks/shared-data";
import "./schedule.css";

function Schedule() {
  const [selectedDay, setSelectedDay] = useState(
    schedule_data.days[0].id
  );

  const currentDay = schedule_data.days.find(
    (day) => day.id === selectedDay
  );

  return (
    <main className="schedule-container">
      <PreviousNavigation />
      <div className="schedule-label">
        <span>// The Schedule</span>
        <h1>3 Days</h1>
      </div>
      <DayTabs
        days={schedule_data.days}
        selectedDay={selectedDay}
        onDayChange={setSelectedDay}
      />
      <ScheduleEvents
        events={currentDay.events}
      />
      <BottomNavigation />
    </main>
  );
}

export default Schedule;