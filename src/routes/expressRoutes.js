const express = require('express')
const router = express.Router()
const { routes } = require('./routes')

// Routes callbacks
const routeRoot = require('./callbacks/route-root')
const routeAbout = require('./callbacks/route-about')
const routePosts = require('./callbacks/route-posts')
const routePost = require('./callbacks/route-post')

router.get(routes.root, (request, response) => routeRoot(request, response))

router.get(routes.about, (request, response) => routeAbout(request, response))

router.get(routes.posts, (request, response) => routePosts(request, response))

router.get(routes.post, (req, res) => routePost(req, res))

module.exports = router
