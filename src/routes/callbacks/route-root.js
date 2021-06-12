const pathJoin = require('../../utils/pathJoin')

const routeRoot = (request, response) => {
  response.sendFile(pathJoin('./views/index.html'))
}

module.exports = routeRoot
