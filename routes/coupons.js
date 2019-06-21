const express = require('express')
const coupons = express.Router()

const model = require('../models')

// return as per id
coupons.get('/:id(\\d+)',function(req,res){
    model.coupons.find(req.params.id).then(data => res.send(data))
})

// return whole list
coupons.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.coupons.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
coupons.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.coupons.create(req.body).then(data => res.send(data))
})

// update existing object
coupons.put('/:id(\\d+)',function(req,res){
    model.coupons.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
coupons.delete('/:id(\\d+)',function(req,res){
    model.coupons.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = coupons