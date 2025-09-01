import { useForm, type FieldValues } from "react-hook-form";
import DatePicker from "../DatePicker/DatePicker";
import RadioGroup from "../RadioGroup/RadioGroup";
import TextInput from "../TextInput/TextInput";
import "./PatientForm.css";
import { type PatientData } from "../../api/data/patients";

function PatientForm({
  onSubmit,
}: {
  onSubmit: (newPatient: PatientData) => void;
}) {
  const { register, handleSubmit } = useForm();
  const radioButtons = [
    { label: "Male", id: "male" },
    { label: "Female", id: "female" },
  ];

  const submitHandler = (data: FieldValues) => {
    onSubmit(data as PatientData);
    (document.getElementById("patientForm") as HTMLFormElement).reset();
  };

  return (
    <form
      id="patientForm"
      className="patient-form"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        {...register("firstName")}
        label="First name"
        name="firstName"
      />
      <TextInput {...register("lastName")} label="Last name" name="lastName" />
      <RadioGroup
        {...register("sex")}
        legend="Sex"
        radioName="sex"
        radioButtons={radioButtons}
      />
      <DatePicker {...register("dob")} label="Birthday" name="dob" />
      <button className="submit-button" type="submit">
        Add new patient
      </button>
    </form>
  );
}
export default PatientForm;
