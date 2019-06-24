const express = require('express')
const admin = express.Router()

const model = require('../models')

// return as per id
admin.get('/:id(\\d+)',function(req,res){
    model.admin.findByPk(req.params.id).then(data => res.send(data))
})

// return whole list
admin.get('/page/:pageno(\\d+)/:limit(\\d+)',function(req, res){
    model.admin.findAll({
        offset: req.params.limit * req.params.pageno,
        limit: req.params.limit
    }).then(data => res.send(data))
})

// create new object
admin.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    model.admin.create(req.body).then(data => res.send(data))
})

// update existing object
admin.put('/:id(\\d+)',function(req,res){
    model.admin.update(req.body,{
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

// delete the object
admin.delete('/:id(\\d+)',function(req,res){
    model.admin.delete({
        where: {
            id : req.params.id,
        }
    }).then(data => res.send(data))
})

module.exports = admin