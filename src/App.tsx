import { useEffect, useState } from "react";
import "./App.css";
import api from "./api";
import { seedLocalDatabase } from "./api/data/seed";

function App() {
  seedLocalDatabase();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/patients");
        setData(response.data);
        console.log("API Response:", response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>KinderClinic</h1>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}
export default App;
