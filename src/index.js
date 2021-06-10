const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.json({
    content: "Its work",
  })
})

const PORT = 3000
app.listen(PORT)
console.log(`Server is on port:${PORT}`)
