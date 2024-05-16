const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to return a simple message
app.get('/test', (req, res) => {
    res.send('Server is operational');
});

// Route to return an image
app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'image.jpg'));
});

// Route to serve React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
