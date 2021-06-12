const fetchUrl = require('../../utils/fetchUrl')

const routePost = async (request, response) => {
  const id = request.params.id

  const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`
  const { data } = await fetchUrl(postUrl)

  if (data !== undefined && data !== null) {
    response.json(data)
  } else {
    response.json({
      error: 'The response has an error'
    })
  }
}

module.exports = routePost
