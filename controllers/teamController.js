// teamController.js
const mongoose = require('mongoose');

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


exports.deleteTeam = async (req, res) => {
    try {
        console.log('Delete team route reached');
        console.log('Request Method:', req.method);
        const teamId = req.params.id;

        console.log('Received teamId:', teamId);

        // Ensure the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(teamId)) {
            return res.status(400).send('Invalid team ID');
        }

        const deletedTeam = await Team.findByIdAndDelete(teamId);
        if (!deletedTeam) {
            return res.status(404).send('Team not found');
        }
        //respond to request with success message 
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        console.error('Error deleting team:', error);
        res.status(500).json({ error: 'Error deleting team' });
    }
};

exports.getEditTeamForm = async (req, res) => {
    try {
        const teamId = req.params.id;
        const team = await Team.findById(teamId);

        if (!team) {
            return res.status(404).render('error', { message: 'Team not found' }); 
        }

        res.render('editTeam', { team: team });
    } catch (error) {
        console.error('Error fetching team for editing:', error);
        res.status(500).render('error', { message: 'Error fetching team' });
    }
};

exports.updateTeam = async (req, res) => {
    try {
        const teamId = req.params.id;
        const updatedData = req.body;
        console.log('Received Data:', updatedData);

        // Validation 
        if (!updatedData.name || !updatedData.season || !updatedData.year) {
            return res.status(400).json({ error: 'Please fill in all required fields.' });
        }

        // Find and update the team
        const updatedTeam = await Team.findByIdAndUpdate(teamId, updatedData, { new: true });

        if (!updatedTeam) {
            return res.status(404).json({ error: 'Team not found' });
        }

        // Log success message
        console.log('Team updated successfully');
        res.status(200).json({ message: 'Team updated successfully' });
    } catch (error) {
        console.error('Error updating team:', error);
        res.status(500).json({ error: 'Error updating team' });
    }
};
