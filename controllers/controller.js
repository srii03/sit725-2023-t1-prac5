let collection = require('../model/user');

const postUser = (req, res) => { // Changed from postCat
    let user = req.body; // Changed from cat
    collection.postUser(user, (err, result) => { // Changed from postCat
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'post user success' }); // Changed from 'post cat success'
        }
    });
};

const getAllUsers = (req, res) => { // Changed from getAllCats
    collection.getAllUsers((err, result) => { // Changed from getAllCats
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get user success' }); // Changed from 'get cat success'
        }
    });
};

const deleteUser = (req, res) => { // Changed from deleteCat
    let user = req.body; // Changed from cat
    collection.deleteUser(user, (err, result) => { // Changed from deleteCat
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'delete user success' }); // Changed from 'delete cat success'
        }
    });
};

module.exports = { postUser, getAllUsers, deleteUser }; // Updated export object key names
