const express = require('express')
const orders = express.Router()

const model = require('../models')

// return as per id
orders.get('/:id(\\d+)',function(req,res){
    model.orders.findByPk(req.params.id).then(data => res.send(data))
})

// return whole list
orders.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.orders.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
orders.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.orders.create(req.body).then(data => res.send(data))
})

// update existing object
orders.put('/:id(\\d+)',function(req,res){
    model.orders.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
orders.delete('/:id(\\d+)',function(req,res){
    model.orders.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = orders