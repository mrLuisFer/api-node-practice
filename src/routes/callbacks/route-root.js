const pathJoin = require('../../utils/pathJoin')

const route_root = (request, response) => {
  response.sendFile(pathJoin('./views/index.html'))
}

module.exports = route_root

