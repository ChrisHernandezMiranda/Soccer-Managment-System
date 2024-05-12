// teamController.js
const Team = require('../models/teamModel');

exports.addTeam = async (req, res) => {
    try {
        const { name, logo, season, year, wins, losses, goalsFor, goalsAgainst, points } = req.body;
        
        console.log("Received data:", req.body);

        // Create a new team document
        const newTeam = new Team({
            name,
            logo,
            season,
            year,
            wins,
            losses,
            goalsFor,
            goalsAgainst,
            points
        });

        // Save the new team to the database
        await newTeam.save();

        console.log("Team added successfully:", newTeam);

        // Redirect to the teams page after adding the team
        res.redirect('/teams');
    } catch (error) {
        console.error('Error adding team:', error);
        res.status(500).send('Error adding team');
    }
};
