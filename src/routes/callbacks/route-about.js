const pathJoin = require('../../utils/pathJoin')

const routeAbout = (request, response) => {
  response.sendFile(pathJoin('./views/about.html'))
}

module.exports = routeAbout
