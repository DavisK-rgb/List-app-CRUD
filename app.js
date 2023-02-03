const express = require('express');
const app = express();

//setting view engine to ejs
app.set('view engine','ejs');
app.use(express.static('public'));
const students = [{fname:'Katende',lname:'Davis'},{fname:'Mawanda',lname:'Timo'},{fname:'Baingana',lname:'Joshua'}];


app.get('/',(req,res)=>{
   
    res.render('top',{title:'List-app',students:students});



});









app.listen(3000);