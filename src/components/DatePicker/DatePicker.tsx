import { useId } from "react";
import "./DatePicker.css";

function DatePicker({
  label = "Select Date",
  name,
  ...props
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
      <input type="date" id={inputId} name={name} {...props}></input>
    </div>
  );
}
export default DatePicker;
