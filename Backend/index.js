const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const fs = require('fs');
const app = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// Apply middleware
app.use(express.json());
app.use('/api',middlewares, router);
app.use(cors({ origin: '*' }));

app.get('/api/users', (req, res) => {  // Get all users
    res.json(db.users);
    console.log(db.users);
});

app.get('/api/users/:id', (req, res) => { // Get a user by ID
    const userId = parseInt(req.params.id);
    console.log(userId);
    const user = db.users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


app.post('/api/users', (req, res) => { // Create a new user
    const { email, username, password } = req.body;
    console.log(email, username, password);
    // Check if the email already exists in the database
    const user = db.users.find((user) => user.email === email);
    if (user) {
      // Return an error response if the email is already registered
      return res.status(400).json({ error: 'Email already exists' });
    }
    // If the email is unique, create a new user object and save it to the database
    const newUser = { email, username, password };
    db.users.push(newUser);
});

app.put('/api/users/:id', (req, res) => {// Update a user
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

app.delete('/api/users/:id', (req, res) => {// Delete a user
    const userId = parseInt(req.params.id);
    const index = db.users.findIndex(user => user.id === userId);
    if (index !== -1) {
        db.users.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

const port = 8000;  // Start the server
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});