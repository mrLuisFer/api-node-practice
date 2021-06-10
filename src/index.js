const express = require('express')
const app = express()

// Routes
const routes = require('./routes/routes')

const pathJoin = require('./utils/pathJoin')

app.use(express.json())
app.use(express.static(pathJoin('../public')))

app.get(routes.root, (request, response) => {
  response.sendFile(pathJoin('./views/index.html'))
})

app.get(routes.about, (request, response) => {
  response.sendFile(pathJoin('./views/about.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server is on port:${PORT}`)
