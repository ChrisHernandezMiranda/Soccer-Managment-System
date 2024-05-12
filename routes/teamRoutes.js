
// Import required modules
const express = require('express');

// Create an Express router instance
const router = express.Router();

const teamController = require('../controllers/teamController');

router.post('/addTeam',teamController.addTeam);
module.exports = router;
