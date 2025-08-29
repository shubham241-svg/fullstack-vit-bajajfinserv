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

// Main processing function
function processData(inputArray) {
    const numbers = [];
    const alphabets = [];
    const specialChars = [];
    
    // Categorize input data
    inputArray.forEach(item => {
        const str = String(item);
        if (/^\d+$/.test(str)) {
            numbers.push(str);
        } else if (/^[a-zA-Z]+$/.test(str)) {
            alphabets.push(str.toUpperCase());
        } else {
            specialChars.push(str);
        }
    });
    
    // Separate odd and even numbers
    const oddNumbers = numbers.filter(num => parseInt(num) % 2 !== 0);
    const evenNumbers = numbers.filter(num => parseInt(num) % 2 === 0);
    
    // Calculate sum
    const sum = numbers.reduce((total, num) => total + parseInt(num), 0).toString();
    
    // Create concatenation string (reverse alphabets + alternating caps)
    // Create concatenation string (reverse alphabets + alternating caps)
    const allAlphabets = alphabets.join('');
    const reversedChars = allAlphabets.split('').reverse();
    const concatString = reversedChars.map((char, index) => 
    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()  
).join('');
    
    return {
        is_success: true,
        ...USER_CONFIG,
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets,
        special_characters: specialChars,
        sum: sum,
        concat_string: concatString
    };
}