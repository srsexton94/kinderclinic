export interface Appointment {
  datetime: Date;
  reason: "well" | "sick";
}

export interface PatientData {
  firstName: string;
  lastName: string;
  sex: "male" | "female";
  dob: Date;
  appointments?: Appointment[];
}

export interface Patient extends PatientData {
  id: string,
  createdAt: Date,
  modifiedAt: Date,
}

export const createPatient = ({
  firstName,
  lastName,
  sex,
  dob,
  appointments,
}: PatientData): Patient => {
  return {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    sex,
    dob,
    appointments: appointments || [],
    createdAt: new Date(),
    modifiedAt: new Date(),
  };
};

export const patients = [
  createPatient({
    firstName: "Liam",
    lastName: "Johnson",
    sex: "male",
    dob: new Date("2017-05-14"),
    appointments: [
      { datetime: new Date("2023-08-10T09:00:00"), reason: "well" },
      { datetime: new Date("2024-09-05T14:30:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Olivia",
    lastName: "Martinez",
    sex: "female",
    dob: new Date("2015-09-21"),
    appointments: [
      { datetime: new Date("2022-12-15T10:00:00"), reason: "well" },
    ],
  }),
  createPatient({
    firstName: "Noah",
    lastName: "Smith",
    sex: "male",
    dob: new Date("2020-01-03"),
  }),
  createPatient({
    firstName: "Emma",
    lastName: "Brown",
    sex: "female",
    dob: new Date("2012-07-19"),
    appointments: [
      { datetime: new Date("2024-07-11T11:00:00"), reason: "well" },
      { datetime: new Date("2024-10-20T16:00:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Ethan",
    lastName: "Lee",
    sex: "male",
    dob: new Date("2018-03-09"),
    appointments: [
      { datetime: new Date("2023-03-22T13:00:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Ava",
    lastName: "Davis",
    sex: "female",
    dob: new Date("2016-12-02"),
  }),
  createPatient({
    firstName: "Lucas",
    lastName: "Garcia",
    sex: "male",
    dob: new Date("2019-11-27"),
    appointments: [
      { datetime: new Date("2023-09-01T09:30:00"), reason: "well" },
      { datetime: new Date("2024-11-15T15:00:00"), reason: "well" },
    ],
  }),
  createPatient({
    firstName: "Sophia",
    lastName: "Miller",
    sex: "female",
    dob: new Date("2014-04-15"),
    appointments: [
      { datetime: new Date("2024-03-14T10:00:00"), reason: "well" },
    ],
  }),
  createPatient({
    firstName: "James",
    lastName: "Wilson",
    sex: "male",
    dob: new Date("2013-06-07"),
  }),
  createPatient({
    firstName: "Isabella",
    lastName: "Anderson",
    sex: "female",
    dob: new Date("2021-10-23"),
    appointments: [
      { datetime: new Date("2024-02-18T14:00:00"), reason: "well" },
      { datetime: new Date("2024-06-05T09:15:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Benjamin",
    lastName: "Thomas",
    sex: "male",
    dob: new Date("2011-02-11"),
    appointments: [
      { datetime: new Date("2023-04-20T13:00:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Mia",
    lastName: "Moore",
    sex: "female",
    dob: new Date("2018-08-30"),
  }),
  createPatient({
    firstName: "Alexander",
    lastName: "Taylor",
    sex: "male",
    dob: new Date("2016-05-05"),
    appointments: [
      { datetime: new Date("2022-11-10T11:00:00"), reason: "well" },
      { datetime: new Date("2024-12-01T09:45:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Charlotte",
    lastName: "Hernandez",
    sex: "female",
    dob: new Date("2019-09-18"),
    appointments: [
      { datetime: new Date("2024-01-30T16:30:00"), reason: "sick" },
    ],
  }),
  createPatient({
    firstName: "Henry",
    lastName: "White",
    sex: "male",
    dob: new Date("2014-12-12"),
  }),
];
