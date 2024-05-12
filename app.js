// Import required modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();




//Create an instance of the Express application
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({extended:true}));

const addTeamRouter = require('../Soccer Managment System/routes/teamRoutes');


// Set views directory for EJS Files
app.set('views', path.join(__dirname,'views'));

// Set EJS as the view engine
app.set('view engine','ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname,'public')));


// Define port number
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/teams', (req, res) => {
    res.render('teams'); // Render the teams.ejs file
});

app.get('/addTeam',(req,res)=>{
    res.render('addTeam');
});


//Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI, {
    
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use('/addTeam',addTeamRouter);