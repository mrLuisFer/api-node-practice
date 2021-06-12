const express = require('express')
const app = express()
const morgan = require('morgan')

const expressRoutes = require('./routes/expressRoutes')

const pathJoin = require('./utils/pathJoin')

// Middlewares
app.use(express.json())
app.use(express.static(pathJoin('../public')))
app.use(morgan('dev'))

// APP Routes
app.use(expressRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server is on port:${PORT}`)
