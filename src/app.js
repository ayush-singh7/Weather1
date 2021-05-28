const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../src/templates/views/")
const partials_path = path.join(__dirname,"../src/templates/partials/")

hbs.registerPartials(partials_path)

app.set('views', template_path);
app.set('view engine','hbs');
app.use(express.static(static_path));

app.get('/',(req,res)=>{
    res.render('index.hbs')
})

app.get('/about',(req,res)=>{
    res.render('about.hbs')
})

app.get('/weather',(req,res)=>{
    res.render('weather.hbs')
})

app.get('*',(req,res)=>{
    res.render('404error', {
        errorMsg:'I am swroyy Plz restwart me'
    })
})

app.listen(800, ()=>{
    console.log(`Listening to the port at 800`)
})
