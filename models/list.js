'use strict';

const {ObjectID} = require('mongodb');

module.exports = {
    _userId: {
        type: ObjectID, 
        ref: 'user'
    }, 
    name: String
};