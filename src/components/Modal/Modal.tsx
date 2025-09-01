// import { useEffect } from "react";
import { FocusOn } from "react-focus-on";
import type { Patient } from "../../api/data/patients";
import "./Modal.css";

interface ModalProps {
  patient: Patient;
  onClose: () => void;
}

function Modal({ patient, onClose }: ModalProps) {
  // useEffect(() => {
  //   const handleEscapeKey = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") onClose();
  //   };
  //   if (patient) {
  //     document.addEventListener("keydown", handleEscapeKey);
  //   }
  //   return () => {
  //     document.removeEventListener("keydown", handleEscapeKey);
  //   };
  // }, [patient, onClose]);

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
          <div className="modal-body">{patient.firstName}</div>
        </div>
      </FocusOn>
    </div>
  );
}
export default Modal;
