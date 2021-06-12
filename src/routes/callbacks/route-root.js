const pathJoin = require('../../utils/pathJoin')
const { routesTemplate } = require('../routes')

const routeRoot = (request, response) => {
  response.render(pathJoin('./views/index.ejs'), {
    title: 'Rest Api',
    endpoints: routesTemplate
  })
}

module.exports = routeRoot
