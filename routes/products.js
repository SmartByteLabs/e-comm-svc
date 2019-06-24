const express = require('express')
const products = express.Router()

const model = require('../models')

// return as per id
products.get('/:id(\\d+)',function(req,res){
    model.products.findByPk(req.params.id).then(data => res.send(data))
})

// return whole list
products.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.products.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
products.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.products.create(req.body).then(data => res.send(data))
})

// update existing object
products.put('/:id(\\d+)',function(req,res){
    model.products.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
products.delete('/:id(\\d+)',function(req,res){
    model.products.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = products