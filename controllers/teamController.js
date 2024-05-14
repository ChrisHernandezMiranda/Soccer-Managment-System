// teamController.js
const Team = require('../models/teamModel');
const path = require('path'); 

exports.addTeam = async (req, res) => {
    try {
        const { name, logo, season, year, wins, losses, goalsFor, goalsAgainst, points } = req.body;

        console.log("Received data:", req.body);

        const newTeam = new Team({
            name, logo, season, year, wins, losses, goalsFor, goalsAgainst, points
        });

        await newTeam.save();

        console.log("Team added successfully:", newTeam);

        res.redirect('/teams'); // Redirect to render teams.ejs
    } catch (error) {
        console.error('Error adding team:', error);
        res.status(500).send('Error adding team');
    }
};

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.render(path.join(__dirname, '../views/teams'), { teams: teams }); // Render teams.ejs with data
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ error: 'Error fetching teams' }); 
    }
};
