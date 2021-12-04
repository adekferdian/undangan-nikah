require('dotenv').config;
const express = require('express');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

server.use(cors());
server.use(express.urlencoded({ extended: false}));
server.use(express.json());
server.use(routes);
server.use(errorHandler);

server.listen(PORT, () => {
    console.log(`running... ${PORT}`);
});