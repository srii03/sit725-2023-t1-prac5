var express = require('express'); 

let router = express.Router(); 
let controller = require('../controllers/controller');

// POST route to create a new user
router.post('/', (req, res) => {
    controller.postUser(req, res); 
});

// GET route to retrieve all users
router.get('/', (req, res) => {
    controller.getAllUsers(req, res); 
});

// DELETE route to delete a user
router.delete('/', (req, res) => {
    controller.deleteUser(req, res); 
});

module.exports = router;
