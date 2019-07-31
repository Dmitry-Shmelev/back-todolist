'use strict';

module.exports = {
    firstName: String, 
    lastName: String, 
    email: {
        type: String,
        unique: true
    },  
    password: String
};
