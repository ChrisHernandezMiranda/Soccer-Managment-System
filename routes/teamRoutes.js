// teamRoutes.js

const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const path = require('path'); 

// Route for adding a team (POST request)
router.post('/addTeam', teamController.addTeam);

// Route for getting all teams and rendering the teams.ejs view (GET request)
router.get('/', teamController.getAllTeams); 

module.exports = router;
