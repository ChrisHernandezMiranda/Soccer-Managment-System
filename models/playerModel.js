//playerModel.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    goalsScored: { type: Number, default: 0 },
    goalsAssisted: { type: Number, default: 0 },
    playerPhoto: String,
    team: {
        type: mongoose.Schema.Types.ObjectId, // Store the team's ID
        ref: 'Team'                           // Reference the Team model
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = mongoose.model('Player', playerSchema); 