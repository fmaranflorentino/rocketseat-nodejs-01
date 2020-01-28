const express = require('express');

const server = express();

server.get('/users/:id', (req, res) => {
    const { name } = req.query; // query params
    const { id } = req.params; // path params

    return res.json({ message: `Hey ${name}! - ${id}` })
});

server.listen(3000);
