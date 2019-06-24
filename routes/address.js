const express = require('express')
const address = express.Router()

const model = require('../models')

// return as per id
address.get('/:id(\\d+)',function(req,res){
    model.address.findByPk(req.params.id).then(data => res.send(data))
})

// return whole list
address.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.address.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
address.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.address.create(req.body).then(data => res.send(data))
})

// update existing object
address.put('/:id(\\d+)',function(req,res){
    model.address.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
address.delete('/:id(\\d+)',function(req,res){
    model.address.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = address