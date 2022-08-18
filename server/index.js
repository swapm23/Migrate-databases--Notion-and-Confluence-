const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const got_data = require('./notion.js')
const cors = require("cors")
const { json } = require('express')

const app = express()


app.use(cors())
app.use(express.static('../client/public'))

app.get('/getNotionDatabase',async (req , res)=>{
    const data = await got_data
    res.json(data)
})

app.listen(PORT, console.log('Server Started on PORT '+PORT))