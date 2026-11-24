const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.path === '/server.js' || req.path === '/package.json' || req.path === '/package-lock.json') {
    return res.status(404).send('Not found');
  }
  next();
});

app.use(express.static(__dirname));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Simple Cash Register listening on http://0.0.0.0:${PORT}`);
});
