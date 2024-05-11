let client = require('../dbConnection');

let collection = client.db("Text1").collection('User'); // Changed collection name from 'Cat' to 'User'

function postUser(user, callback) { // Changed function name from postCat to postUser
    collection.insertOne(user, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getAllUsers(callback) { // Changed function name from getAllCats to getAllUsers
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function deleteUser(user, callback) { // Changed function name from deleteCat to deleteUser
    collection.deleteOne(user, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = { postUser, getAllUsers, deleteUser }; // Updated export object key names

