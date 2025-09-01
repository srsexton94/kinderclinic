import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/kinderclinic-logo.png";
import api from "./api";
import { seedLocalDatabase } from "./api/data/seed";
import {
  type Appointment,
  type Patient,
  type PatientData,
} from "./api/data/patients";
import PatientList from "./components/PatientList/PatientList";
import SkeletonScreen from "./components/SkeletonScreen/SkeletonScreen";
import PatientForm from "./components/PatientForm/PatientForm";

seedLocalDatabase();

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await api.get("/api/patients");
      setPatients(response.data.reverse());
    } catch (err) {
      if (err instanceof Error) setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const postData = async (data: PatientData) => {
    api
      .post("/api/patients", { ...data, dob: new Date(data.dob) })
      .catch((err) => setError(err));
  };

  const putData = async (patient: Patient, newAppointment: Appointment) => {
    api
      .put("/api/patients", {
        ...patient,
        dob: new Date(patient.dob),
        appointments: [...patient.appointments!, newAppointment],
      })
      .catch((err) => setError(err));
  };

  const handleSubmit = (data: PatientData) => {
    setIsLoading(true);
    postData(data);
    fetchData();
  };

  const onCreateAppointment = (
    patient: Patient,
    newAppointment: Appointment
  ) => {
    setIsLoading(true);
    putData(patient, newAppointment);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <img className="logo" src={logo} alt="Kinder Clinic Logo" />
      {isLoading ? (
        <SkeletonScreen />
      ) : (
        <>
          <PatientForm onSubmit={handleSubmit} />
          <PatientList
            patients={patients}
            onCreateAppointment={onCreateAppointment}
          />
        </>
      )}
    </>
  );
}
export default App;
