const express = require('express')
const router = express.Router()
const fetchUrl = require('../utils/fetchUrl')
const routes = require('./routes')
const pathJoin = require('../utils/pathJoin')

router.get(routes.root, (request, response) => {
  response.sendFile(pathJoin('./views/index.html'))
})

router.get(routes.about, (request, response) => {
  response.sendFile(pathJoin('./views/about.html'))
})

router.get(routes.posts, async (req, res) => {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

  const data = await fetchUrl(postsUrl)

  if (data !== undefined && data !== null) {
    res.json(data)
  } else {
    res.json({
      error: 'The response has an error'
    })
  }
})

router.get(routes.post, (req, res) => {
  const id = req.params.id
  console.log(id)
  res.json(id)
})

module.exports = router
