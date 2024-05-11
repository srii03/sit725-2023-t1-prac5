var express = require('express'); // Changed from 'var exports = require('express');'

let router = express.Router(); // Changed from 'let router = exports.Router();'
let controller = require('../controllers/controller');

router.post('/', (req, res) => {
    controller.postUser(req, res); // Changed from 'controller.postCat'
});

router.get('/', (req, res) => {
    controller.getAllUsers(req, res); // Changed from 'controller.getAllCats'
});

router.delete('/', (req, res) => {
    controller.deleteUser(req, res); // Changed from 'controller.deleteCat'
});

module.exports = router;
