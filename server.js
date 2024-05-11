const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser module
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// Add body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://sireesha2622:Siri12345@cluster0.ekefhyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other user fields as needed
});

// Define a user model
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route handler for /api/users
app.get('/api/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find({}, 'name email'); // Fetch both 'name' and 'email' fields
    res.json(users); // Send the users as JSON response
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint to create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    // Create a new user instance
    const newUser = new User({ name, email });
    // Save the user to the database
    await newUser.save();
    // Redirect the user to index.html after successful user creation
    res.redirect('/?username=' + encodeURIComponent(name));
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, User!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
