const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");

const items = require('./routes/api/items')

const app = express()
app.use(express.json())
dotenv.config()

const mongoURI = process.env.MONGOURI
const port = process.env.PORT || 5000


mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to db '))
    .catch((err) => console.error(err))


app.use('/api/items', items)

app.listen(port, () => console.log('Server started listening op port:', port))