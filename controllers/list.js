const models = require('../models');

function createList(req, res) {
    
    models.lists.create( {
        _userId: req.user._id,
        name : req.body.listName }, 
        (err, listData) => {
            if(err) {
                res.status(403).send('can not create list:', err);
            } else {
                res.status(200).send(listData);
            }
        }
    );

};

function deleteList(req, res) {

    let errArray = {};
    let hasErr = false;

    models.lists.deleteOne( {
        _id: req.params.listId }, 
        err => {
            errArray[0] = err;
            hasErr = true;
            //res.send(err);
        }
    );

    models.tasks.deleteMany( {
        _listId: req.params.listId }, 
        err => {
            if(hasErr) {
                errArray[1] = err;
            } else {
                errArray[0] = err;
            }
            res.status(403).send(errArray);
        }
    );
}

function updateList(req, res) {

    models.lists.updateOne( { _id: req.params.listId }, { name: req.body.listName },  
        (err, result) => {
            if(err) {
                res.status(403).send(err);
            } else {
                res.status(200).send(result);
            }
        }
    );
}

function getLists(req, res) {

    //console.log(req);
    models.lists.find( { _userId: req.user._id }, 
        (err, listArray) => {
            if(err) {
                res.status(403).send(err);
            } else {
                res.status(200).send(listArray);
            }
    });
}

module.exports = {
    createList, 
    deleteList, 
    updateList, 
    getLists
};