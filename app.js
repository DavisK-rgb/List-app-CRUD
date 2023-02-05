const express = require('express');
const app = express();

//setting view engine to ejs
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

const students = [{fname:'Katende',lname:'Davis'},{fname:'Mawanda',lname:'Timo'},{fname:'Baingana',lname:'Joshua'}];


app.get('/',(req,res)=>{
   
    res.render('top',{title:'List-app',students:students});



});

app.get('/new',(req,res)=>{
    res.render('new');

});

app.post('/new',(req,res)=>{

students.push({fname:req.body.fname,lname:req.body.lname});
res.redirect('/');

});









app.listen(3000);