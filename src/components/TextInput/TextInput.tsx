import { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./TextInput.css";

interface TextInputProps {
  label: string;
  name: string;
  errorText?: string;
  helpText?: string;
  type?: "text" | "password";
  isFull?: boolean;
}

function TextInput({
  label,
  name,
  errorText,
  helpText,
  type = "text",
  isFull = false,
  ...props
}: TextInputProps) {
  const inputId = useId();
  const helpId = useId();
  const errorId = useId();
  const descriptors = `${helpText ? helpId : ""} ${errorText ? errorId : ""}`;

  return (
    <div>
      <div className="container">
        <input
          id={inputId}
          aria-describedby={descriptors}
          aria-invalid={!!errorText}
          className={isFull ? "full" : ""}
          placeholder=" "
          type={type}
          name={name}
          {...props}
        />
        <label className="text-input-label" htmlFor={inputId}>
          {label}
        </label>
      </div>
      {errorText && (
        <span id={errorId} className="error">
          <FontAwesomeIcon icon={faCircleExclamation} />
          {errorText}
        </span>
      )}
      {helpText && (
        <span id={helpId} className="help">
          {helpText}
        </span>
      )}
    </div>
  );
}

export default TextInput;
