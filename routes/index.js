const express = require('express')

const index = express.Router()

index.get('/',function(req,res){
    res.send("prince parmar")
})

module.exports = index