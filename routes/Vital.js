const mongoose = require('mongoose');

const VitalsSchema = new mongoose.Schema({
    patientId: Number,
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spO2: String
});

module.exports = mongoose.model('Vitals', VitalsSchema);