let data =[{item:'eat breakfast'},{item:'read a book'},{item:'take a nap'}];


module.exports = (app)=>{
    app.get('/todo', (req,res)=>{
        res.render('todo', {todos:data});
    })
    app.post('/', (req,res)=>{
        res.render('todo')
    })
    app.delete('/',(req,res)=>{

    })
}