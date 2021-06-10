const path = require('path')

const pathJoin = (urlFile = '/') => {
  const rootDir = path.join(__dirname, '../')
  return path.join(rootDir, urlFile)
}

module.exports = pathJoin
