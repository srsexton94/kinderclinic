import { type Patient } from "./data/patients";
import { getDatabaseTable, setDatabaseTable } from "./helpers";

export const getPatientById = (id: string) => {
  const patients = getDatabaseTable("patients");
  if (!patients) {
    console.log("No patients table found");
    return;
  }
  return patients.find((patient: Patient) => patient.id === id);
};

export const getPatients = () => {
  const patients = getDatabaseTable("patients");
  if (!patients) {
    console.log("No patients table found");
    return;
  }
  return patients;
};

export const postPatient = (newPatient: Patient): Patient | undefined => {
  const patients = getDatabaseTable("patients");
  if (!patients) {
    console.log("No patients table found");
    return;
  }
  patients.push(newPatient);
  setDatabaseTable("patients", patients);
  return newPatient;
};

export const putPatient = (modifiedPatient: Patient): Patient | undefined => {
  const patients = getDatabaseTable("patients");
  if (!patients) {
    console.log("No patients table found");
    return;
  }
  const patientIdx = patients.findIndex(
    (patient: Patient) => patient.id === modifiedPatient.id
  );
  patients[patientIdx].appointments = modifiedPatient.appointments;
  patients[patientIdx].modifiedAt = new Date();
  setDatabaseTable("patients", patients);
  return patients[patientIdx];
};
