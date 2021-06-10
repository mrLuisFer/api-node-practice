const express = require('express')
const app = express()
const path = require('path')

// Routes
const routes = require('./routes/routes')

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.get(routes.root, (request, response) => {
  response.sendFile(path.join(__dirname, './views/index.html'))
})

app.get(routes.about, (request, response) => {
  response.send('<p>Hey</p>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server is on port:${PORT}`)
