const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();

const PORT = 3001;

//root is homepage (/public/index.html)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route to notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);