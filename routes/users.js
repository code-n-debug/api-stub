const router = require('express').Router();
const User = require('../model/User');

router.get('/:id', (req, res)=>{
    User.getTodos(req.params.id).then(data=>{
        res.json({
            status: 1,
            data
        });
    }).catch(error=>{
        res.json({
            status: 1,
            error
        });
    })
});

router.post('/auth', (req, res)=>{
    User.validate(req.body).then(data=>{
        res.json({
            status: 1,
            data
        });
    }).catch(error=>{
        res.json({
            status: 1,
            error
        });
    })
});

module.exports = router;