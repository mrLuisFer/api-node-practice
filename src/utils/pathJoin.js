const path = require('path')

const pathJoin = (urlFile = '/') => {
  const rootDir = path.join(__dirname, '../')
  console.log(rootDir)
  return path.join(rootDir, urlFile)
}

module.exports = pathJoin
