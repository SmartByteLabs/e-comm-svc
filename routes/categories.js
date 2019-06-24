const express = require('express')
const categories = express.Router()

const model = require('../models')

// return as per id
categories.get('/:id(\\d+)',function(req,res){
    model.categories.findByPk(req.params.id).then(data => res.send(data))
})

// return whole list
categories.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.categories.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
categories.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.categories.create(req.body).then(data => res.send(data))
})

// update existing object
categories.put('/:id(\\d+)',function(req,res){
    model.categories.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
categories.delete('/:id(\\d+)',function(req,res){
    model.categories.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = categories