const express = require('express');
const router = express.Router();
const path = require('path');
const session = require('express-session');

router.get('/', (req, res) => {
	res.send('This is a todo-list web app.');
});

module.exports = router;