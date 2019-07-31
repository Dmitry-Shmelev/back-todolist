const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../config/config.json');

function login(req, res) {
	var email = req.body.email;
	var password = req.body.password;


	if(email && password) {
		models.users.findOne({ email: email }, (err, userData) => {
			if(err) {
				res.status(401).send({
					message: 'can not find email', 
					error: err 
				});
			} else {
				if(bcrypt.compareSync(password, userData.password)) {
					let token = jwt.sign(userData.toJSON(), config.secret_key, {
						expiresIn: '1d'	//1 day
					});
					
					let sendData = {
						_id: userData._id, 
						firstName: userData.firstName, 
						lastName: userData.lastName,
						email: userData.email,
						token: token
					};
					res.status(200).send(sendData);
					console.log("User logged in:\n", sendData);
				} else {
					res.status(401).send('password is wrong');
				}
			}
		});
		
	} else {
		res.status(401).send('email or password is empty!');
	}
};

function register(req, res) {
	const user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	}
	
	bcrypt.hash(req.body.password, 10, (err, hash) => {
		if(err) {
			res.status(401).send({
				message: 'password can not be hashed', 
				error: err
			});
		} else {
			user.password = hash;
			models.users.create(user, (err, userData) => {
				if(err) {
					res.status(403).send({
						message: 'user can not be created',
						error: err 
					});
				} else {
					res.status(200).send(userData);
				}
			});
		}
	});
};

module.exports = {
    login, 
    register
}