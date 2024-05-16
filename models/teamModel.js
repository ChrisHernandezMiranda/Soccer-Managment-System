const mongoose = require('mongoose');

// define the Team schema 

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    logo: {type: String},
    season: {type: String, required: true},
    year: {type: Number, required: true},
    wins: {type: Number, default: 0},
    losses: {type: Number, default: 0},
    goalsFor: {type: Number, default: 0},
    goalsAgainst: {type: Number, default: 0},
    points: {type: Number, default: 0},
});




//Create the Team model
const Team = mongoose.model('Team',teamSchema);

module.exports = Team;