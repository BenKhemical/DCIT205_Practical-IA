const mongoose = require('mongoose');

const DiagnosisSchema = new mongoose.Schema({
    patientId: Number,
    diagnosis: String,
    prescription: String,
    testResults: String
});

module.exports = mongoose.model('Diagnosis', DiagnosisSchema);