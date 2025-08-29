const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3100;

// Middleware
app.use(cors());
app.use(express.json());

// user details
const USER_CONFIG = {
    user_id: "shubham_gupta_24112003", 
    email: "shubhamgupta2022@vitbhopal.ac.in",        
    roll_number: "22BAI10187"        
};