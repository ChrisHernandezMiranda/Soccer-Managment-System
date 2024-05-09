// Import required modules
const express = require('express');

// Create an Express router instance
const router = express.Router();

//Import Team Model
const Team = require('./teamModel');



router.post('/', async (req, res) => {
    // Logic to create a new team
    try{
        //extract team data from the request body
        const{name, logo,season,year,wins,losses,goalsFor,goalsAgainst,points} = req.body;
        
        //create a new team document
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

        // save the new team to the database
        await newTeam.save();

        //Redirect to the teams page after adding the team
        res.redirect('/teams');
    } catch(error){
        console.error('Error adding team:', error);
        res.status(500).send('Error adding team');
    }

});

//Export the router
module.exports = router; 