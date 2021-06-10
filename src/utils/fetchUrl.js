const fetch = require('node-fetch')

const fetchUrl = async (url = '') => {
  const res = await fetch(`${url}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await res.json()

  return { data, res }
}

module.exports = fetchUrl
