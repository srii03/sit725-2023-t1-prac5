//server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bcrypt = require('bcryptjs');

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose
  .connect(
    'mongodb+srv://chandra98au:EWCdATZ1soDCW6p6@cluster0.aymawxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other user fields as needed
});

// Define a user model
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, 'name email');
    res.json(users);
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.redirect('/?username=' + encodeURIComponent(name));
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // the '10' is the salt rounds
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res
      .status(500)
      .json({
        success: false,
        message: 'Failed to register user',
        errorDetail: error.message,
      });
  }
});
// Hello route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, User!' });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('hello', 'Hello User');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Emit messages at regular intervals
  setInterval(() => {
    const randomMessages = [
      'Welcome to our bartering platform!',
      'Find great deals on items you need.',
      'Trade your items with others for things you want!',
    ];
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    const randomMessage = randomMessages[randomIndex];
    socket.emit('message', randomMessage);
  }, 5000); // Adjust the interval as needed
});

// Start the server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
