
# We Barter - Bartering System

## Overview
We Barter is a web application that facilitates the exchange of goods through a bartering system. Users can list items they want to exchange and browse listings from other users to find items they are interested in. This project is built using HTML, CSS, JavaScript, and Node.js with Express for the backend. MongoDB is used as the database to store user information and listings.

## Features
- User registration and login
- Listing items for barter
- Searching for items based on keywords
- Viewing details of listed items
- Contacting sellers for items

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/sireeshasn/WeBarter.git
   ```
2. Install dependencies:
   ```bash
   cd weBarter
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000` to use the application.

## Dependencies
- Express: web framework for Node.js
- MongoDB: database for storing user and listing information
- Socket.IO: for real-time chat functionality
- Body-parser: middleware for parsing incoming request bodies

## File Structure
```
we-barter/
│
├── controller/           # Event Controller files .
├── js/                	  # client side JS files  
├── public/               # Static files (HTML, CSS, images)
├── routes/               # Route handlers for different endpoints
├── server.js             # Main server file
├── package.json          # Project metadata and dependencies
└── README.md             # Project overview and setup instructions
```

## Usage
- Register or login to your account.
- Browse listings or create a new listing for an item you want to exchange.
- Search for items using keywords to find relevant listings.
- Click on a listing to view more details and contact the seller.
- Use the chat functionality to communicate with sellers and finalize the exchange.

## Contributors
- Sireesha 
- SriLakshmi
- Manasa 
- Raghava
- Chandrakanth 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
