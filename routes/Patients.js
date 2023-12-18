const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patientId: Number,
    surname: String,
    othernames: String,
    gender: String,
    phoneNumber: String,
    realidentialAddress: String,
    emergencyName: String,
    emergencyContact: String,
    relationshipWithPatient: String
});

module.exports = mongoose.model('Patient', PatientSchema);