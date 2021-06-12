const fetchUrl = require('../../utils/fetchUrl')

const routePosts = async (req, res) => {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

  const data = await fetchUrl(postsUrl)

  if (data !== undefined && data !== null) {
    res.json(data)
  } else {
    res.json({
      error: 'The response has an error'
    })
  }
}

module.exports = routePosts
