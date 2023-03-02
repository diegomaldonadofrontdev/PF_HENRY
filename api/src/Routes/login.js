const express = require('express');
const router = express();
const login_controller = require('../Controllers/login_controller')


router.post('/login',login_controller);


module.exports = router;