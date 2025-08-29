BFHL API – VIT Full Stack Assignment

This project implements a REST API that processes a given array of inputs (numbers, alphabets, and special characters) and returns categorized outputs along with user details.

It was built using Node.js + Express and deployed on a cloud provider (e.g., Render/Vercel).

⸻

🚀 Features
	•	POST /bfhl → Accepts an array, processes it, and returns:
	•	is_success → true/false
	•	user_id → formatted as {fullname_ddmmyyyy}
	•	email → your registered email ID
	•	roll_number → your VIT roll number
	•	odd_numbers → array of odd numbers (as strings)
	•	even_numbers → array of even numbers (as strings)
	•	alphabets → all alphabets in uppercase
	•	special_characters → all non-alphanumeric symbols
	•	sum → sum of numbers (as a string)
	•	concat_string → concatenated alphabets in reverse order with alternating caps
	•	GET /bfhl → Returns a simple JSON response to test GET requests.
	•	GET / → Health check endpoint showing that the API is running.

⸻

📦 Tech Stack
	•	Backend: Node.js, Express
	•	Middleware: CORS, express.json()
	•	Hosting: Render / Vercel / Railway (any provider supporting REST APIs)

⸻

📜 Example Usage

Request (POST /bfhl)
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

Response

{
  "is_success": true,
  "user_id": "shubham_gupta_24112003",
  "email": "shubhamgupta2022@vitbhopal.ac.in",
  "roll_number": "22BAI10187",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

🛠️ Setup Instructions
	1.	Clone the repository:  git clone https://github.com/shubham241-svg/fullstack-vit-bajajfinserv
cd bfhl-api

	2.	Install dependencies: npm install
    3.	Start the server locally: npm start

🌍 Deployment
	•	Deployed on Render :