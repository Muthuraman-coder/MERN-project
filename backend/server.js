require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const dailyroutines = require('./routes/dailyroutine')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/routines' , dailyroutines)

mongoose.connect(process.env.mdb)
 .then(() => {
    app.listen(process.env.port , () =>{
        console.log('connect to mongodb')
        console.log('server port runnig on', process.env.port)
    })
 })
    