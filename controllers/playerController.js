//playerController.js
const mongoose = require('mongoose');
const Player = require('../models/playerModel');
const Team = require('../models/teamModel');
const path = require('path'); 



exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().populate('team'); // Using the imported Player model
        res.render(path.join(__dirname, '../views/players.ejs'), { players: players }); 
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ error: 'Error fetching players' });
    }
};
