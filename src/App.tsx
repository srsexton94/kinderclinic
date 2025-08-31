import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/kinderclinic-logo.png";
import api from "./api";
import { seedLocalDatabase } from "./api/data/seed";
import { type Patient } from "./api/data/patients";
import PatientList from "./components/PatientList/PatientList";

seedLocalDatabase();

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/patients");
        setPatients(response.data);
      } catch (err) {
        if (err instanceof Error) setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <img className="logo" src={logo} alt="Kinder Clinic Logo" />
      {isLoading ? <p>Loading...</p> : <PatientList patients={patients} />}
    </>
  );
}
export default App;
