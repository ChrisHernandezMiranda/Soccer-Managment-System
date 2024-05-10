console.log("importing teamroutes.js");
// Import required modules
const express = require('express');

// Create an Express router instance
const router = express.Router();

// Import Team Model
const Team = require('../models/teamModel');

router.post('/addTeam', async (req, res) => {
    console.log("Received POST request to /addTeam");
    // Logic to create a new team
    try {
        // Extract team data from the request body
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
});

// Export the router
module.exports = router;
