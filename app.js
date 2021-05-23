//modules
const express = require('express')
const pollutionRoutes = require('./routes/PollutionRoute')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//dontenv 
require('dotenv').config()
const serverPort = process.env.RUNNING_PORT

//View engine 
app.set('view engine', 'ejs')


// routes
app.use('/pollution', pollutionRoutes)

//start server
app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`)
})
