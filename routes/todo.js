const router = require('express').Router();
const Todo = require('../model/Todo');

router.post('/', (req, res)=>{
    Todo.create(req.body).then(data=>{
        res.json({
            status: 1,
            data
        });
    }).catch(error=>{
        res.json({
            status: 0,
            error
        });
    });
});

router.put('/:id', (req, res)=>{
    Todo.update(req.params.id, req.body).then(data=>{
        res.json({
            status: 1,
            data
        });
    }).catch(error=>{
        res.json({
            status: 0,
            error
        });
    });
});

router.delete('/:id', (req, res)=>{
    Todo.delete(req.params.id).then(data=>{
        res.json({
            status: 1,
            data
        });
    }).catch(error=>{
        res.json({
            status: 0,
            error
        });
    });
});

module.exports = router;