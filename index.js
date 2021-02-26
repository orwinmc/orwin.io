const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// API
app.get('/api', (req, res) => {
  res.json({"status":"OK"});
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'web/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on ${port}`));