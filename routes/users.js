const express = require('express')
const users = express.Router()

const model = require('../models')

// return as per id
users.get('/:id(\\d+)',function(req,res){
    model.users.find(req.params.id).then(data => res.send(data))
})

// return whole list
users.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.users.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
users.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.users.create(req.body).then(data => res.send(data))
})

// update existing object
users.put('/:id(\\d+)',function(req,res){
    model.users.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
users.delete('/:id(\\d+)',function(req,res){
    model.users.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = users