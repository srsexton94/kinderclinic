import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPatientById, getPatients, postPatient } from "./patients";
import { createPatient } from "./data/patients";

const api = axios.create();
const adapter = new MockAdapter(api, { delayResponse: 1000 });

adapter.onGet("/api/patients/:id").reply(function (config) {
  const id = config?.url?.match(/\/api\/patients\/(\d+)/)![1] || "";
  const patient = getPatientById(id);
  if (!patient) {
    return [404, { message: "Patient not found" }];
  }
  return [200, patient];
});

adapter.onGet("/api/patients").reply(function () {
  const patients = getPatients();
  return [200, patients];
});

adapter.onPost("/api/patients").reply(function (config) {
  const patient = createPatient(JSON.parse(config.data));
  postPatient(JSON.parse(config.data));
  return [200, patient];
});

export default api;
