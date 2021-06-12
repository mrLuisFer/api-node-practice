const pathJoin = require('../../utils/pathJoin')

const routeAbout = (request, response) => {
  response.render(pathJoin('./views/about.ejs'))
}

module.exports = routeAbout
