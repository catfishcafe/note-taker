const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();

const PORT = 3001;

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

