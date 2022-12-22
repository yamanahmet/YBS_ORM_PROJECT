const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const { sendMailOperation } = require('./sendmail')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/users', db.getUsers)
app.post('/createUser', db.createUser)
app.post('/addUserNote', db.addUserNote)
app.get('/tickets', db.getTickets)
app.post('/createTicket', db.createTicket)
app.get('/sendEmailAllUsers', db.sendEmailAllUsers)
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
