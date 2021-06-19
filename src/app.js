const path=require("path");
const hbs=require("hbs");
const express =require('express');
const app=express();
const port=process.env.PORT||3000

const ppath = path.join(__dirname,'../public')
app.use(express.static(ppath));


const viewspath = path.join(__dirname,'../templates/views')
app.set("view engine","hbs")
app.set("views",viewspath)

const partialpath = path.join(__dirname,'../templates/partial')
hbs.registerPartials(partialpath)

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('error',{
        errormsg:"Opps! Page Not Found"
    });
})

app.listen(port,(req,res)=>{
    console.log('listen');
})