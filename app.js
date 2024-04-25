// Import required modules
const express = require('express');

//Create an instance of the Express application
const app = express();

// Define port number
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to the soccer management system');
});

//Start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});