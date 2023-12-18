const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Patient = require('./models/Patient');
const Encounter = require('./models/Encounter');
const Vitals = require('./models/Vitals');
const Diagnosis = require('./models/Diagnosis');

const patientController = require('./controllers/patientController');
const encounterController = require('./controllers/encounterController');
const vitalsController = require('./controllers/vitalsController');
const diagnosisController = require('./controllers/diagnosisController');

const app = express();
