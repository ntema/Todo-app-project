const mongoose = require('mongoose');
//const { stringify } = require('nodemon/lib/utils');
const schema = mongoose.Schema;

const todoSchema= new schema({
    task: {
        type: String,
        required: true,
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports=Todo;