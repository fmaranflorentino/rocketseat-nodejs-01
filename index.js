const express = require('express');

const server = express();

server.get('', (req, res) => {
    return res.json({ message: 'first end-point' })
});

server.listen(3000);