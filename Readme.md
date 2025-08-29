# BFHL API - VIT Full Stack Assessment

A REST API that processes input arrays and returns categorized data including numbers, alphabets, special characters, and string manipulations.

## 🚀 Live API
**Base URL:** `https://bfhl-xqzg.onrender.com/`
**Endpoint:** `POST /bfhl`

## 📋 Features
- Separates odd and even numbers
- Extracts and uppercases alphabets
- Identifies special characters
- Calculates sum of all numbers
- Creates concatenated string with alternating caps in reverse order

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Deployment:** Render
- **Version Control:** Git/GitHub

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/shubham241-svg/fullstack-vit-bajajfinserv
cd bfhl-api
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=3000
USER_ID=john_doe_17091999
EMAIL=john@xyz.com
ROLL_NUMBER=ABCD123
```

4. Start development server:
```bash
npm run dev
```

5. Test locally:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

## 🔌 API Documentation

### POST /bfhl
Processes an array of mixed data types and returns categorized information.

#### Request Body
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

#### Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

#### Response Fields
- `is_success`: Boolean indicating operation status
- `user_id`: User identifier in format {name_ddmmyyyy}
- `email`: User email address
- `roll_number`: College roll number
- `odd_numbers`: Array of odd numbers as strings
- `even_numbers`: Array of even numbers as strings
- `alphabets`: Array of alphabetical characters in uppercase
- `special_characters`: Array of special characters
- `sum`: Sum of all numbers as string
- `concat_string`: Concatenated alphabets in reverse with alternating caps

## 📝 Examples

### Example 1: Mixed Data
**Request:**
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

### Example 2: Only Alphabets
**Request:**
```json
{
  "data": ["A", "ABcD", "DOE"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A", "ABCD", "DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## 🚢 Deployment on Render

### Steps:
1. Push code to GitHub repository (must be public)
2. Connect Render to your GitHub account
3. Create new "Web Service"
4. Select your repository
5. Configure build settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
6. Add environment variables in Render dashboard
7. Deploy!

### Environment Variables (Set in Render Dashboard)
- `USER_ID`: Your full name and birthdate
- `EMAIL`: Your email address
- `ROLL_NUMBER`: Your college roll number

## 🧪 Testing
Test the deployed API using curl, Postman, or any HTTP client:

```bash
curl -X POST https://your-app-name.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["test", "123", "!", "abc"]}'
```


```

## 🤝 Contributing
This is an assessment project, but feel free to suggest improvements via issues.

## 📄 License
This project is part of VIT Full Stack Assessment.

## 👨‍💻 Author
**Shubham Gupta**
- Email: shubhamgupta2022@vitbhopal.ac.in
- GitHub: [@shubham241-svg](https://github.com/shubham241-svg)
- Roll Number: 22BAI10187

---
⭐ **Note:** This API was built as part of VIT's Full Stack Development assessment.