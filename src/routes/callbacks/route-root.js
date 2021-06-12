const pathJoin = require('../../utils/pathJoin')

const routeRoot = (request, response) => {
  response.render(pathJoin('./views/index.ejs'), { title: 'Rest Api' })
}

module.exports = routeRoot
