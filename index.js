const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'Server running' });
});

app.listen(3000);