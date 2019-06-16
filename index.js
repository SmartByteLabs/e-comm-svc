require('./init')
require('./helpers/pg-halper/connection')
const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send("prince parmar")
})

console.log(process.env.PORT)
app.listen(process.env.PORT, function(err){
    console.log(err)
})