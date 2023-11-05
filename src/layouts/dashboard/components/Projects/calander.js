import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalanderPick = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="calendar-picker">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
      />
    </div>
  );
};

export default CalanderPick;
