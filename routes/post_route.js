const router = require('express').Router();
const todo_data_model = require('../model/todo');
//const mongoose = require('mongoose');



router.post('/add/todo', (req,res)=>{
    const my_task = req.body.task_to_do;
    const new_todo_data = new todo_data_model({task:my_task })
    new_todo_data.save()
    .then((result)=>{console.log('success');
        res.redirect('/')})
    .catch((err)=>{
        console.log(err)})
})
//get
router.get('/delete/todo/:id', (req,res)=>{
    const id = req.params.id;
    console.log({id});
    todo_data_model.deleteOne({id})
    //Todo.findByIdAndDelete(id)
    .then(()=>{console.log('deleted')
            res.redirect('/')})
    .catch((err)=>{console.log(err)})
})



module.exports = router