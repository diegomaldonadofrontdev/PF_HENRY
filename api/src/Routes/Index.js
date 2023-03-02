const express = require('express');
const index = express();
const login = require('../Routes/login');


index.use(login);


module.exports = index;