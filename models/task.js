'use strict';

const mongoose = require('mongoose');
const {ObjectID} = require('mongodb');
var DateOnly = require('mongoose-dateonly')(mongoose);

mongoose.set('useCreateIndex', true)

module.exports = {
    _listId: {
        type: ObjectID, 
        ref: 'list'
    }, 
    name: String, 
    isDone: {
        type: Boolean, 
        default: false
    }, 
    isStarred: {
        type: Boolean, 
        default: false
    }, 
    comment: String, 
    createdAt: Date,  
    dueDate: Date
};
