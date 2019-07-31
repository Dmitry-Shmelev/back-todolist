const mongoose = require('mongoose');

const user = require('./user');
const list = require('./list');
const task = require('./task');

const userSchema = new mongoose.Schema(user);
const listSchema = new mongoose.Schema(list);
const taskSchema = new mongoose.Schema(task);

var db = {};

db.users = mongoose.model('user', userSchema);
db.lists = mongoose.model('list', listSchema);
db.tasks = mongoose.model('task', taskSchema);


module.exports = db;