const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const fs = require('fs');
const app = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
// Read the JSON file
const data = fs.readFileSync('./db.json');
const users = JSON.parse(data);

// Apply middleware
app.use(express.json());
app.use('/api', middlewares, router);
app.use(cors({ origin: '*' }));

app.get('/api/users', (req, res) => {  // Get all users
    console.log(users)
    res.json(db.users);  
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
    console.log(req.body.email);
    const existingEmail = db.users.find(entry => entry.email ===req.body.email);
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    users.push(req.body);
    res.json({ message: 'Data added successfully' });
  });
  

app.post('/api/login', (req, res) => {
    const email = req.body.email;
    const users = JSON.parse(data).users;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return res.send('Login successful!');
        }
    }
    res.send('Email not found. Please sign up first.');
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