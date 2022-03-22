require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connect to Database'))

app.use(express.json())

// subscriberRouter is DataBase name
const subscriberRouter = require('./routes/subscribers')
app.use('/subscribers', subscriberRouter)

// app.get("/", (req, res) => {
//    res.send("Hello Node.js REST Server!");
// });

app.listen(3000, () => console.log('Server Started'))