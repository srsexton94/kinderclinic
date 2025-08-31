import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import type { Appointment, Patient } from "../../api/data/patients";
import "./PatientCard.css";

function PatientCard({ patient }: { patient: Patient }) {
  const age: number =
    new Date().getFullYear() - new Date(patient.dob).getFullYear();
  const upcomingAppointments: Appointment[] =
    patient.appointments?.filter(
      (appt) => new Date(appt.datetime) > new Date()
    ) || [];

  return (
    <div className="card">
      <h2 className="patient-name">
        {patient.lastName}, {patient.firstName}
      </h2>
      <p>
        {age}, {patient.sex}
      </p>
      {upcomingAppointments && (
        <ul className="upcoming-appointments">
          {upcomingAppointments.map((appointment) => (
            <li key={`${patient.id}-${appointment.datetime}`}>
              <FontAwesomeIcon icon={faCalendarDays} />
              {appointment.reason}:{" "}
              {new Date(appointment.datetime).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
      <button className="appointment-button" aria-label="Add appointment">+</button>
    </div>
  );
}
export default PatientCard;
