const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Apply middleware
app.use(express.json());
app.use('/api', middlewares, router);

// Get all users
app.get('/api/users', (req, res) => {
    res.json(db.users);
  });
  
  // Get a user by ID
  app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(userId);
    const user = db.users.find(user => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  
  // Create a new user
  app.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    // Check if user with the same email already exists
    const existingUser = db.users.find(user => user.email === newUser.email);
    if (existingUser) {
      return res.status(400).json({ error: 'User with the same email already exists' });
    }
    // Assuming users are stored as an array in `db.json`
    db.users.push(newUser);
    res.status(201).json(newUser);
  });
  
  // Update a user
  app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = db.users.findIndex(user => user.id === userId);
  
    if (index !== -1) {
      db.users[index] = updatedUser;
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  
  // Delete a user
  app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = db.users.findIndex(user => user.id === userId);
  
    if (index !== -1) {
      db.users.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});