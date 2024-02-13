const express = require('express');
const path = require('path');
const apiRoutes = require('./routes');

const app = express();

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, '../dist/')));

// Use API routes
app.use('/api', apiRoutes);

// Catch all routes and redirect to the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(3000, () => console.log('Server running on port 3000'));