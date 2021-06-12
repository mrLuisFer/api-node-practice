const pathJoin = require('../../utils/pathJoin')

const route_about = (request, response) => {
  response.sendFile(pathJoin('./views/about.html'))
}

module.exports = route_about
