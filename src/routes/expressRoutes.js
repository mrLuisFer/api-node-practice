const express = require('express')
const router = express.Router()
const routes = require('./routes')

// Routes callbacks
const route_root = require('./callbacks/route-root')
const route_about = require('./callbacks/route-about')
const route_posts = require('./callbacks/route-posts')

router.get(routes.root, (request, response) => route_root(request, response))

router.get(routes.about, (request, response) => route_about(request, response))

router.get(routes.posts, (request, response) => route_posts(request, response))

router.get(routes.post, (req, res) => {
  const id = req.params.id
  console.log(id)
  res.json(id)
})


module.exports = router
