const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

//Configure App

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Use Middleware

//app.use(bodyParser())

app.use(express.static(path.join(__dirname, 'public')))

//Define Routes

app.use(require('./routers/index.js'))

//Start The Server

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('App is listening on port ' + port)
})