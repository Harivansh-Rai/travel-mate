import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export function Calendar({ onChange }: { onChange: (date: Date) => void }) {
  const [value, setValue] = useState(new Date());

  return (
    <ReactCalendar
      onChange={(date) => {
        setValue(date as Date);
        onChange(date as Date);
      }}
      value={value}
      className="border rounded-md"
    />
  );
}
