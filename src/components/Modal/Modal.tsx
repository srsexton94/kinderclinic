import { FocusOn } from "react-focus-on";
import type { Appointment, Patient } from "../../api/data/patients";
import "./Modal.css";
import { useForm, type FieldValues } from "react-hook-form";
import RadioGroup from "../RadioGroup/RadioGroup";
import DatePicker from "../DatePicker/DatePicker";

interface ModalProps {
  patient: Patient;
  onClose: () => void;
  onSubmit: (data: Appointment) => void;
}

function Modal({ patient, onClose, onSubmit }: ModalProps) {
  const { register, handleSubmit } = useForm();

  const radioButtons = [
    { label: "Well", id: "well" },
    { label: "Sick", id: "sick" },
  ];

  const submitHandler = (data: FieldValues) => {
    onSubmit(data as Appointment);
    (document.getElementById("appointmentForm") as HTMLFormElement).reset();
  };
  
  return (
    <div id="guessModal" className="modal-backdrop">
      <FocusOn onClickOutside={onClose} onEscapeKey={onClose}>
        <div className="modal" role="dialog" aria-modal="true">
          <button
            className="modal-close"
            aria-label="Close modal"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="modal-body">
            <h3>
              Would you like to make an appointment for {patient.firstName}{" "}
              {patient.lastName}?
            </h3>
            <form
              id="appointmentForm"
              className="appointment-form"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="inputs">
                <DatePicker
                  {...register("datetime")}
                  name="datetime"
                  label="Appointment day and time"
                  includeTime={true}
                />
                <RadioGroup
                  {...register("reason")}
                  legend="Reason"
                  radioName="reason"
                  radioButtons={radioButtons}
                />
              </div>
              <button className="submit-button" type="submit">
                Create appointment
              </button>
            </form>
          </div>
        </div>
      </FocusOn>
    </div>
  );
}
export default Modal;
