const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/user');
const listController = require('../controllers/list');

router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;