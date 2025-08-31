import { useEffect, useState } from "react";
import "./App.css";
import api from "./api";
import { seedLocalDatabase } from "./api/data/seed";
import { type Patient } from "./api/data/patients";

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
        console.log("API Response:", response.data);
      } catch (err) {
        if (err instanceof Error) setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>An error occurred</p>;

  return (
    <>
      <h1>KinderClinic</h1>
      {isLoading ? <p>Loading...</p> : <pre>{JSON.stringify(patients)}</pre>}
    </>
  );
}
export default App;
