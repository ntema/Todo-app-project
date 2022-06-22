const express = require('express');
//const todoController = require('./controllers/todoController');
const mongoose = require('mongoose');


//mongoDB config
mongoose.connect('mongodb+srv://emma:1234@myfirstcluster.aeejy.mongodb.net/todoAppDB?retryWrites=true&w=majority',)
   .then((result)=>app.listen(3000,()=>{console.log('server running on port 3000');}))
   .catch((err)=>console.log(err))

//express app setip
const app = express();

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/get_route'));
app.use(require('./routes/post_route'));

//server config
//app.listen(3000,()=>{console.log('server running on port 3000')}) ;
//todoController(app);










