import "./RadioGroup.css";

interface RadioGroupProps {
  legend: string;
  radioName: string;
  radioButtons: { label: string; id: string }[];
  isHorizontal?: boolean;
}

function RadioGroup({
  legend,
  radioName,
  radioButtons,
  isHorizontal = true,
  ...props
}: RadioGroupProps) {
  return (
    <fieldset className={`radio-fieldset ${isHorizontal && "horizontal"}`}>
      <legend>{legend}:</legend>
      {radioButtons.map((button, i) => (
        <div key={`radio-${button.id}`}>
          <input
            type="radio"
            id={button.id}
            name={radioName}
            value={button.label.toLocaleLowerCase()}
            defaultChecked={i === 0}
            {...props}
          />
          <label className="radio-label" htmlFor={button.id}>
            {button.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
}
export default RadioGroup;
