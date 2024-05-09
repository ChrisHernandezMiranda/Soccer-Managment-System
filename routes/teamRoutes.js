// Import required modules
const express = require('express');

// Create an Express router instance
const router = express.Router();

const Team = require('./teamModel');

// Define route handlers
router.get('/', (req, res) => {
    // Logic to retrieve and render a list of teams
    res.render('teams', { teams: [] }); // Assuming you'll pass teams data to the EJS template
});

app.get('/addTeam',(req,res)=>{
    res.render('addTeam');
});

router.post('/addTeam', async (req, res) => {
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
        res.redirect('/');
    } catch(error){
        console.error('Error adding team:', error);
        res.status(500).send('Error adding team');
    }

});
