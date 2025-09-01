import type { Appointment, Patient } from "../../api/data/patients";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientList.css";

interface PatientListProps {
  patients: Patient[];
  onCreateAppointment: (patient: Patient, newAppointment: Appointment) => void;
}

function PatientList({ patients, onCreateAppointment }: PatientListProps) {
  return (
    <ul className="list">
      {patients.map((patient) => (
        <li key={patient.id}>
          <PatientCard
            patient={patient}
            onCreateAppointment={onCreateAppointment}
          />
        </li>
      ))}
    </ul>
  );
}
export default PatientList;
