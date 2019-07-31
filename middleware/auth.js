const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config/config.json');
var secret = config.secret_key;

module.exports = function(req, res, next) {
    var auth = req.headers.authorization;

    if(!auth) {
        return res.send('No authorization');
    }

    var token = auth.split(' ')[1];

    jwt.verify(token, secret, (err, decoded) => {
        if(err) {
            return res.send(err);
        }

        req.user = decoded;
        next();
    });
};