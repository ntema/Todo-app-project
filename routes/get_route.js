
const router = require('express').Router();
const todo_data_model = require('../model/todo');

router.get('/', async(req,res)=>{
    const all_task = await todo_data_model.find();
    res.render('todoUI', {tasks: all_task}); 
})



module.exports = router;