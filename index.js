const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000);
}