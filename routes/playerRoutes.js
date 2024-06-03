// Player Routes

const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController'); // Corrected the require

// Routes
router.get('/', playerController.getAllPlayers); // Use getAllPlayers function from controller

router.post('/addPlayer', playerController.addPlayer);

module.exports = router; 
