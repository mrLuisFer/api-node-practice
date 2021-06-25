const postPost = (req, res) => {
  console.log(req.body)
  const body = req.body
  if (body !== undefined && body !== null) {
    res.send(req.body)
  }
}

module.exports = postPost
