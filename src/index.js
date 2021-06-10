const express = require('express')
const app = express()
const morgan = require('morgan')
const fetch = require('node-fetch')

// Routes
const routes = require('./routes/routes')

const pathJoin = require('./utils/pathJoin')

// Middlewares
app.use(express.json())
app.use(express.static(pathJoin('../public')))
app.use(morgan('dev'))

// APP Routes
app.get(routes.root, (request, response) => {
  response.sendFile(pathJoin('./views/index.html'))
})

app.get(routes.about, (request, response) => {
  response.sendFile(pathJoin('./views/about.html'))
})

app.get(routes.posts, async (req, res) => {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
  const response = await fetch(postsUrl)
  const data = await response.json()
  res.contentType('aplication/json')

  if (data !== undefined && data !== null) {
    res.json(data)
  } else {
    res.json({
      error: 'The response has an error'
    })
  }
})

app.get(routes.post, (req, res) => {
  const id = req.params.id
  console.log(id)
  res.json(id)
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server is on port:${PORT}`)
