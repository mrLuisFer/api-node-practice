const rootUrl = '/'
const aboutUrl = '/about'
const postsUrl = '/posts'
const postUrl = '/posts/:id'

const routes = {
  root: rootUrl,
  about: aboutUrl,
  posts: postsUrl,
  post: postUrl
}

const routesTemplate = [
  {
    name: 'root',
    url: rootUrl
  },
  {
    name: 'about',
    url: aboutUrl
  },
  {
    name: 'posts',
    url: postsUrl
  },
  {
    name: 'post',
    url: postUrl
  }
]

module.exports = {
  routes,
  routesTemplate
}
