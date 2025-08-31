import DatePicker from "../DatePicker/DatePicker";
import RadioGroup from "../RadioGroup/RadioGroup";
import TextInput from "../TextInput/TextInput";
import "./PatientForm.css";

function PatientForm() {
  const radioButtons = [
    { label: "Male", id: "male" },
    { label: "Female", id: "female" },
  ];

  return (
    <form className="patient-form">
      <TextInput label="First name" />
      <TextInput label="Last name" />
      <RadioGroup legend="Sex" radioName="sex" radioButtons={radioButtons} />
      <DatePicker label="Birthday" name="date-of-birth" />
      <button className="submit-button">Add new patient</button>
    </form>
  );
}
export default PatientForm;
