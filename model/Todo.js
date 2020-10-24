const db = require('../db');

const Todo = {
    create: (payload)=>{
        return db('todo').insert(payload);
    },
    update: (id, todo)=>{
        return db('todo').where({id}).update(payload);
    },
    delete: (id)=>{
        return db('todo').where({id}).delete();
    }
}

module.exports = Todo;