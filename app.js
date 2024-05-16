// app.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Apply before routes
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const teamRoutes = require('./routes/teamRoutes');
// Add other route files as needed

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const PORT = process.env.PORT || 3000;


// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        // Start server only after successful database connection
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        // Handle the error gracefully, maybe exit the process
    });


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/addTeam', (req, res) => {
    res.render('addTeam');
});


// Use your routes
app.use('/teams', teamRoutes);
// app.use('/', indexRoutes); // Example for separate routes
