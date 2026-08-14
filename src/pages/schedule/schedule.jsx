import { useState } from "react";

import DayTabs from "../../components/dayTabs/dayTabs";
import ScheduleEvents from "../../components/scheduleEvents/scheduleEvents";

import { schedule_data } from "../../mocks/shared-data";

import "./Schedule.css";

function Schedule() {
  const [selectedDay, setSelectedDay] = useState(
    schedule_data.days[0].id
  );

  const currentDay = schedule_data.days.find(
    (day) => day.id === selectedDay
  );

  return (
    <main className="schedule-page">

      {/* Your existing header/back button stays here */}

      <DayTabs
        days={schedule_data.days}
        selectedDay={selectedDay}
        onDayChange={setSelectedDay}
      />

      <ScheduleEvents
        events={currentDay.events}
      />

    </main>
  );
}

export default Schedule;