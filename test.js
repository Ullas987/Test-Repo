
console.log("Hello world");
// Used to create web server
const express = require('express');
const fs = require('fs')
const router = require('router')

let app = express()
var name = app.param.name;
app.get('/', (req, res) => {
    res.send(`Go and do you work ${name}`)
    console.log(router) 
})

app.get('/name', (req, res) => {
    console.log(req)
    var name = req.query.name;
    res.send(`Go and do you work ${name}`)

})


app.listen(4000)