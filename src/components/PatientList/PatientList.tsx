import type { Patient } from "../../api/data/patients";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientList.css";

function PatientList({ patients }: { patients: Patient[] }) {
  return (
    <ul className="list">
      {patients.map((patient) => (
        <li key={patient.id}>
          <PatientCard patient={patient} />
        </li>
      ))}
    </ul>
  );
}
export default PatientList;
