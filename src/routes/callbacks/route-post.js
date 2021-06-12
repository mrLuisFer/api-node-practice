const fetchUrl = require('../../utils/fetchUrl') 

const route_post = (request, response) => {
  const id = request.params.id
  console.log(id)

  const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`

  const { data } = fetchUrl(postUrl)


  console.log(data)
  response.json({
    id: id,
    url: postUrl,
    })
}

module.exports = route_post
