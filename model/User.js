const db = require('../db');

const User = {
    validate: (payload)=>{
        return db('users').select(['id', 'name']).where(payload);
    },
    getTodos: (user_id)=>{
        return db('todo').where({user_id});
    }
};

module.exports = User;