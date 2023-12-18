const mongoose = require('mongoose');

const EncounterSchema = new mongoose.Schema({
    patientId: Number,
    dateAndTime: Date,
    typeOfEncounter: String
});

module.exports = mongoose.model('Encounter', EncounterSchema);
