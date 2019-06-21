const express = require('express')
const roles = express.Router()

const model = require('../models')

// return as per id
roles.get('/:id(\\d+)',function(req,res){
    model.roles.find(req.params.id).then(data => res.send(data))
})

// return whole list
roles.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.roles.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
roles.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.roles.create(req.body).then(data => res.send(data))
})

// update existing object
roles.put('/:id(\\d+)',function(req,res){
    model.roles.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
roles.delete('/:id(\\d+)',function(req,res){
    model.roles.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = roles