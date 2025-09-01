import { useId } from "react";
import "./DatePicker.css";

interface DatePickerProps {
  name: string;
  includeTime?: boolean;
  label?: string;
}

function DatePicker({
  label = "Select Date",
  includeTime = false,
  name,
  ...props
}: DatePickerProps) {
  const inputId = useId();

  return (
    <div className="date-picker">
      <label className="date-picker-label" htmlFor={inputId}>
        {label}:
      </label>
      <input
        type={includeTime ? "datetime-local" : "date"}
        id={inputId}
        name={name}
        {...props}
      ></input>
    </div>
  );
}
export default DatePicker;
