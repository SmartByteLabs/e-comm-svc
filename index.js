require('./init')
require('./helpers/pg-halper/connection')
const fs = require('fs')

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded());

// import routes
const routePath = './routes'
fs.readdir(routePath, function(err, items) {
    items.forEach(function(item){
        if(item.indexOf('.js') < 0) return
        let name = '/'+item.replace(/(\.js)|(index.js)/ig,'').replace('_','-')
        app.use(name, require(routePath + '/' +item))
        console.log('connect ' + name)
    })
});

console.log(process.env.PORT)
app.listen(process.env.PORT, function(err){
    console.log(err)
})