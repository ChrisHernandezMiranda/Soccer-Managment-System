// Import required modules
const express = require('express');
const path = require('path');

//Create an instance of the Express application
const app = express();

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

//Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});