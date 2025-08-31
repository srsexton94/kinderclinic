import { useId } from "react";
import "./DatePicker.css";

function DatePicker({
  label = "Select Date",
  name,
}: {
  label?: string;
  name: string;
}) {
  const inputId = useId();

  return (
    <div className="date-picker">
      <label className="date-picker-label" htmlFor={inputId}>
        {label}:
      </label>
      <input type="date" id={inputId} name={name}></input>
    </div>
  );
}
export default DatePicker;
