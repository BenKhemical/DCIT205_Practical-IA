const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Patient = require("./models/Patient");
const Encounter = require("./models/Encounter");
const Vitals = require("./models/Vitals");
const Diagnosis = require("./models/Diagnosis");

const patientController = require("./controllers/patientController");
const encounterController = require("./controllers/encounterController");
const vitalsController = require("./controllers/vitalsController");
const diagnosisController = require("./controllers/diagnosisController");

mongoose
  .connect("mongodb://localhost/healthdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use(bodyParser.json());

app.get("/patients", patientController.getPatients);
app.get("/patients/:id", patientController.getPatientById);
app.post("/patients", patientController.createPatient);
app.put("/patients/:id", patientController.updatePatient);
app.delete("/patients/:id", patientController.deletePatient);

app.get("/encounters", encounterController.getEncounters);
app.get("/encounters/:id", encounterController.getEncounterById);
app.post("/encounters", encounterController.createEncounter);
app.put("/encounters/:id", encounterController.updateEncounter);
app.delete("/encounters/:id", encounterController.deleteEncounter);

app.get("/vitals", vitalsController.getVitals);
app.get("/vitals/:id", vitalsController.getVitalById);
app.post("/vitals", vitalsController.createVital);
app.put("/vitals/:id", vitalsController.updateVital);
app.delete("/vitals/:id", vitalsController.deleteVital);

const app = express();
