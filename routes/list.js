const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const listController = require('../controllers/list');
const taskController = require('../controllers/task');

router.get('/', auth, listController.getLists);
router.post('/new', auth, listController.createList);
router.get('/starred', auth, taskController.getStarredTasks);
router.get('/today', auth, taskController.getTodayTasks);
router.get('/week', auth, taskController.getWeekTasks);
router.get('/done', auth, taskController.getDoneTasks);
router.get('/:listId', auth, taskController.getTasksOfList);
router.delete('/:listId', auth, listController.deleteList);
router.put('/:listId', auth, listController.updateList);


module.exports = router;