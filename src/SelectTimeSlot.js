import React, { useState } from 'react';
// import Calendar from 'react-big-calendar';
import moment from 'moment';
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import "react-big-calendar/lib/css/react-big-calendar.css";
// Calendar.momentLocalizer(moment);
const localizer = globalizeLocalizer(globalize);
const availableTimeSlots = [
  {
    start: new Date(2020, 1, 1, 9, 0),
    end: new Date(2020, 1, 1, 9, 30)
  },
  {
    start: new Date(2020, 1, 1, 10, 0),
    end: new Date(2020, 1, 1, 10, 30)
  },
  {
    start: new Date(2020, 1, 1, 11, 0),
    end: new Date(2020, 1, 1, 11, 30)
  }
];

const SelectTimeSlot = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const handleSelectEvent = timeSlot => {
    setSelectedTimeSlot(timeSlot);
  };
  return (
    <div style={{ height: '500px' }}>
      <Calendar
        events={availableTimeSlots}
        defaultDate={new Date()}
        onSelectEvent={handleSelectEvent}
        localizer={localizer}
      />
      {selectedTimeSlot && (
        <p>
          Selected time slot: {selectedTimeSlot.start.toString()} to{' '}
          {selectedTimeSlot.end.toString()}
        </p>
      )}
    </div>
  );
};

export default SelectTimeSlot;
