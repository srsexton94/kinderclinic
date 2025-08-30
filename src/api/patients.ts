import { createPatient, type Patient, type PatientData } from './data/patients';
import { getDatabaseTable, setDatabaseTable } from './helpers';

export const getPatientById = (id: string) => {
  const patients = getDatabaseTable('patients');
  if (!patients) {
    console.log('No patients table found');
    return;
  }
  return patients.find((patient: Patient) => patient.id === id);
};

export const getPatients = () => {
  const patients = getDatabaseTable('patients');
  if (!patients) {
    console.log('No patients table found');
    return;
  }
  return patients
};

export const postPatient = (data: PatientData): Patient | undefined => {
  const patients = getDatabaseTable('patients');
  if (!patients) {
    console.log('No patients table found');
    return;
  }
  const newPatient: Patient = createPatient(data)
  patients.push(newPatient);
  setDatabaseTable('patients', patients);
  return newPatient;
};
