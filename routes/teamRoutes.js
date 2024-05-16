//teamRoutes.js
const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Routes
router.get('/', teamController.getAllTeams);
router.post('/addTeam', teamController.addTeam);
router.get('/editTeam/:id', teamController.getEditTeamForm);
router.put('/editTeam/:id', teamController.updateTeam);
router.delete('/deleteTeam/:id', teamController.deleteTeam);

module.exports = router;
