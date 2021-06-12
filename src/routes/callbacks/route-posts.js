const fetchUrl = require('../../utils/fetchUrl')

const route_posts = async (req, res) => {
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

module.exports = route_posts

